import { Typography } from '@material-ui/core';
import React from 'react';
import required from '../../../utils/RequiredFragment';
import './Question.css';

const Question = (props) => (
    <>
        <Typography
            variant='body1'>
            {props.icon}
            {props.question}
            {required(props.required)}
        </Typography>
    </>
);

export default Question;
