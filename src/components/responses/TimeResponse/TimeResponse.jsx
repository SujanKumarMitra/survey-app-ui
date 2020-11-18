import DateFnsUtils from '@date-io/date-fns';
import { FormLabel } from '@material-ui/core';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './TimeResponse.css';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question || 'Question',
        required: props.required || true,
        questionId: props.id || 'rand'
    };
}

const icon = <ScheduleRoundedIcon className={style.alignMiddle} />

const TimeResponse = (props) => {

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
                <KeyboardTimePicker
                    fullWidth
                    key={props.questionId}
                    variant="outlined"
                    id={response.questionId}
                    label="Pick Time"
                    value={response.answer}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
}

export default TimeResponse;
