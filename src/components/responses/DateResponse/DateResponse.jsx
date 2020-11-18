import DateFnsUtils from '@date-io/date-fns';
import { FormLabel } from '@material-ui/core';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './DateResponse.css';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question || 'Question',
        required: props.required || true,
        questionId: props.id || 'rand'
    };
}
const icon = <DateRangeRoundedIcon className={style.alignMiddle} />

const DateResponse = (props) => {

    props = extractProps(props);

    const [response, setResponse] = useState({
        questionId: props.questionId,
        answer: new Date()
    });

    const handleChange = (date) => {
        const updatedResponse = {
            ...response,
            answer: date
        };
        console.log(updatedResponse);
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

export default DateResponse;
