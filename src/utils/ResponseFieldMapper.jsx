import React from 'react';
import CheckBoxResponse from '../components/responses/CheckBoxResponse/CheckBoxResponse.lazy';
import DateResponse from '../components/responses/DateResponse/DateResponse.lazy';
import RadioResponse from '../components/responses/RadioButtonResponse/RadioButtonResponse';
import TextBoxResponse from '../components/responses/TextBoxResponse/TextBoxResponse.lazy';
import TimeResponse from '../components/responses/TimeResponse/TimeResponse.lazy';
import ResponseCard from '../components/ResponseCard/ResponseCard.lazy';

const fieldMapper = (field) => {
    switch (field.type) {
        case 'date':
            return (<ResponseCard key={field.id} >
                <DateResponse {...field} />
            </ResponseCard>);
        case 'time':
            return (<ResponseCard key={field.id}>
                <TimeResponse {...field} />
            </ResponseCard>);
        case 'textbox':
            return (<ResponseCard key={field.id}>
                <TextBoxResponse {...field} />
            </ResponseCard>);
        case 'checkbox':
            return (<ResponseCard key={field.id}>
                <CheckBoxResponse {...field} />
            </ResponseCard>);
        case 'radio':
            return (<ResponseCard key={field.id}>
                <RadioResponse {...field} />
            </ResponseCard>);
        default:
            console.log(`unknown field '${field}'`);
            return <> </>;
    }
};

export default fieldMapper;