import FieldType from "../services/FieldType";
import TextField from "../components/QuestionFields/TextField/TextField";
import DateField from "../components/QuestionFields/DateField/DateField";
import TimeField from "../components/QuestionFields/TimeField/TimeField";
import generateUUID from "../services/UUIDGenerator";
import CheckBoxField from "../components/QuestionFields/CheckBoxField/CheckBoxField";
import RadioField from "../components/QuestionFields/RadioField/RadioField";
import OptionMap from "./OptionMap";

const hasOptions = (type) => type === FieldType.CHECK_BOX || type === FieldType.RADIO;

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
                    onQuestionChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.question = value;
                    }}
                    onRequiredChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.required = value;
                    }}
                    onDelete={(fieldId, event) => {
                        fieldMap.remove(fieldId);
                        triggerRender();
                    }}
                />
            );
        case FieldType.DATE:
            return (
                <DateField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.question = value;
                    }}
                    onRequiredChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.required = value;
                    }}
                    onDelete={(fieldId, event) => {
                        fieldMap.remove(fieldId);
                        triggerRender();
                    }}
                />
            );
        case FieldType.TIME:
            return (
                <TimeField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.question = value;
                    }}
                    onRequiredChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.required = value;
                    }}
                    onDelete={(fieldId, event) => {
                        fieldMap.remove(fieldId);
                        triggerRender();
                    }}
                />
            );
        case FieldType.CHECK_BOX:
            return (
                <CheckBoxField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.question = value;
                    }}
                    onRequiredChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.required = value;
                    }}
                    onDelete={(fieldId, event) => {
                        fieldMap.remove(fieldId);
                        triggerRender();
                    }}
                    onOptionAdd={(optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.put(optionId, {id: optionId, text: ''});
                    }}
                    onOptionChange={(value, optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.get(optionId).text = value;
                    }}
                    onOptionDelete={(optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.remove(optionId);
                    }}
                />
            );
        case FieldType.RADIO:
            return (
                <RadioField
                    key={fieldId}
                    fieldId={fieldId}
                    onQuestionChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.question = value;
                    }}
                    onRequiredChange={(value, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.required = value;
                    }}
                    onDelete={(fieldId, event) => {
                        fieldMap.remove(fieldId);
                        triggerRender();
                    }}
                    onOptionAdd={(optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.put(optionId, {id: optionId, text: ''});
                    }}
                    onOptionChange={(value, optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.get(optionId).text = value;
                    }}
                    onOptionDelete={(optionId, fieldId, event) => {
                        const { data } = fieldMap.get(fieldId);
                        data.optionMap.remove(optionId);
                    }}
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