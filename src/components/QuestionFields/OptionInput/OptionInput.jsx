import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import './OptionInput.css';

const OptionInput = (props) => {
    return (
        <Grid
            container
            spacing={2}
            alignItems="flex-end">
            <Grid item>
                {props.icon}
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
    );
};

OptionInput.propTypes = {};

OptionInput.defaultProps = {};

export default OptionInput;
