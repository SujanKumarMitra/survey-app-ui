import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import React from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './RadioButtonResponse.css';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question || 'Question',
        required: props.required || true,
        questionId: props.id || 'rand',
        options: props.options || [
            {
                id: "rand1",
                text: "Sample1"
            },
            {
                id: "rand2",
                text: "Sample2"
            },
        ]
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

export default RadioResponse;
