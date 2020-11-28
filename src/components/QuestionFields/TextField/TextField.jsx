import { Grid, Typography } from '@material-ui/core';
import MaterialTextField from '@material-ui/core/TextField';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import './TextField.css';

const TextField = (props) => {
    return (
        <FieldCard>
            <Grid
                container
                spacing={2}
                justify="center">
                <Typography variant="h5">
                    Text Field
                </Typography>
            </Grid>
            <Grid
                container
                spacing={2}
                alignItems="flex-end">
                <Grid item>
                    <SubjectRoundedIcon />
                </Grid>
                <Grid item xs={10}>
                    <MaterialTextField
                        fullWidth
                        multiline
                        label="Question" />
                </Grid>
            </Grid>
        </FieldCard>
    );
}

TextField.defaultProps = {};

export default TextField;
