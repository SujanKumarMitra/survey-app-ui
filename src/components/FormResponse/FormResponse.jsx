import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormatter } from '../../services/ResponseFormatter';
import ResponseMap from '../../utils/ResponseMap';
import FormLayout from '../FormLayout/FormLayout';
import FormResponseService from './../../services/FormResponseService';
import FormResponseLoadingAnimation from './../animation/FormResponseLoadingAnimation/FormResponseLoadingAnimation.lazy';
import FormResponseSuccess from '../FormResponseSuccess/FormResponseSuccess';
import './FormResponse.css';

const formResponseService = new FormResponseService();
const responseMap = new ResponseMap();
export const ResponseContext = createContext();

const FormResponse = (props) => {
    const { formId } = useParams();
    const [apiCallInfo, setApiCallInfo] = useState({
        formId: formId,
        state: 'NOT_FETCHED',
        fetch() {
            const formPromise = formResponseService.getForm(formId);
            formPromise.then(axiosResponse => {
                console.log('axios promise resolved');
                console.log(axiosResponse);
                setApiCallInfo({
                    ...this,
                    state: 'FETCH_SUCCESS',
                    response: axiosResponse,
                    formTemplate: axiosResponse.data.data
                });
            }).catch(error => {
                console.log('axios promise rejected');
                console.log({ ...error });
            });
        },
        post() {
            const formTemplate = this.formTemplate;
            setApiCallInfo({
                ...this,
                state: 'POSTING',
            })
            const fieldMap = formTemplate
                .fields
                .reduce((map, field) => {
                    map.set(field.id, field);
                    return map;
                }, new Map());

            const responses = responseMap.getValues()
                .map(response => {
                    const formatter = getFormatter(response.type);
                    const field = fieldMap.get(response.questionId);
                    return formatter(field, response);
                });
            const responseBody = {
                formId: this.formId,
                responses: responses
            };

            const axiosPromise = formResponseService.postResponse(responseBody);
            axiosPromise.then(axiosResponse => {
                console.log('axios promise resolved');
                console.log(axiosResponse);

                setApiCallInfo({
                    ...this,
                    state: 'POST_SUCCESS',
                });

            }).catch(error => {
                console.log('axios promise rejected');
                console.log({ ...error });
            })
        }
    });

    switch (apiCallInfo.state) {
        case 'NOT_FETCHED':
            apiCallInfo.fetch();
            return <FormResponseLoadingAnimation />
        case 'FETCH_SUCCESS':
            return (
                <ResponseContext.Provider value={{
                    responseMap: responseMap,
                    apiCallInfo: apiCallInfo,
                }}>
                    <FormLayout formTemplate={apiCallInfo.formTemplate} />
                </ResponseContext.Provider>
            );
        case 'POSTING':
            return <FormResponseLoadingAnimation />;
        case 'POST_SUCCESS':
            return (
                <ResponseContext.Provider value={{
                    apiCallInfo: apiCallInfo,
                    setApiCallInfo: setApiCallInfo,
                }}>
                    <FormResponseSuccess />
                </ResponseContext.Provider>
            );
        default:
            console.log(`invalid state ${apiCallInfo.state}`);
    }
};

FormResponse.defaultProps = {};

export default FormResponse;
