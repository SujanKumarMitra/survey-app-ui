import React, { createContext, useState } from 'react';
import ResponseMap from '../../utils/ResponseMap';
import FormLayout from '../FormLayout/FormLayout';
import FormResponseService from './../../services/FormResponseService';
import FormResponseLoadingAnimation from './../animation/FormResponseLoadingAnimation/FormResponseLoadingAnimation.lazy';
import './FormResponse.css';

const formResponseService = new FormResponseService();
const responseMap = new ResponseMap();
export const ResponseContext = createContext();

const FormResponse = (props) => {
    const [apiCallInfo, setApiCallInfo] = useState({
        fetch() {
            const formPromise = formResponseService.getForm('5a8d791d');
            formPromise.then(axiosResponse => {
                console.log('axios promise resolved');
                console.log(axiosResponse);
                setApiCallInfo({
                    ...apiCallInfo,
                    resolved: true,
                    response: axiosResponse,
                });
            }).catch(error => {
                console.log('axios promise rejected');
                console.log({ ...error });
            });
        },
    });
    if (apiCallInfo.resolved) {
        return (
            <ResponseContext.Provider value={{
                responseMap: responseMap,
            }}>
                <FormLayout {...apiCallInfo.response.data} />
            </ResponseContext.Provider>
        );
    } else {
        apiCallInfo.fetch();
        return (
            <FormResponseLoadingAnimation />
        );
    }
};

FormResponse.defaultProps = {};

export default FormResponse;
