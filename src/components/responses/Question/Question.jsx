import { Typography } from '@material-ui/core';
import React from 'react';
import required from '../../../utils/RequiredFragment';
import './Question.css';

const Space = (props) =>
    (
        <>
            &nbsp;&nbsp;
        </>
    );

const Question = (props) => (
    <>
        <Typography
            variant='body1'>
            {props.icon}
            <Space />
            {props.question}
            <Space />
            {required(props.required)}
        </Typography>
    </>
);

export default Question;
