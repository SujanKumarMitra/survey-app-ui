import CheckBoxResponse from './components/responses/CheckBoxResponse/CheckBoxResponse.lazy';
import DateResponse from './components/responses/DateResponse/DateResponse.lazy';
import RadioButtonResponse from './components/responses/RadioButtonResponse/RadioButtonResponse.lazy';
import TextBoxResponse from './components/responses/TextBoxResponse/TextBoxResponse.lazy';
import TimeResponse from './components/responses/TimeResponse/TimeResponse.lazy';
const App = (props) => {
    return (
        <>
            <TextBoxResponse />
            <DateResponse />
            <TimeResponse />
            <RadioButtonResponse />
            <CheckBoxResponse />
        </>
    );
}

export default App;
