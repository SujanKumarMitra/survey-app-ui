import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { FormResponseDataContext } from '../../pages/FormResponseData/FormResponseData';
import cardStyles from './../../utils/MaterialCardStyles';
import './PasswordField.css';



const PasswordField = (props) => {
    const classes = cardStyles();
    const formDataAccessRequest = useContext(FormResponseDataContext);
    const [requestState, setRequestState] = useState({
        ...formDataAccessRequest,
        password: '',
        showPassword: false,
    });
    const handleChange = (event) => {
        const { value } = event.target;
        console.log(event.target);
        formDataAccessRequest.accessKey = value;
        setRequestState({
            ...formDataAccessRequest,
        });
    };

    const handleClickShowPassword = (event) => {
        setRequestState({ 
            ...formDataAccessRequest, 
            showPassword: !requestState.showPassword 
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl required fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={requestState.showPassword ? 'text' : 'password'}
                value={requestState.accessKey}
                onChange={handleChange}
                required
                autoComplete='off'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {requestState.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    );
}


PasswordField.defaultProps = {};

export default PasswordField;
