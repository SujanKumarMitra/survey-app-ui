import React from 'react';
import CheckBoxResponse from '../components/ResponseFields/CheckBoxResponse/CheckBoxResponse.lazy';
import DateResponse from '../components/ResponseFields/DateResponse/DateResponse.lazy';
import RadioResponse from '../components/ResponseFields/RadioResponse/RadioResponse';
import TextFieldResponse from '../components/ResponseFields/TextFieldResponse/TextFieldResponse.lazy';
import TimeResponse from '../components/ResponseFields/TimeResponse/TimeResponse.lazy';
import Card from '../components/Card/Card.lazy';
import FieldType from '../services/FieldType';

const fieldMapper = (field) => {
    switch (field.type) {
        case FieldType.DATE:
            return (<Card key={field.id} >
                <DateResponse {...field} />
            </Card>);
        case FieldType.TIME:
            return (<Card key={field.id}>
                <TimeResponse {...field} />
            </Card>);
        case FieldType.TEXT:
            return (<Card key={field.id}>
                <TextFieldResponse {...field} />
            </Card>);
        case FieldType.CHECKBOX:
            return (<Card key={field.id}>
                <CheckBoxResponse {...field} />
            </Card>);
        case FieldType.RADIO:
            return (<Card key={field.id}>
                <RadioResponse {...field} />
            </Card>);
        default:
            console.log(`unknown field '${field}'`);
            return <> </>;
    }
};

export default fieldMapper;