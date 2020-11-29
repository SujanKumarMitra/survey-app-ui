import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './DateField.css';

const DateField = (props) => {
    return (
        <FieldCard
            fieldId={props.fieldId}
            onRequiredChange={props.onRequiredChange}
            onDelete={props.onDelete}
        >
            <Title content="Date Field" />
            <QuestionInput
                fieldId={props.fieldId}
                onQuestionChange={props.onQuestionChange}
                icon={<DateRangeRoundedIcon />} />
        </FieldCard>
    );
}

DateField.defaultProps = {
    fieldId: '#rand',
    onQuestionChange: (value, fieldId, event) => {
        console.log(`default handler of DateField.onQuestionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onRequiredChange: (value, fieldId, event) => {
        console.log(`default handler of DateField.onRequiredChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (fieldId, event) => {
        console.log(`default handler of DateField.onDelete`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    }
};

export default DateField;
