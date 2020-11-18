import ResponseCard from './components/ResponseCard/ResponseCard.lazy';
import RadioButtonResponse from './components/responses/RadioButtonResponse/RadioButtonResponse.lazy';
import TextBoxResponse from './components/responses/TextBoxResponse/TextBoxResponse.lazy';
const App = (props) => {
    return (
        <ResponseCard>
            <TextBoxResponse />
        </ResponseCard>
    );
}

export default App;
