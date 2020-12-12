import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import required from '../../../utils/RequiredFragment';
import './Question.css';

const Question = (props) => (
    <>
        <Grid container spacing={1}>
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item>
                <Typography variant='body1'>
                    {props.question}
                    {required(props.required)}
                </Typography>
            </Grid>
        </Grid>

    </>
);

export default Question;
