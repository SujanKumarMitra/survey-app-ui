import FieldType from "./FieldType";

export const fieldMapper = (field) => {
    switch (field.type) {
        case FieldType.TEXT:
            return TextFieldFlatMapper(field);
        case FieldType.DATE:
            return DateFieldFlatMapper(field);
        case FieldType.TIME:
            return TimeFieldFlatMapper(field);
        case FieldType.CHECK_BOX:
            return CheckBoxFieldFlatMapper(field);
        case FieldType.RADIO:
            return RadioFieldFlatMapper(field);
        default:
            return BasicFlatMapper(field);
    }
};

export const FieldMapFlatMapper = (fieldMap) => {
    return fieldMap
        .getValues()
        .map(field => fieldMapper(field.data));
}

export const OptionMapFlatMapper = (optionMap) => {
    return optionMap
        .getValues()
        .map(value => ({ text: value.text }));

};

export const BasicFlatMapper = (field) => {
    delete field.optionMap;
    return { ...field };
};
export const TextFieldFlatMapper = (field) => {
    return BasicFlatMapper(field);
};
export const DateFieldFlatMapper = (field) => {
    return BasicFlatMapper(field);
};
export const TimeFieldFlatMapper = (field) => {
    return BasicFlatMapper(field);
};
export const CheckBoxFieldFlatMapper = (field) => {
    const options = OptionMapFlatMapper(field.optionMap);
    return { ...BasicFlatMapper(field), options: options };
};
export const RadioFieldFlatMapper = (field) => {
    const options = OptionMapFlatMapper(field.optionMap);
    return { ...BasicFlatMapper(field), options: options };
};

export default FieldMapFlatMapper;