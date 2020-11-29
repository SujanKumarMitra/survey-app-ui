import React from 'react';
import { Button, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ListAltIcon from '@material-ui/icons/ListAlt';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import PublishIcon from '@material-ui/icons/Publish';
import LinkIcon from '@material-ui/icons/Link';
import { Link } from 'react-router-dom';
import cardStyles from '../../utils/MaterialCardStyles';
import './FormCreateSuccess.css';
import { green } from '@material-ui/core/colors';
import Question from '../ResponseFields/Question/Question.lazy';

const FormCreateSuccess = (props) => {
    const cardClasses = cardStyles();
    console.log(props);
    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={4}>

                        <Grid item>
                            <Typography variant="h2" align="center">
                                <span style={{
                                    color: green[500]
                                }}><DoneAllIcon
                                        fontSize='large' />
                                        Success
                                </span>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography align="center" variant="body1" >
                                Form Created Successfully. Please save the credentials for future use
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction="column"
                                justify="center"
                                spacing={2}>
                                <Grid item>
                                    <Question
                                        question='Form ID'
                                        icon={<ListAltIcon />}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        disabled
                                        fullWidth
                                        variant="filled"
                                        label="ID"
                                        defaultValue={props.formId}
                                    />
                                </Grid>
                                <Grid item>
                                    <Question
                                        question='Access Key'
                                        icon={<VpnKeyIcon />}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        disabled
                                        fullWidth
                                        variant="filled"
                                        label="Key"
                                        defaultValue={props.formKey}
                                    />
                                </Grid>
                                <Grid item>
                                    <Question
                                        question='Response Url'
                                        icon={<LinkIcon />}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        disabled
                                        fullWidth
                                        variant="filled"
                                        label="Link"
                                        defaultValue={`${window.location.origin}/submit/${props.formId}`}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Link to='/' >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<HomeIcon />} >
                                            Go Home
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to={`/submit/${props.formId}`} >
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<PublishIcon />} >
                                            Submit a Response
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </>
    );
}

FormCreateSuccess.defaultProps = {
    formId: 'formId',
    formKey: 'key',
};

export default FormCreateSuccess;
