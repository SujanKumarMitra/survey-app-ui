import { Button, FormLabel, Grid, TextField } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import React, { useContext } from 'react';
import { AxiosStateContext } from '../../pages/FormResponseData/FormResponseData';
import ResponseDataState from '../../pages/FormResponseData/ResponseDataState';
import style from '../../utils/material-icon.module.css';
import PasswordField from '../PasswordField/PasswordField';
import Question from '../ResponseFields/Question/Question.lazy';
import cardStyles from './../../utils/MaterialCardStyles';
import './FormResponseDataAccessForm.css';



const ErrorMessage = (props) => (
    <span style={{ color: red[400] }}>
        <Question
            question={props.message}
            icon={<ErrorOutlineIcon className={style.alignMiddle} />} />
    </span >
);
const FormResponseDataAccessForm = (props) => {
    const cardClasses = cardStyles();
    const gridClasses = useStyles();
    const { axiosState, setAxiosState } = useContext(AxiosStateContext);

    const handleFormIdChange = (event) => {
        console.log(event.target);
        const { value } = event.target;
        axiosState.request.formId = value;
        setAxiosState({
            ...axiosState,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setAxiosState(oldState => {
            return {
                ...oldState,
                state: ResponseDataState.FORM_INPUT_COMPLETE,
            };
        });
    };

    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Typography variant="h4" align="center">
                        Form Responses
                    </Typography>
                    <br />
                    <Typography variant="body1" align="center">
                        Verify your credentials
                    </Typography>
                    <br />
                    {props.errorMessage ? <ErrorMessage message={props.errorMessage} /> : <></> }
                    <br />
                    <form onSubmit={handleSubmit}>
                        <Grid container
                            direction="column"
                            justify="center"
                            alignItems="stretch"
                            spacing={2}
                            className={gridClasses.root}>
                            <Grid item>
                                <FormLabel component={() =>
                                (<Question
                                    question='Form ID'
                                    icon={<ListAltIcon
                                        className={style.alignMiddle}
                                    />}
                                />)} />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    required
                                    value={axiosState.request.formId}
                                    onChange={handleFormIdChange}
                                    label='Form ID'
                                    variant='outlined'
                                    autoComplete='off'
                                />
                            </Grid>
                            <Grid item>
                                <FormLabel component={() =>
                                (<Question
                                    question='Access Key'
                                    icon={<VpnKeyIcon
                                        className={style.alignMiddle}
                                    />}
                                />)} />
                            </Grid>
                            <Grid item>
                                <PasswordField />
                            </Grid>
                            <Grid item>
                                <Button
                                    type='submit'
                                    variant="contained"
                                    color="primary" >
                                    Retrieve
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </main>
        </>
    );
}

FormResponseDataAccessForm.defaultProps = {};

export default FormResponseDataAccessForm;
