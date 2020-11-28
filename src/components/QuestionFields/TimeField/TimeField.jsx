import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './TimeField.css';

const TimeField = (props) => {
    return (
        <FieldCard>
            <Title content="Time Field" />
            <QuestionInput icon={<ScheduleRoundedIcon />} />
        </FieldCard>
    );
}

TimeField.defaultProps = {};

export default TimeField;
