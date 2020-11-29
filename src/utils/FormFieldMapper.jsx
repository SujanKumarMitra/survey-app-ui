import CheckBoxField from "../components/QuestionFields/CheckBoxField/CheckBoxField";
import DateField from "../components/QuestionFields/DateField/DateField";
import RadioField from "../components/QuestionFields/RadioField/RadioField";
import TextField from "../components/QuestionFields/TextField/TextField";
import TimeField from "../components/QuestionFields/TimeField/TimeField";
import FieldType from "../services/FieldType";
import generateUUID from "../services/UUIDGenerator";
import OptionMap from "./OptionMap";

const hasOptions = (type) => type === FieldType.CHECK_BOX || type === FieldType.RADIO;

const handleOptionDelete = (fieldMap) => {
    return (optionId, fieldId, event) => {
        const { data } = fieldMap.get(fieldId);
        data.optionMap.remove(optionId);
    };
}

const handleOptionChange = (fieldMap) => {
    return (value, optionId, fieldId, event) => {
        const { data } = fieldMap.get(fieldId);
        data.optionMap.get(optionId).text = value;
    };
}

const handleOptionAdd = (fieldMap) => {
    return (optionId, fieldId, event) => {
        const { data } = fieldMap.get(fieldId);
        data.optionMap.put(optionId, { id: optionId, text: '' });
    };
}

const handleDelete = (fieldMap, triggerRender) => {
    return (fieldId, event) => {
        fieldMap.remove(fieldId);
        triggerRender();
    };
}

const handleRequiredChange = (fieldMap) => {
    return (value, fieldId, event) => {
        const { data } = fieldMap.get(fieldId);
        data.required = value;
    };
}

const handleQuestionChange = (fieldMap) => {
    return (value, fieldId, event) => {
        const { data } = fieldMap.get(fieldId);
        data.question = value;
    };
}

export const createField = (type, fieldMap, triggerRender) => {
    const fieldId = generateUUID();

    const optionMap = hasOptions(type) ? new OptionMap() : undefined;
    const field = getField(fieldId, type, fieldMap, triggerRender);

    fieldMap.put(fieldId, {
        component: field,
        data: {
            required: true,
            question: '',
            type: type,
            optionMap: optionMap,
        }
    });
}

export const getField = (fieldId, type, fieldMap, triggerRender) => {
    switch (type) {
        case FieldType.TEXT:
            return (
                <TextField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={handleQuestionChange(fieldMap)}
                    onRequiredChange={handleRequiredChange(fieldMap)}
                    onDelete={handleDelete(fieldMap, triggerRender)}
                />
            );
        case FieldType.DATE:
            return (
                <DateField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={handleQuestionChange(fieldMap)}
                    onRequiredChange={handleRequiredChange(fieldMap)}
                    onDelete={handleDelete(fieldMap, triggerRender)}
                />
            );
        case FieldType.TIME:
            return (
                <TimeField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={handleQuestionChange(fieldMap)}
                    onRequiredChange={handleRequiredChange(fieldMap)}
                    onDelete={handleDelete(fieldMap, triggerRender)}
                />
            );
        case FieldType.CHECK_BOX:
            return (
                <CheckBoxField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={handleQuestionChange(fieldMap)}
                    onRequiredChange={handleRequiredChange(fieldMap)}
                    onDelete={handleDelete(fieldMap, triggerRender)}
                    onOptionAdd={handleOptionAdd(fieldMap)}
                    onOptionChange={handleOptionChange(fieldMap)}
                    onOptionDelete={handleOptionDelete(fieldMap)}
                />
            );
        case FieldType.RADIO:
            return (
                <RadioField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={handleQuestionChange(fieldMap)}
                    onRequiredChange={handleRequiredChange(fieldMap)}
                    onDelete={handleDelete(fieldMap, triggerRender)}
                    onOptionAdd={handleOptionAdd(fieldMap)}
                    onOptionChange={handleOptionChange(fieldMap)}
                    onOptionDelete={handleOptionDelete(fieldMap)}
                />
            );
        default:
            console.log(`invalid field type '${type}'. Returning React.Fragment`);
            return (
                <>
                </>
            );
    }
}

export default createField;