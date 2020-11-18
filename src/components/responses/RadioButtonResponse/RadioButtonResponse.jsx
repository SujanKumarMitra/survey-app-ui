import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import React from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './RadioButtonResponse.css';
import generateUUID from '../../../utils/UUIDGenerator';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id,
        options: props.options
    };
};

const getFormControlLabel = (option) => {
    return (
        <FormControlLabel id={option.id}
            key={option.id}
            value={option.text}
            control={<Radio
                key={option.id}
                id={option.id}
            />}
            label={option.text} />
    );
}

const icon = <RadioButtonCheckedIcon className={style.alignMiddle} />

const RadioResponse = (props) => {
    props = extractProps(props);
    const [response, setResponse] = React.useState({
        questionId: props.questionId,
        optionId: '',
        answer: ''
    });
    const handleChange = (event) => {
        const { value, id } = event.target;
        const newResponse = {
            ...response,
            optionId: id,
            answer: value
        };
        console.log(newResponse);
        setResponse(newResponse);
    };
    return (
        <>
            <FormLabel
                component={() => <Question {...props}
                    icon={icon} />} />
            <br />
            <RadioGroup id={props.questionId}
                key={props.questionId}
                aria-label={props.question}
                name={props.question}
                value={response.answer}
                onChange={handleChange}>
                {props.options.map(getFormControlLabel)}
            </RadioGroup>
        </>
    );
};
RadioResponse.defaultProps = {
    question: 'Question',
    required: false,
    questionId: generateUUID(),
    options: [
        {
            id: generateUUID(),
            text: "Option"
        },
    ]
};
export default RadioResponse;
