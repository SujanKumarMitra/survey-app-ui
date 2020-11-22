import { Button, CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import { Link } from 'react-router-dom';
import cardStyles from '../../utils/MaterialCardStyles';
import './FormResponseError.css';

const FormResponseError = (props) => {
    const cardClasses = cardStyles();
    return (
        <>
            <CssBaseline />
            <main className={cardClasses.layout}>
                <Paper className={cardClasses.paper}>
                    <Typography variant="h3" align="center">
                        <span style={{
                            color: red[500]
                        }}><ErrorOutlineIcon
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
                    </Grid>
                </Paper>
            </main>
        </>
    );
};

FormResponseError.defaultProps = {
    title: 'Error!!',
    description: 'Something went wrong. Please try again later.'
};

export default FormResponseError;
