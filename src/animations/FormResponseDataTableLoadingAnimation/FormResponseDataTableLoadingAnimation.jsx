import { Container, Grid, Paper } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from '@material-ui/pickers/views/Calendar/Day';
import React from 'react';
import './FormResponseDataTableLoadingAnimation.css';


const FormResponseDataTableLoadingAnimation = (props) => {
    const classes = useStyles();
    return (
        <Container>
            <Paper className={classes.paper}>
                <Grid container
                    direction="column"
                    justify="center"
                    spacing={1}
                    className={classes.root}>
                    <Grid item>
                        <Skeleton variant="rect" width='100%' height='60px' />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rect" width='100%' height='60px' />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rect" width='100%' height='60px' />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rect" width='100%' height='60px' />
                    </Grid>
                    <Grid item>
                        <Skeleton variant="rect" width='100%' height='60px' />
                    </Grid>
                </Grid>
            </Paper>
            <Paper className={classes.paper}>
                <Skeleton style={{
                    marginLeft: '12.5%',
                    marginRight: '12.5%',
                }} variant="rect" width='75%' height='60px' />
            </Paper>
        </Container>
    );
};

FormResponseDataTableLoadingAnimation.defaultProps = {};

export default FormResponseDataTableLoadingAnimation;
