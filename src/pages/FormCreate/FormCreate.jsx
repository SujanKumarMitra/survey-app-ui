import React, { createContext, useState } from 'react';
import FormLayout from '../../components/FormLayout/FormLayout';
import FormCreateLoadingAnimaton from "../../animations/FormCreateLoadingAnimation/FormCreateLoadingAnimation"
import FormCreateState from './FormCreateState';
import './FormCreate.css';
import FieldMapFlatMapper from '../../services/FieldMapFlatMapper';
import FormCreateService from '../../services/FormCreateService';
import ServerErrorCard from '../../components/ServerErrorCard/ServerErrorCard';
import FormCreateSuccess from '../../components/FormCreateSuccess/FormCreateSuccess';


export const AxiosContext = createContext();
const formCreateService = new FormCreateService();
const FormCreate = (props) => {

    const [axiosState, setAxiosState] = useState({
        state: FormCreateState.CREATING,
        post({ formInfo, fieldMap }) {
            console.log(fieldMap);
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
                const state = error.response ? FormCreateState.POST_ERROR : FormCreateState.SERVER_ERROR;
                setAxiosState({
                    ...axiosState,
                    state: state,
                    ...error
                });
            })
        }
    });


    const state = axiosState.state;
    switch (state) {
        case FormCreateState.CREATING:
            return (
                <AxiosContext.Provider value={(formData) => {
                    axiosState.post(formData);
                    setAxiosState(old => ({ ...old, state: FormCreateState.POSTING }));
                }}>
                    <FormLayout />
                </AxiosContext.Provider>
            );
        case FormCreateState.POSTING:
            return (
                <FormCreateLoadingAnimaton />
            );
        case FormCreateState.POST_SUCCESS:
            return (
                <FormCreateSuccess />
            );
        case FormCreateState.POST_ERROR:
            return ( // TODO
                <>
                </>
            );
        case FormCreateState.SERVER_ERROR:
            return (
                <ServerErrorCard />
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
