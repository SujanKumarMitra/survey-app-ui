import { Button, Container } from '@material-ui/core';
import React, { createContext, useState } from 'react';
import getResponseField from '../../utils/ResponseFieldMapper';
import FormResponseService from './../../services/FormResponseService';
import FormResponseLoadingAnimation from './../animation/FormResponseLoadingAnimation/FormResponseLoadingAnimation.lazy';
import FormDescription from './../FormDescription/FormDescription.lazy';
import './FormResponse.css';
import ResponseMap from '../../utils/ResponseMap';

const formResponseService = new FormResponseService();
const responseMap = new ResponseMap();
export const ResponseContext = createContext();

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(responseMap);
}

const FormLayout = (props) => {
    const formTemplate = props.data;
    return (
        <Container maxWidth="sm">
            <ResponseContext.Provider value={responseMap}>
                <FormDescription
                    title={formTemplate.name}
                    description={formTemplate.description} />
                <form onSubmit={handleSubmit}>
                    {formTemplate.fields.map(getResponseField)}
                    <Button type='submit' variant="contained" color="primary">
                        Submit
                </Button>
                </form>
            </ResponseContext.Provider>
        </Container>
    );
};

const FormResponse = (props) => {
    const [apiCallInfo, setApiCallInfo] = useState({
        resolved: false,
        hasErrors: false,
        error: undefined,
        fetch: () => {
            const formPromise = formResponseService.getForm('5a8d791d');
            formPromise.then(axiosResponse => {
                console.log('promise resolved');
                setApiCallInfo({
                    ...apiCallInfo,
                    resolved: true,
                    hasErrors: false,
                    response: axiosResponse,
                    error: undefined
                });
            }).catch(error => {
                console.log(error);
            })
                ;
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
