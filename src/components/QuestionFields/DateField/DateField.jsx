import { Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import './DateField.css';

const DateField = (props) => {
    return (
        <FieldCard>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    Date Field
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <DateRangeRoundedIcon />
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

DateField.defaultProps = {};

export default DateField;
