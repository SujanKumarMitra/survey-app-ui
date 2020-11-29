import { FormLabel, TextField } from '@material-ui/core';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import React, { useContext, useState } from 'react';
import generateUUID from '../../../services/UUIDGenerator';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import { ResponseContext } from '../../../pages/FormResponse/FormResponse';
import './TextFieldResponse.css';
import FieldType from '../../../services/FieldType';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id
    };
}
const icon = <SubjectRoundedIcon className={style.alignMiddle} />

const TextFieldResponse = (props) => {
    const { responseMap } = useContext(ResponseContext);
    props = extractProps(props);
    const [response, setResponse] = useState({
        questionId: props.questionId,
        type: FieldType.TEXT,
        answer: ''
    });
    const handleChange = (event) => {
        const { value } = event.target;
        const updatedResponse = {
            ...response,
            answer: value
        };
        console.log(updatedResponse);
        responseMap.put(updatedResponse.questionId, updatedResponse);
        setResponse(updatedResponse);
    };

    return (
        <>
            <FormLabel
                component={() => <Question {...props}
                    icon={icon} />} />
            <br />
            <TextField
                fullWidth
                label='Answer'
                variant='outlined'
                autoComplete='off'
                key={props.questionId}
                id={response.questionId}
                required={props.required}
                value={response.answer}
                onChange={handleChange}
            />
        </>
    );
}

TextFieldResponse.defaultProps = {
    question: 'Question',
    required: false,
    questionId: generateUUID()
};

export default TextFieldResponse;
