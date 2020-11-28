import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import './TimeField.css';

const TimeField = (props) => {
    return (
        <FieldCard>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    Time Field
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <ScheduleRoundedIcon />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        multiline
                        label="Question" />
                </Grid>
            </Grid>
        </FieldCard>
    );
}

TimeField.defaultProps = {};

export default TimeField;
