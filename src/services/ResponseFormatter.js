import dateFormat from 'dateformat';

const getOptionsMap = (field) => field.options
    .reduce((map, option) => {
        map.set(option.id, option.text);
        return map;
    }, new Map());
const PatternedDateTimeFormatter = (date, pattern) => {
    return dateFormat(date, pattern);
}

export const TextBoxResponseFormatter = (field, response) => response;

export const DateResponseFormatter = (field, response) => {
    response.answer = PatternedDateTimeFormatter(response.date, "isoDate");
    return response;
};

export const TimeResponseFormatter = (field, response) => {
    response.answer = PatternedDateTimeFormatter(response.date, "isoTime");
    return response;
};

export const CheckBoxResponseFormtter = (field, response) => {
    const optionsMap = getOptionsMap(field);
    const optionText = response.optionIds
        .map(optionId => optionsMap.get(optionId))
        .join(`,`);
    response.answer = `"${optionText}"`;
    return response;
};

export const RadioButtonResponseFormtter = (field, response) => {
    response.answer = getOptionsMap(field).get(response.optionId);
    return response;
};

const NoOpResponseFormatter = (field, response) => response;

export const getFormatter = (type) => {
    switch (type) {
        case 'textbox':
            return TextBoxResponseFormatter;
        case 'date':
            return DateResponseFormatter;
        case 'time':
            return TimeResponseFormatter;
        case 'checkbox':
            return CheckBoxResponseFormtter;
        case 'radio':
            return RadioButtonResponseFormtter;
        default:
            console.log(`unknown type ${type}`);
            return NoOpResponseFormatter;
    }
}
