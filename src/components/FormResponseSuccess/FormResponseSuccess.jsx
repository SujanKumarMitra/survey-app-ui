import { Button, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import HomeIcon from '@material-ui/icons/Home';
import PublishIcon from '@material-ui/icons/Publish';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cardStyles from '../../utils/MaterialCardStyles';
import { ResponseContext } from '../../pages/FormResponse/FormResponse';
import ResponseState from '../../pages/FormResponse/ResponseState';
import './FormResponseSuccess.css';

const FormResponseSuccess = (props) => {
    const cardClasses = cardStyles();
    const { apiCallInfo, setApiCallInfo } = useContext(ResponseContext);
    const handleClick = (event) => {
        setApiCallInfo({
            ...apiCallInfo,
            state: ResponseState.FETCH_SUCCESS,
        });
    };

    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Typography variant="h2" align="center">
                        <span style={{
                            color: green[500]
                        }}><DoneAllIcon
                                fontSize='large' />
                            {props.title}
                        </span>
                    </Typography>
                    <Typography variant="body1" >
                        {props.description}
                    </Typography>
                    <br />
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
                            <Link to={`/form/${apiCallInfo.formId}`}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleClick}
                                    startIcon={<PublishIcon />}
                                >
                                    Submit Another Response
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        </>
    );
}
FormResponseSuccess.defaultProps = {
    title: 'Success',
    description: 'Your response has been saved successfully'
};

export default FormResponseSuccess;
