import React, { useEffect, useRef, useState } from 'react';
import FormDescriptionField from '../QuestionFields/FormDescriptionField/FormDescriptionField';
import FieldMap from "../../utils/FieldMap";
import FieldSpeedDial from "../QuestionFields/FieldSpeedDial/FieldSpeedDial";
import './FormLayout.css';
import { Button, Grid, Typography } from '@material-ui/core';
import createField from '../../utils/FormFieldMapper';
import { red,green } from '@material-ui/core/colors';

const fieldMap = new FieldMap();
const formInfo = {
    name: '',
    description: '',
};

const FormLayout = (props) => {

    const [render, setRender] = useState({});
    const scrollRef = useRef({});
    const triggerRender = () => setRender(old => ({ ...old }));

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [render]);

    const handleTitleChange = (title) => {
        formInfo.name = title;
    }

    const handleDescriptionChange = (description) => {
        formInfo.description = description;
    }

    const handleSubmitClick = (event) => {
        // event.preventDefault();
    }

    const handleSpeedDialClick = (type) => {
        createField(type, fieldMap, triggerRender);
        triggerRender();
    }

    console.log(fieldMap);

    return (
        <>
            <form onSubmit={handleSubmitClick}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={0}
                    alignItems="center">
                    <Grid item>
                        <FormDescriptionField
                            onTitleChange={handleTitleChange}
                            onDescriptionChange={handleDescriptionChange}
                        />
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">
                            Fields
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ color: fieldMap.isEmpty() ? red[400] : green[400] }} variant="body2">
                            At Least 1 field is required.
                        </Typography>
                    </Grid>
                    <Grid item>
                        {fieldMap
                            .getValues()
                            .map(value => value.component)}
                    </Grid>
                    <Grid item ref={scrollRef}>
                        <Button
                            disabled={fieldMap.isEmpty()}
                            type="submit"
                            variant="contained"
                            color="primary" >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <FieldSpeedDial
                onClick={handleSpeedDialClick}
            />
        </>
    );
};

FormLayout.defaultProps = {};

export default FormLayout;
