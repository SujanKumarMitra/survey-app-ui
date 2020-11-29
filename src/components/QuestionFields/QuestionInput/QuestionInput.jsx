import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './QuestionInput.css';

const QuestionInput = (props) => {

    const [question, setQuestion] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setQuestion(value);
        props.onQuestionChange(value, props.fieldId, event);
    }
    return (
        <Grid
            container
            spacing={2}
            alignItems="flex-end">
            <Grid item>
                {props.icon}
            </Grid>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    multiline
                    required
                    value={question}
                    onChange={handleChange}
                    label="Question" />
            </Grid>
        </Grid>
    );
};

QuestionInput.defaultProps = {
    fieldId: '#rand',
    icon: <QuestionAnswerIcon />,
    onQuestionChange: (value, fieldId, event) => {
        console.log(value, fieldId, event);
    },
};

export default QuestionInput;
