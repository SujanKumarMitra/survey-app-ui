import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import React from 'react';
import FieldCard from '../FieldCard/FieldCard';
import Title from '../Title/Title';
import QuestionInput from '../QuestionInput/QuestionInput';
import './TextField.css';

const TextField = (props) => {
    return (
        <FieldCard>
            <Title content="Text Field" />
            <QuestionInput icon={<SubjectRoundedIcon />} />
        </FieldCard>
    );
}

TextField.defaultProps = {};

export default TextField;
