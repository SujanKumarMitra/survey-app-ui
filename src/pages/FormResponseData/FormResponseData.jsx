import React, { createContext, useState } from 'react';
import FormResponseDataTableLoadingAnimation from '../../animations/FormResponseDataTableLoadingAnimation/FormResponseDataTableLoadingAnimation';
import FormResponseDataAccessForm from '../../components/FormResponseDataAccessForm/FormResponseDataAccessForm';
import FormResponseDataTable from '../../components/FormResponseDataTable/FormResponseDataTable';
import ServerErrorCard from '../../components/ServerErrorCard/ServerErrorCard';
import FormResponseDataService from '../../services/FormResponseDataService';
import ExtractErrors from '../../utils/ExtractErrors';
import './FormResponseData.css';
import ResponseDataState from './ResponseDataState';


export const AxiosStateContext = createContext();
const responseDataService = new FormResponseDataService();

const FormResponseData = (props) => {
    const [axiosState, setAxiosState] = useState({
        state: ResponseDataState.FORM_INPUT_IN_PROGRESS,
        request: {
            formId: '',
            accessKey: '',
        },
        fetch() {
            console.log(this.request);
            const axiosPromise = responseDataService.getResponseData(this.request);
            axiosPromise
                .then(axiosResponse => {
                    console.log(axiosResponse);
                    const downloadUrl = responseDataService.getResponseDownloadUrl(this.request);
                    const data = axiosResponse.data.data;
                    setAxiosState({
                        ...axiosState,
                        state: ResponseDataState.DATA_FETCH_SUCCESS,
                        formData: {
                            columns: data.questions.items,
                            data: data.responses.items
                                .map(row => {
                                    row[0] = new Date(row[0]).toLocaleString();
                                    return row;
                                }),
                            downloadUrl: downloadUrl,
                        },
                    })
                }).catch(error => {
                    console.log(`axios promise rejected`);
                    const {errorDescription} = ExtractErrors(error);
                    setAxiosState({
                        ...axiosState,
                        state: error.response ? ResponseDataState.DATA_FETCH_ERROR : ResponseDataState.API_ERROR,
                        errorMessage: errorDescription
                    })
                });
        },
    });
    console.log(axiosState);
    switch (axiosState.state) {
        case ResponseDataState.FORM_INPUT_IN_PROGRESS:
            return (
                <>
                    <AxiosStateContext.Provider value={{
                        axiosState: axiosState,
                        setAxiosState: setAxiosState,
                    }}>
                        <FormResponseDataAccessForm />
                    </AxiosStateContext.Provider>
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
                <>
                    <AxiosStateContext.Provider value={{
                        axiosState: axiosState,
                        setAxiosState: setAxiosState,
                    }}>
                        <FormResponseDataAccessForm 
                        errorMessage={axiosState.errorMessage}
                        />
                    </AxiosStateContext.Provider>
                </>
            );
        case ResponseDataState.API_ERROR:
            return (
                <ServerErrorCard />
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
