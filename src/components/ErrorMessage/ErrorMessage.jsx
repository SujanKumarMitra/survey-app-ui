import React from 'react';
import './ErrorMessage.css';
import { Typography, FormLabel } from '@material-ui/core';

const ErrorMessage = (props) => (
    <Typography
        variant='body1'>
        <FormLabel component="legend">
            {props.message}
        </FormLabel>
    </Typography>
);

ErrorMessage.propTypes = {};

ErrorMessage.defaultProps = {
    error: 'Error!'
};

export default ErrorMessage;
