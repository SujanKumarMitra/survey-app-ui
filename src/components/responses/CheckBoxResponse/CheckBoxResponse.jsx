import { Checkbox, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import Map from 'collections/map';
import React, { useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import generateUUID from '../../../utils/UUIDGenerator';
import Question from '../Question/Question.lazy';
import './CheckBoxResponse.css';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id,
        options: props.options
    };
};

const createMap = (options) => {
    return options.reduce((map, option) => {
        map.set(option.id, false);
        return map;
    }, new Map());
};

const extractOptionIds = (map) => {
    return Array.from(map.entries())
        .filter(e => e[1])
        .map(e => e[0]);
};

const icon = <CheckCircleOutlineRoundedIcon className={style.alignMiddle} />;

const CheckBoxResponse = (props) => {

    const getFormControlLabel = (option) => {
        return (
            <FormControlLabel
                key={option.id}
                control={<Checkbox
                    id={option.id}
                    onChange={handleChange}
                    name={option.text} />}
                label={option.text}
            />
        );
    };
    props = extractProps(props);

    const map = createMap(props.options);
    const [response, setResponse] = useState({
        questionId: props.questionId,
        optionMap: map,
        optionIds: [],
        answer: ''
    });

    const handleChange = (event) => {
        const { id, checked } = event.target;
        const map = response.optionMap;
        map.set(id, checked);
        const newResponse = {
            ...response,
            optionIds: extractOptionIds(map)
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
            <FormGroup>
                {props.options.map(getFormControlLabel)}
            </FormGroup>
            {/* <FormHelperText>Be careful</FormHelperText> */}
        </>
    );
};
CheckBoxResponse.defaultProps = {
    question: 'No Question',
    required: false,
    questionId: generateUUID(),
    options: [
        {
            id: generateUUID(),
            text: "Other"
        }
    ]
};

export default CheckBoxResponse;
