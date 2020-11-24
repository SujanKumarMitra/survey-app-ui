import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import clsx from 'clsx';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AxiosStateContext } from '../../pages/FormResponseData/FormResponseData';
import cardStyles from './../../utils/MaterialCardStyles';
import './PasswordField.css';



const PasswordField = (props) => {
    const classes = cardStyles();
    const [showPassword, setShowPassword] = useState(false);
    const { axiosState, setAxiosState } = useContext(AxiosStateContext);
    const handleChange = (event) => {
        const { value } = event.target;
        axiosState.request.accessKey = value;
        console.log(event.target);
        setAxiosState({
            ...axiosState,
        });
    };

    const handleClickShowPassword = (event) => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <FormControl required fullWidth className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={axiosState.request.accessKey}
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
                            {showPassword ? <Visibility /> : <VisibilityOff />}
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
