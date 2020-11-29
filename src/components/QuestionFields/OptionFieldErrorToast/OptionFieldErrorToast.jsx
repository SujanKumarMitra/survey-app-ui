import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import './OptionFieldErrorToast.css';

const OptionFieldErrorToast = (props) => {
    return (
        <Snackbar open={props.open} autoHideDuration={2000} onClose={props.handleClose}>
            <Alert onClose={props.handleClose} severity="error">
                Must Have At Least One Option
            </Alert>
        </Snackbar>
    );
}


OptionFieldErrorToast.defaultProps = {
    open: false,
    handleClose: (event, reason) => { }
};

export default OptionFieldErrorToast;
