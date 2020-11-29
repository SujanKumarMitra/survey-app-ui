import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import React, { useState } from 'react';
import generateUUID from '../../../services/UUIDGenerator';
import OptionMap from '../../../utils/OptionMap';
import AddOptionButton from '../AddOptionButton/AddOptionButton';
import FieldCard from '../FieldCard/FieldCard';
import OptionInput from '../OptionInput/OptionInput';
import QuestionInput from '../QuestionInput/QuestionInput';
import Title from '../Title/Title';
import './CheckBoxField.css';


const optionMap = new OptionMap();

const CheckBoxField = (props) => {

    const [, setRender] = useState({});
    const triggerRender = () => setRender(old => ({ ...old }));
    const handleOptionAdd = (fieldId, event) => {
        const optionId = generateUUID();
        optionMap.put(optionId, { id: optionId, text: '' });
        props.onOptionAdd(optionId, fieldId, event);
        triggerRender();
    }

    const handleOptionChange = (value, optionId, event) => {
        const option = optionMap.get(optionId);
        option.text = value;
        props.onOptionChange(value, optionId, props.fieldId, event);
        triggerRender();
    }

    const handleOptionDelete = (optionId, event) => {
        optionMap.remove(optionId);
        props.onOptionDelete(optionId, props.fieldId, event);
        triggerRender();
    }

    return (
        <FieldCard
            fieldId={props.fieldId}
            onRequiredChange={props.onRequiredChange}
            onDelete={props.onDelete}
        >
            <Title content="Check Box Field" />
            <QuestionInput
                fieldId={props.fieldId}
                onQuestionChange={props.onQuestionChange}
                icon={<CheckBoxOutlinedIcon />}
            />
            <Title content="Options" />
            {optionMap
                .getValues()
                .map((option, index) => {
                    return (
                        <OptionInput
                            key={index}
                            fieldId={props.fieldId}
                            optionId={option.id}
                            onDelete={handleOptionDelete}
                            onChange={handleOptionChange}
                            icon={<CheckBoxOutlineBlankIcon />}
                        />
                    );
                })
            }
            <br />
            <AddOptionButton
                fieldId={props.fieldId}
                onClick={handleOptionAdd}
            />
        </FieldCard >
    );
};

CheckBoxField.defaultProps = {
    fieldId: '#rand',
    onQuestionChange: (value, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onQuestionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onRequiredChange: (value, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onRequiredChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (fieldId, event) => {
        console.log(`default handler of CheckBoxField.onDelete`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    },
    onOptionAdd: (optionId, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onOptionAdd`);
        console.log(`fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
    onOptionChange: (value, optionId, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onOptionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
    onOptionDelete: (optionId, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onOptionDelete`);
        console.log(`fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
};

export default CheckBoxField;
