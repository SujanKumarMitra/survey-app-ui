import { Button, FormLabel, Grid, TextField } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListAltIcon from '@material-ui/icons/ListAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import React from 'react';
import style from '../../utils/material-icon.module.css';
import PasswordField from '../PasswordField/PasswordField';
import Question from '../ResponseFields/Question/Question.lazy';
import cardStyles from './../../utils/MaterialCardStyles';
import { AxiosStateContext, FormResponseDataContext } from '../../pages/FormResponseData/FormResponseData';
import './FormResponseDataAccessForm.css';
import { useContext } from 'react';
import { useState } from 'react';
import ResponseDataState from '../../pages/FormResponseData/ResponseDataState';


const FormResponseDataAccessForm = (props) => {
    const cardClasses = cardStyles();
    const gridClasses = useStyles();
    const formDataAccessRequest = useContext(FormResponseDataContext);
    const { setAxiosState } = useContext(AxiosStateContext);
    const [requestState, setRequestState] = useState(formDataAccessRequest);

    const handleFormIdChange = (event) => {
        console.log(event.target);
        const { value } = event.target;
        formDataAccessRequest.formId = value;
        setRequestState({
            ...formDataAccessRequest,
            formId: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setAxiosState(oldState => {
            return {
                ...oldState,
                state: ResponseDataState.FORM_INPUT_COMPLETE,
            };
        })
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
                                    value={requestState.formId}
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
