import { Button, Grid } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import OptionInput from '../OptionInput/OptionInput';
import QuestionInput from '../QuestionInput/QuestionInput';
import Title from '../Title/Title';
import './RadioField.css';

const RadioField = (props) => {
    return (
        <FieldCard>
            <Title content="Radio Field" />
            <QuestionInput icon={<RadioButtonCheckedIcon />} />
            <Title content="Options" />
            <OptionInput icon={<RadioButtonUncheckedIcon />} />
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
