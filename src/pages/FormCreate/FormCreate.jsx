import React, { createContext, useEffect, useState } from 'react';
import FormLayout from '../../components/FormLayout/FormLayout';
import FormCreateLoadingAnimaton from "../../animations/FormCreateLoadingAnimation/FormCreateLoadingAnimation"
import Navbar from "../../components/Navbar/Navbar";
import FormCreateState from './FormCreateState';
import './FormCreate.css';
import FieldMapFlatMapper from '../../services/FieldMapFlatMapper';
import FormCreateService from '../../services/FormCreateService';
import ServerErrorCard from '../../components/ServerErrorCard/ServerErrorCard';
import FormCreateSuccess from '../../components/FormCreateSuccess/FormCreateSuccess';
import ApiResponseError from '../../components/ApiResponseError/ApiResponseError';


export const AxiosContext = createContext();
const formCreateService = new FormCreateService();
const FormCreate = (props) => {

    const [axiosState, setAxiosState] = useState({
        state: FormCreateState.CREATING,
        post({ formInfo, fieldMap }) {
            const fields = FieldMapFlatMapper(fieldMap);
            const requestBody = { ...formInfo, fields: fields };
            const axiosPromise = formCreateService.post(requestBody);

            axiosPromise.then(axiosResponse => {
                console.log(`axios promise resolved`);
                console.log(axiosResponse);
                setAxiosState({
                    ...axiosState,
                    state: FormCreateState.POST_SUCCESS,
                    axiosResponse: axiosResponse
                });
            }).catch(error => {
                console.log(`axios promise rejected`);
                console.log({...error});
                const state = error.response ? FormCreateState.POST_ERROR : FormCreateState.SERVER_ERROR;
                setAxiosState({
                    ...axiosState,
                    state: state,
                    error: error
                });
            })
        }
    });


    const state = axiosState.state;
    useEffect(() => {
        switch (state) {
            case FormCreateState.CREATING:
                document.title="Create Survey";
                break;
            case FormCreateState.POSTING:
                document.title="Creating Survey";
                break;
            case FormCreateState.POST_SUCCESS:
                document.title="Survey Created";
                break;
            case FormCreateState.POST_ERROR:
                document.title="Error occurred while creating Survey";
                break;
            case FormCreateState.SERVER_ERROR:
                document.title="Server Error";
                break;
            default:
                break;
        }
    }, [state]);
    switch (state) {
        case FormCreateState.CREATING:
            return (
                <AxiosContext.Provider value={(formData) => {
                    axiosState.post(formData);
                    setAxiosState(old => ({ ...old, state: FormCreateState.POSTING }));
                }}>
                    <Navbar />
                    <FormLayout />
                </AxiosContext.Provider>
            );
        case FormCreateState.POSTING:
            return (
                <>
                    <Navbar />
                    <FormCreateLoadingAnimaton />
                </>
            );
        case FormCreateState.POST_SUCCESS:
            console.log({ ...axiosState.axiosResponse.data.data });
            return (
                <>
                    <Navbar />
                    <FormCreateSuccess
                        formId={axiosState.axiosResponse.data.data.id}
                        formKey={axiosState.axiosResponse.data.data.key}
                    />
                </>
            );
        case FormCreateState.POST_ERROR:
            return (
                <>
                    <Navbar />
                    <ApiResponseError error={axiosState.error} />
                </>
            );
        case FormCreateState.SERVER_ERROR:
            return (
                <>
                    <Navbar />
                    <ServerErrorCard />
                </>
            );
        default:
            console.log(`unknown state ${state}`);
            return (
                <>
                </>
            );
    }
}

FormCreate.defaultProps = {};

export default FormCreate;
