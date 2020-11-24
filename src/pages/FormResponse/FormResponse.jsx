import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormLayout from '../../components/FormLayout/FormLayout';
import './FormResponse.css';
import { getFormatter } from '../../services/ResponseFormatter'
import ResponseState from './ResponseState';
import FormResponseService from '../../services/FormResponseService';
import ResponseMap from '../../utils/ResponseMap';
import FormResponseLoadingAnimation from '../../animations/FormResponseLoadingAnimation/FormResponseLoadingAnimation';
import FormResponseSuccess from '../../components/FormResponseSuccess/FormResponseSuccess';
import FormResponseError from '../../components/FormResponseError/FormResponseError';
import ServerErrorCard from '../../components/ServerErrorCard/ServerErrorCard';
import ExtractErrors from '../../utils/ExtractErrors';

const formResponseService = new FormResponseService();
const responseMap = new ResponseMap();
export const ResponseContext = createContext();
export const ApiStateContext = createContext();

const FormResponse = (props) => {
    const { formId } = useParams();
    const [axiosState, setAxiosState] = useState({
        formId: formId,
        state: ResponseState.NOT_FETCHED,
        fetch() {
            const formPromise = formResponseService.getForm(formId);
            formPromise.then(axiosResponse => {
                console.log('axios promise resolved');
                console.log(axiosResponse);
                setAxiosState({
                    ...this,
                    state: ResponseState.FETCH_SUCCESS,
                    response: axiosResponse,
                    formTemplate: axiosResponse.data.data
                });
            }).catch(error => {
                console.log('axios promise rejected');
                console.log({ ...error });
                const { errorTitle, errorDescription } = ExtractErrors(error);
                setAxiosState({
                    ...this,
                    state: error.response ? ResponseState.FETCH_ERROR : ResponseState.API_ERROR,
                    errorTitle: errorTitle,
                    errorDescription: errorDescription
                });
            });
        },
        post() {
            const formTemplate = this.formTemplate;
            setAxiosState({
                ...this,
                state: ResponseState.POSTING,
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

                setAxiosState({
                    ...this,
                    state: ResponseState.POST_SUCCESS,
                });

            }).catch(error => {
                console.log('axios promise rejected');
                console.log({ ...error });
                const { errorTitle, errorDescription } = ExtractErrors(error);
                setAxiosState({
                    ...this,
                    state: ResponseState.POST_ERROR,
                    errorTitle: errorTitle,
                    errorDescription: errorDescription
                });
            })
        }
    });

    switch (axiosState.state) {
        case ResponseState.NOT_FETCHED:
            axiosState.fetch();
            return <FormResponseLoadingAnimation />
        case ResponseState.FETCH_SUCCESS:
            return (
                <ResponseContext.Provider value={{
                    responseMap: responseMap
                }}>
                    <ApiStateContext.Provider value={{
                        apiState: axiosState,
                        setApiState: setAxiosState
                    }}>
                        <FormLayout formTemplate={axiosState.formTemplate} />
                    </ApiStateContext.Provider>
                </ResponseContext.Provider >
            );
        case ResponseState.FETCH_ERROR:
            return (
                <FormResponseError
                    title={`${axiosState.errorTitle}`}
                    description={`${axiosState.errorDescription}`}
                />
            );
        case ResponseState.POSTING:
            return <FormResponseLoadingAnimation />;
        case ResponseState.POST_SUCCESS:
            return (
                <ResponseContext.Provider value={{
                    apiCallInfo: axiosState,
                    setApiCallInfo: setAxiosState,
                }}>
                    <FormResponseSuccess />
                </ResponseContext.Provider>
            );
        case ResponseState.POST_ERROR:
            return (
                <FormResponseError
                    title={`${axiosState.errorTitle}`}
                    description={`${axiosState.errorDescription}`}
                />
            );
        case ResponseState.API_ERROR:
            return (
                <ServerErrorCard />
            );
        default:
            console.log(`invalid state ${axiosState.state}`);
    }
};

FormResponse.defaultProps = {};

export default FormResponse;

