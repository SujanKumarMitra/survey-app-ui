import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import './Title.css';

const Title = (props) => {
    return (
        <Grid
            container
            spacing={2}
            justify="center">
            <Typography variant="h5">
                {props.content}
            </Typography>
        </Grid>
    );
}

Title.defaultProps = {};

export default Title;
