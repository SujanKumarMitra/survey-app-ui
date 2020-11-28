import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import './RadioField.css';

const RadioField = (props) => {
    return (
        <FieldCard>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    Radio Field
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <RadioButtonCheckedIcon />
                </Grid>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        multiline
                        label="Question" />
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    Options
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <RadioButtonUncheckedIcon />
                </Grid>
                <Grid item xs={9}>
                    <TextField
                        fullWidth
                        multiline
                        label="Option" />
                </Grid>
                <Grid item>
                    <IconButton
                        style={{
                            padding: '3px',
                        }}
                        onClick={(e) => { }}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <br />
            <Grid
                container
                spacing={2}
                justify="flex-end">
                <Button variant="contained" color="primary">
                    Add Option
                </Button>
            </Grid>
        </FieldCard >
    );
};

RadioField.defaultProps = {};

export default RadioField;
