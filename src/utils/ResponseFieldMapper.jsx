import React from 'react';
import CheckBoxResponse from '../components/ResponseFields/CheckBoxResponse/CheckBoxResponse.lazy';
import DateResponse from '../components/ResponseFields/DateResponse/DateResponse.lazy';
import RadioResponse from '../components/ResponseFields/RadioButtonResponse/RadioButtonResponse';
import TextBoxResponse from '../components/ResponseFields/TextBoxResponse/TextBoxResponse.lazy';
import TimeResponse from '../components/ResponseFields/TimeResponse/TimeResponse.lazy';
import Card from '../components/Card/Card.lazy';

const fieldMapper = (field) => {
    switch (field.type) {
        case 'date':
            return (<Card key={field.id} >
                <DateResponse {...field} />
            </Card>);
        case 'time':
            return (<Card key={field.id}>
                <TimeResponse {...field} />
            </Card>);
        case 'textbox':
            return (<Card key={field.id}>
                <TextBoxResponse {...field} />
            </Card>);
        case 'checkbox':
            return (<Card key={field.id}>
                <CheckBoxResponse {...field} />
            </Card>);
        case 'radio':
            return (<Card key={field.id}>
                <RadioResponse {...field} />
            </Card>);
        default:
            console.log(`unknown field '${field}'`);
            return <> </>;
    }
};

export default fieldMapper;