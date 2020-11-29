import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import './OptionInput.css';

const OptionInput = (props) => {

    const handleChange = (event) => {
        const { value } = event.target;
        props.onChange(value, props.optionId, props.fieldId, event);
    }

    const handleDelete = (event) => {
        props.onDelete(props.optionId, props.fieldId, event);
    }

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
                    required
                    onChange={handleChange}
                    multiline
                    label="Option" />
            </Grid>
            <Grid item>
                <IconButton
                    style={{
                        padding: '3px',
                    }}
                    onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
};

OptionInput.defaultProps = {
    optionId: '#rand1',
    fieldId: '#rand2',
    icon: <CheckBoxOutlineBlankIcon />,
    onOptionChange: (value, optionId, fieldId, event) => {
        console.log(`default handler of OptionInput.onOptionChange`);
        console.log(`new value='${value}' for optionId='${optionId}', fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (optionId, fieldId, event) => {
        console.log(`default handler of OptionInput.onDelete`);
        console.log(`optionId= '${fieldId}',fieldId='${optionId}'`);
        console.log(event);
    }
};

export default OptionInput;
