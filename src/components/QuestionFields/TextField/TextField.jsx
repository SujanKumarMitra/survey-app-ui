import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './TextField.css';

const TextField = (props) => {
    return (
        <FieldCard
            fieldId={props.fieldId}
            onRequiredChange={props.onRequiredChange}
            onDelete={props.onDelete}
        >
            <Title content="Text Field" />
            <QuestionInput
                fieldId={props.fieldId}
                onQuestionChange={props.onQuestionChange}
                icon={<SubjectRoundedIcon />}
            />
        </FieldCard>
    );
}

TextField.defaultProps = {
    fieldId: '#rand',
    onQuestionChange: (value, fieldId, event) => {
        console.log(`default handler of TextField.onQuestionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onRequiredChange: (value, fieldId, event) => {
        console.log(`default handler of TextField.onRequiredChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (fieldId, event) => {
        console.log(`default handler of TextField.onDelete`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    }
};

export default TextField;
