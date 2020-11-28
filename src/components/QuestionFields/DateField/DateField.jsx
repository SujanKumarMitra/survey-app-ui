import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './DateField.css';

const DateField = (props) => {
    return (
        <FieldCard>
            <Title content="Date Field" />
            <QuestionInput icon={<DateRangeRoundedIcon />} />
        </FieldCard>
    );
}

DateField.defaultProps = {};

export default DateField;
