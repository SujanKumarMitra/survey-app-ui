import React, { useState } from 'react';
import FormResponseService from './../../services/FormResponseService';
import FormResponseLoadingAnimation from './../animation/FormResponseLoadingAnimation/FormResponseLoadingAnimation.lazy';
import './FormResponse.css';
import FormDescription from './../FormDescription/FormDescription.lazy';
import getResponseField from '../../utils/ResponseFieldMapper';

const formResponseService = new FormResponseService();

const FormLayout = (props) => {
    const formTemplate = props.data;
    return (
        <>
            <FormDescription
                title={formTemplate.name}
                description={formTemplate.description} />

            {formTemplate.fields.map(getResponseField)}
        </>
    );
};

const FormResponse = (props) => {
    const [apiCallInfo, setApiCallInfo] = useState({
        resolved: false,
        fetch: () => {
            const formPromise = formResponseService.getForm('5a8d791d');
            formPromise.then(axiosResponse => {
                console.log('promise resolved');
                setApiCallInfo({ ...apiCallInfo, resolved: true, response: axiosResponse });
            });
        },
        response: undefined
    });
    if (apiCallInfo.resolved) {
        return (
            <FormLayout {...apiCallInfo.response.data} />
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
