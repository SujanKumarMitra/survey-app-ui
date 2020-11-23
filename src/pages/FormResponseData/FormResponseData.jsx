import React, { createContext } from 'react';
import { useState } from 'react';
import FormResponseDataAccessForm from '../../components/FormResponseDataAccessForm/FormResponseDataAccessForm';
import FormResponseDataTable from '../../components/FormResponseDataTable/FormResponseDataTable';
import FormResponseDataTableLoadingAnimation from '../../animation/FormResponseDataTableLoadingAnimation/FormResponseDataTableLoadingAnimation';
import FormResponseDataService from '../../services/FormResponseDataService';
import './FormResponseData.css';
import ResponseDataState from './ResponseDataState';


export const FormResponseDataContext = createContext();
export const AxiosStateContext = createContext();
const responseDataService = new FormResponseDataService();
const FormResponseData = (props) => {
    const formDataAccessRequest = {
        formId: '',
        accessKey: '',
    };
    const [axiosState, setAxiosState] = useState({
        state: ResponseDataState.FORM_INPUT_IN_PROGRESS,
        fetch() {
            const axiosPromise = responseDataService.getResponseData(formDataAccessRequest);
            axiosPromise
                .then(axiosResponse => {
                    console.log(axiosResponse);
                    const downloadUrl = responseDataService.getResponseDownloadUrl(formDataAccessRequest);
                    const data = axiosResponse.data.data;
                    setAxiosState({
                        ...axiosState,
                        state: ResponseDataState.DATA_FETCH_SUCCESS,
                        formData: {
                            columns: data.questions.items,
                            data: data.responses.items,
                            downloadUrl: downloadUrl,
                        },
                    })
                }).catch(error => {
                    console.log(`axios promise rejected`);
                    setAxiosState({
                        ...axiosState,
                        state: ResponseDataState.DATA_FETCH_ERROR
                    })
                });
        },

    });
    switch (axiosState.state) {
        case ResponseDataState.FORM_INPUT_IN_PROGRESS:
            return (
                <>
                    <FormResponseDataContext.Provider value={formDataAccessRequest}>
                        <AxiosStateContext.Provider value={{
                            axiosState: axiosState,
                            setAxiosState: setAxiosState,
                        }}>
                            <FormResponseDataAccessForm />
                        </AxiosStateContext.Provider>
                    </FormResponseDataContext.Provider>
                </>
            );
        case ResponseDataState.FORM_INPUT_COMPLETE:
            axiosState.fetch();
            return (
                <FormResponseDataTableLoadingAnimation />
            );
        case ResponseDataState.DATA_FETCH_SUCCESS:
            return (
                <AxiosStateContext.Provider value={{
                    axiosState: axiosState,
                    setAxiosState: setAxiosState,
                }}>
                    <FormResponseDataTable
                    />
                </AxiosStateContext.Provider>
            );
        case ResponseDataState.DATA_FETCH_ERROR:
            return (
                <h1>error</h1>
            );
        default: // likely not going to execute
            console.log(`unknown state ${axiosState.state}`)
            return (
                <>
                </>
            );
    }
}


FormResponseData.defaultProps = {};

export default FormResponseData;
