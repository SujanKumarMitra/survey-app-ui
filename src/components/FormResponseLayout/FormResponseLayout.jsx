import { Button, Container } from '@material-ui/core';
import React, { useContext } from 'react';
import getResponseField from '../../utils/ResponseFieldMapper';
import ConfirmDialogBox from '../ConfirmDialogBox/ConfirmDialogBox';
import { ApiStateContext } from '../../pages/FormResponse/FormResponse';
import FormDescription from './../FormDescription/FormDescription.lazy';
import './FormResponseLayout.css';

const FormResponseLayout = (props) => {
    const { formTemplate } = props;
    const { apiState } = useContext(ApiStateContext);
    const [dialogBoxState, setDialogBoxState] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDialogBoxState(true);
    };

    const handleConfirm = (event) => {
        setDialogBoxState(false);
        apiState.post();
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
FormResponseLayout.defaultProps = {};

export default FormResponseLayout;
