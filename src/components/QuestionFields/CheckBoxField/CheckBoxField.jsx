import { Button, Grid } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import OptionInput from '../OptionInput/OptionInput';
import QuestionInput from '../QuestionInput/QuestionInput';
import Title from '../Title/Title';
import './CheckBoxField.css';

const CheckBoxField = (props) => {
    return (
        <FieldCard>
            <Title content="Check Box Field" />
            <QuestionInput icon={<CheckBoxOutlinedIcon />} />
            <Title content="Options" />
            <OptionInput icon={<CheckBoxOutlineBlankIcon />} />
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
