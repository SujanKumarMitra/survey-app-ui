import DateFnsUtils from '@date-io/date-fns';
import { FormLabel } from '@material-ui/core';
import ScheduleRoundedIcon from '@material-ui/icons/ScheduleRounded';
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './TimeResponse.css';
import generateUUID from '../../../services/UUIDGenerator';
import { ResponseContext } from '../../../pages/FormResponse/FormResponse';
import FieldType from '../../../services/FieldType';

const extractProps = (props) => {
    return {
        ...props,
        question: props.question,
        required: props.required,
        questionId: props.id
    };
}

const icon = <ScheduleRoundedIcon className={style.alignMiddle} />

const TimeResponse = (props) => {
    const { responseMap} = useContext(ResponseContext);
    props = extractProps(props);

    const [response, setResponse] = useState({
        questionId: props.questionId,
        type: FieldType.TIME,
        date: null,
        answer: null
    });

    const handleChange = (date) => {
        const updatedResponse = {
            ...response,
            date: date
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
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    fullWidth
                    required={props.required}
                    key={props.questionId}
                    variant="outlined"
                    id={response.questionId}
                    autoComplete='off'
                    label="Pick Time"
                    value={response.date}
                    onChange={handleChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        </>
    );
}

TimeResponse.defaultProps = {
    question: 'Question',
    required: false,
    questionId: generateUUID()
};

export default TimeResponse;
