import DateFnsUtils from '@date-io/date-fns';
import { FormLabel } from '@material-ui/core';
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { useContext, useState } from 'react';
import style from '../../../utils/material-icon.module.css';
import Question from '../Question/Question.lazy';
import './DateResponse.css';
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
const icon = <DateRangeRoundedIcon className={style.alignMiddle} />

const DateResponse = (props) => {
    const { responseMap } = useContext(ResponseContext);

    props = extractProps(props);

    const [response, setResponse] = useState({
        questionId: props.questionId,
        type: FieldType.DATE,
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
                <KeyboardDatePicker
                    fullWidth
                    key={props.questionId}
                    required={props.required}
                    autoComplete='off'
                    format="dd/MM/yyyy"
                    variant="outlined"
                    id={response.questionId}
                    label="Pick Date"
                    value={response.date}
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
