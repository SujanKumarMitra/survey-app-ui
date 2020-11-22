import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import React, { useContext } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './RadioButtonResponse.css';
import generateUUID from '../../../utils/UUIDGenerator';
import ErrorMessage from './../../ErrorMessage/ErrorMessage.lazy';
import { ResponseContext } from './../../FormResponse/FormResponse';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id,
        options: props.options
    };
};

const getFormControlLabel = (option, props) => {
    return (
        <FormControlLabel id={option.id}
            key={option.id}
            value={option.text}
            control={<Radio
                required={props.required}
                key={option.id}
                id={option.id}
            />}
            label={option.text} />
    );
}

const checked = (response) => {
    return response.optionId === '';
};

const icon = <RadioButtonCheckedIcon className={style.alignMiddle} />

const RadioResponse = (props) => {
    const { responseMap} = useContext(ResponseContext);
    props = extractProps(props);
    const [response, setResponse] = React.useState({
        questionId: props.questionId,
        type: 'radio',
        optionId: '',
        answer: ''
    });
    const handleChange = (event) => {
        const { value, id } = event.target;
        const updatedResponse = {
            ...response,
            optionId: id,
            answer: value
        };
        console.log(updatedResponse);
        responseMap.put(updatedResponse.questionId,updatedResponse);
        setResponse(updatedResponse);
    };
    return (
        <FormControl required error={checked(response)} component="fieldset">
            <FormLabel
                component={() => <Question {...props}
                    icon={icon} />} />
            <br />
            {props.required ? <ErrorMessage message='Pick at least one' /> : <></>}
            <br />
            <RadioGroup id={props.questionId}
                key={props.questionId}
                aria-label={props.question}
                name={props.question}
                value={response.answer}
                onChange={handleChange}>
                {props.options.map(option => getFormControlLabel(option, props))}
            </RadioGroup>
        </FormControl>
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
