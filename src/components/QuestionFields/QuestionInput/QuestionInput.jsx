import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import './QuestionInput.css';

const QuestionInput = (props) => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="flex-end">
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    multiline
                    label="Question" />
            </Grid>
        </Grid>
    );
};

QuestionInput.defaultProps = {};

export default QuestionInput;
