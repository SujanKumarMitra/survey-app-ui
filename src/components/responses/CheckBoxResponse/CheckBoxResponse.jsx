import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import Map from 'collections/map';
import React, { useContext, useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import generateUUID from '../../../utils/UUIDGenerator';
import Question from '../Question/Question.lazy';
import ErrorMessage from './../../ErrorMessage/ErrorMessage.lazy';
import { ResponseContext } from './../../FormResponse/FormResponse';
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
    const { responseMap } = useContext(ResponseContext);
    const getFormControlLabel = (option, required) => {
        return (
            <FormControlLabel
                key={option.id}
                control={<Checkbox
                    id={option.id}
                    required={required}
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
        type: 'checkbox',
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
        responseMap.put(newResponse.questionId, newResponse);
        setResponse(newResponse);
    };

    const isAtLeastOneChecked = (response) => {
        return response.optionIds.length <= 0;
    }

    const isChecked = isAtLeastOneChecked(response);
    return (
        <FormControl required error={isChecked} component="fieldset">
            <FormLabel
                component={() => <Question {...props}
                    icon={icon} />} />
            <br />
            {props.required ? <ErrorMessage message='Pick at least one' /> : <></>}
            <br />
            <FormGroup>
                {props.options.map(option => getFormControlLabel(option, isChecked))}
            </FormGroup>
        </FormControl>
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
