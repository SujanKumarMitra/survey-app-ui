import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormResponseLayout from '../../components/FormResponseLayout/FormResponseLayout';
import { getFormatter } from '../../services/ResponseFormatter'
import ResponseState from './ResponseState';
import FormResponseService from '../../services/FormResponseService';
import ResponseMap from '../../utils/ResponseMap';
import Navbar from "../../components/Navbar/Navbar";
import FormResponseLoadingAnimation from '../../animations/FormResponseLoadingAnimation/FormResponseLoadingAnimation';
import FormResponseSuccess from '../../components/FormResponseSuccess/FormResponseSuccess';
import ServerErrorCard from '../../components/ServerErrorCard/ServerErrorCard';
import './FormResponse.css';
import ApiResponseError from '../../components/ApiResponseError/ApiResponseError';

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
                const state = error.response ? ResponseState.FETCH_ERROR : ResponseState.API_ERROR;
                setAxiosState({
                    ...this,
                    state: state,
                    error: error,
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
                const state = error.response ? ResponseState.POST_ERROR : ResponseState.API_ERROR;
                setAxiosState({
                    ...this,
                    state: state,
                    error: error,
                });
            })
        }
    });

    const state = axiosState.state;
    useEffect(() => {
        switch (state) {
            case ResponseState.NOT_FETCHED:
                document.title = "Fetching Form";
                break;
            case ResponseState.FETCH_SUCCESS:
                document.title = axiosState.formTemplate.name;
                break;
            case ResponseState.FETCH_ERROR:
                document.title = "Survey Not Found";
                break;
            case ResponseState.POSTING:
                document.title = "Posting Response";
                break;
            case ResponseState.POST_SUCCESS:
                document.title = "Response Posted";
                break;
            case ResponseState.POST_ERROR:
                document.title = "Error occurred while posing Response";
                break;
            case ResponseState.API_ERROR:
                document.title = "Server Error";
                break;
            default:
                break;
        }
    }, [state, axiosState]);

    switch (state) {
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
                        <Navbar />
                        <FormResponseLayout formTemplate={axiosState.formTemplate} />
                    </ApiStateContext.Provider>
                </ResponseContext.Provider >
            );
        case ResponseState.FETCH_ERROR:
            return (
                <>
                    <Navbar />
                    <ApiResponseError
                        {...axiosState}
                    />
                </>
            );
        case ResponseState.POSTING:
            return <FormResponseLoadingAnimation />;
        case ResponseState.POST_SUCCESS:
            return (
                <ResponseContext.Provider value={{
                    apiCallInfo: axiosState,
                    setApiCallInfo: setAxiosState,
                }}>
                    <Navbar />
                    <FormResponseSuccess />
                </ResponseContext.Provider>
            );
        case ResponseState.POST_ERROR:
            return (
                <>
                    <Navbar />
                    <ApiResponseError
                        {...axiosState}
                    />
                </>
            );
        case ResponseState.API_ERROR:
            return (
                <>
                    <Navbar />
                    <ServerErrorCard />
                </>
            );
        default:
            console.log(`invalid state ${axiosState.state}`);
    }
};

FormResponse.defaultProps = {};

export default FormResponse;

