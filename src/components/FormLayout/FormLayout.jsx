import { Button, Container } from '@material-ui/core';
import React, { useContext } from 'react';
import getResponseField from '../../utils/ResponseFieldMapper';
import ConfirmDialogBox from '../ConfirmDialogBox/ConfirmDialogBox';
import { ResponseContext } from '../FormResponse/FormResponse';
import FormDescription from './../FormDescription/FormDescription.lazy';
import './FormLayout.css';

const FormLayout = (props) => {
    const formTemplate = props.data;
    const responseMap = useContext(ResponseContext);
    const [dialogBoxState, setDialogBoxState] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDialogBoxState(true);
    };

    const handleConfirm = (event) => {
        setDialogBoxState(false);
        console.log(responseMap);
    };

    const handleCancel = (event) => {
        setDialogBoxState(false);
    };

    return (
        <Container maxWidth="sm">
            <FormDescription
                title={formTemplate.name}
                description={formTemplate.description} />
            <form onSubmit={handleSubmit}>
                {formTemplate.fields.map(getResponseField)}
                <Button type='submit' variant="contained" color="primary">
                    Submit
                    </Button>
                <ConfirmDialogBox
                    open={dialogBoxState}
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            </form>
        </Container>
    );
};

FormLayout.propTypes = {};

FormLayout.defaultProps = {};

export default FormLayout;
