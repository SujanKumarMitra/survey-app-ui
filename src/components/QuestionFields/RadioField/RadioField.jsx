import React, { useState } from 'react';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FieldCard from '../FieldCard/FieldCard';
import OptionInput from '../OptionInput/OptionInput';
import QuestionInput from '../QuestionInput/QuestionInput';
import AddOptionButton from '../AddOptionButton/AddOptionButton';
import Title from '../Title/Title';
import OptionMap from '../../../utils/OptionMap';
import generateUUID from '../../../services/UUIDGenerator';
import './RadioField.css';
import OptionFieldErrorToast from '../OptionFieldErrorToast/OptionFieldErrorToast';

const createOption = () => ({ id: generateUUID(), text: '' });

const RadioField = (props) => {
    const [optionMap,] = useState(new OptionMap());
    const [, setRender] = useState({});
    const [snackBarOpen, setSnackBarOpen] = useState(props.open);
    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };
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
        if (optionMap.size() === 1) {
            setSnackBarOpen(true);
            triggerRender();
        }
        else {
            optionMap.remove(optionId);
            props.onOptionDelete(optionId, props.fieldId, event);
        }
        triggerRender();
    }

    if (optionMap.isEmpty()) {
        const option = createOption();
        optionMap.put(option.id, option);
        props.onOptionAdd(option.id, props.fieldId, {});
    }

    return (
        <>
            <FieldCard
                fieldId={props.fieldId}
                onRequiredChange={props.onRequiredChange}
                onDelete={props.onDelete}
            >
                <Title content="Radio Field" />
                <QuestionInput
                    fieldId={props.fieldId}
                    onQuestionChange={props.onQuestionChange}
                    icon={<RadioButtonCheckedIcon />}
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
                                value={option.text}
                                onDelete={handleOptionDelete}
                                onChange={handleOptionChange}
                                icon={<RadioButtonUncheckedIcon />}
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
            <OptionFieldErrorToast
                open={snackBarOpen}
                handleClose={handleSnackBarClose}
            />
        </>
    );
};

RadioField.defaultProps = {
    fieldId: '#rand',
    onQuestionChange: (value, fieldId, event) => {
        console.log(`default handler of RadioField.onQuestionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onRequiredChange: (value, fieldId, event) => {
        console.log(`default handler of RadioField.onRequiredChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}'`);
        console.log(event);
    },
    onDelete: (fieldId, event) => {
        console.log(`default handler of RadioField.onDelete`);
        console.log(`fieldId='${fieldId}'`);
        console.log(event);
    },
    onOptionAdd: (optionId, fieldId, event) => {
        console.log(`default handler of CheckBoxField.onOptionAdd`);
        console.log(`fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
    onOptionChange: (value, optionId, fieldId, event) => {
        console.log(`default handler of RadioField.onOptionChange`);
        console.log(`new value='${value}' for fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
    onOptionDelete: (optionId, fieldId, event) => {
        console.log(`default handler of RadioField.onOptionDelete`);
        console.log(`fieldId='${fieldId}' and optionId=${optionId}`);
        console.log(event);
    },
};

export default RadioField;
