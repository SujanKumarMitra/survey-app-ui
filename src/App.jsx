// import CheckBoxResponse from './components/responses/CheckBoxResponse/CheckBoxResponse.lazy';
// import DateResponse from './components/responses/DateResponse/DateResponse.lazy';
// import RadioButtonResponse from './components/responses/RadioButtonResponse/RadioButtonResponse.lazy';
import TextBoxResponse from './components/responses/TextBoxResponse/TextBoxResponse.lazy';
// import TimeResponse from './components/responses/TimeResponse/TimeResponse.lazy';
import ResponseCard from './components/ResponseCard/ResponseCard.lazy';
const App = (props) => {
    return (
        <>
            <ResponseCard>
                <TextBoxResponse />
            </ResponseCard>
        </>
    );
}

export default App;
