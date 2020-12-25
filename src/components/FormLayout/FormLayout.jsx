import React, { useContext, useEffect, useRef, useState } from 'react';
import FormDescriptionField from '../QuestionFields/FormDescriptionField/FormDescriptionField';
import FieldMap from "../../utils/FieldMap";
import FieldSpeedDial from "../QuestionFields/FieldSpeedDial/FieldSpeedDial";
import './FormLayout.css';
import { Button, Grid, Typography } from '@material-ui/core';
import createField from '../../utils/FormFieldMapper';
import { red, green } from '@material-ui/core/colors';
import ConfirmDialogBox from '../ConfirmDialogBox/ConfirmDialogBox';
import { AxiosContext } from '../../pages/FormCreate/FormCreate';

const formInfo = {
    name: 'Anonymous',
    description: 'No Desciption Provided',
};

const FormLayout = (props) => {
    const [fieldMap,] = useState(new FieldMap());
    const [, setRender] = useState({});
    const [scrollRender, setScrollRender] = useState({});
    const [dialogBoxState, setDialogBoxState] = useState(false);
    const scrollRef = useRef({});

    const submitForm = useContext(AxiosContext);

    const triggerRender = () => setRender(old => ({ ...old }));
    const triggerScrollRender = () => setScrollRender(old => ({ ...old }));

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [scrollRender]);

    const handleTitleChange = (title) => {
        formInfo.name = title;
    }

    const handleDescriptionChange = (description) => {
        formInfo.description = description;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDialogBoxState(true);
    }

    const handleSpeedDialClick = (type) => {
        createField(type, fieldMap, triggerRender);
        triggerScrollRender();
    }

    const handleConfirm = (event) => {
        setDialogBoxState(false);
        submitForm({formInfo: formInfo, fieldMap: fieldMap});
    };

    const handleCancel = (event) => {
        setDialogBoxState(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    spacing={0}
                    alignItems="center">
                    <Grid item>
                        <FormDescriptionField
                            defaultTitle={formInfo.name}
                            defaultDescription={formInfo.description}
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
                    <Grid item>
                        <ConfirmDialogBox
                            open={dialogBoxState}
                            onConfirm={handleConfirm}
                            onCancel={handleCancel}
                        />
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
