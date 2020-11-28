import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import './CheckBoxField.css';

const CheckBoxField = (props) => {
    return (
        <FieldCard>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    CheckBox Field
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <CheckCircleOutlineRoundedIcon />
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
                    <CheckBoxOutlineBlankIcon />
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


CheckBoxField.defaultProps = {};

export default CheckBoxField;
