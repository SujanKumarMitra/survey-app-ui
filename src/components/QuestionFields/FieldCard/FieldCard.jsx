import { FormControlLabel, Grid, IconButton, Switch } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import Card from '../../../components/Card/Card';
import './FieldCard.css';

const FieldCard = (props) => {
    const [checked, setChecked] = useState(true);
    const handleRequiredChange = (event) => {
        setChecked(!checked);
    }
    const handleDeleteClick = (event) => {
        console.log(event);
    }
    return (
        <Card>
            <Grid
                container
                spacing={1}
                direction="row"
                justify="flex-end"
                alignItems="center" >

                <Grid item>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={checked}
                                onChange={handleRequiredChange}
                                color="primary"
                            />
                        }
                        label="Required"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={
                            <IconButton onClick={handleDeleteClick}>
                                <DeleteIcon />
                            </IconButton>
                        }
                        label="Delete"
                    />
                </Grid>
            </Grid>
            {props.children}
        </Card>
    );
}

FieldCard.defaultProps = {};

export default FieldCard;
