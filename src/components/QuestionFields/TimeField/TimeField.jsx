import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './TimeField.css';

const TimeField = (props) => {
    return (
        <FieldCard
            fieldId={props.fieldId}
            onRequiredChange={props.onRequiredChange}
            onDelete={props.onDelete}
        >
            <Title content="Time Field" />
            <QuestionInput
                fieldId={props.fieldId}
                onQuestionChange={props.onQuestionChange}
                icon={<ScheduleRoundedIcon />}
            />
        </FieldCard>
    );
}

TimeField.defaultProps = {
    fieldId: '#rand',
    onQuestionChange: (value, fieldId, event) => {
        console.log(`default handler of TimeField.onQuestionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onRequiredChange: (value, fieldId, event) => {
        console.log(`default handler of TimeField.onRequiredChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (fieldId, event) => {
        console.log(`default handler of TimeField.onDelete`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    }
};

export default TimeField;
