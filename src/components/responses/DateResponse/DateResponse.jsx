import DateFnsUtils from '@date-io/date-fns';
import { FormLabel } from '@material-ui/core';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './DateResponse.css';
import generateUUID from '../../../utils/UUIDGenerator';
import { ResponseContext } from './../../FormResponse/FormResponse';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id
    };
}
const icon = <DateRangeRoundedIcon className={style.alignMiddle} />

const DateResponse = (props) => {
    const responseMap = useContext(ResponseContext);

    props = extractProps(props);

    const [response, setResponse] = useState({
        questionId: props.questionId,
        type: 'date',
        answer: null
    });

    const handleChange = (date) => {
        const updatedResponse = {
            ...response,
            answer: date
        };
        console.log(updatedResponse);
        responseMap.put(updatedResponse.questionId,updatedResponse);
        setResponse(updatedResponse);
    };


    return (
        <>
            <FormLabel
                component={() => <Question {...props}
                    icon={icon} />} />
            <br />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    fullWidth
                    key={props.questionId}
                    required={props.required}
                    format="dd/MM/yyyy"
                    variant="outlined"
                    id={response.questionId}
                    label="Pick Date"
                    value={response.answer}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
}

DateResponse.defaultProps = {
    question: 'Question',
    required: false,
    questionId: generateUUID()
};

export default DateResponse;
