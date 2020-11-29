import React from 'react';
import { Button, Grid } from '@material-ui/core';
import './AddOptionButton.css';

const AddOptionButton = (props) => {

    const handleClick = (event) => {
        props.onClick(props.fieldId, event);
    }

    return (
        <Grid
            container
            spacing={2}
            justify="flex-end"
        >
            <Button
                onClick={handleClick}
                variant="contained"
                color="primary"
            >
                Add Option
            </Button>
        </Grid>
    );
};

AddOptionButton.defaultProps = {
    fieldId: '#rand',
    onClick: (fieldId, event) => {
        console.log(`default handler of AddOptionButton.onClick`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    },
};

export default AddOptionButton;
