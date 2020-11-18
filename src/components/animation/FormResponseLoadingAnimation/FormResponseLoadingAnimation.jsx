import { Box } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import cardStyles from '../../../utils/MaterialCardStyles';
import './FormResponseLoadingAnimation.css';

const FormDescriptionAnimationArea = (props) => {
    const classes = props.classes;
    return (
        <Paper className={classes.paper}>
            <Box display="flex" alignItems="center">
                <Box width='100%'>
                    <Skeleton variant="text" width='100%' height='75px' />
                    <Skeleton variant="rect" width='100%' height='100px' />
                </Box>
            </Box>
        </Paper>
    );
};

const FormResponseAnimationArea = (props) => {
    const classes = props.classes;
    return (
        <Paper className={classes.paper}>
            <Box display="flex" alignItems="center">
                <Box width='100%'>
                    <Skeleton variant="text" width='75%' height='70px' />
                    <Skeleton variant="text" width='60%' height='50px' />
                    <Skeleton variant="text" width='60%' height='50px' />
                    <Skeleton variant="text" width='60%' height='50px' />
                    <Skeleton variant="text" width='60%' height='50px' />
                </Box>
            </Box>
        </Paper>
    );
};

const FormResponseLoadingAnimation = (props) => {
    const classes = cardStyles();
    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <FormDescriptionAnimationArea classes={classes} />
                <FormResponseAnimationArea classes={classes} />
            </main>

        </>
    );
};

FormResponseLoadingAnimation.defaultProps = {};

export default FormResponseLoadingAnimation;
