import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormResponse from './pages/FormResponse/FormResponse';
import FormResponseData from './pages/FormResponseData/FormResponseData';

import TextField from './components/QuestionFields/TextField/TextField';
import DateField from './components/QuestionFields/DateField/DateField';
import TimeField from './components/QuestionFields/TimeField/TimeField';
import CheckBoxField from './components/QuestionFields/CheckBoxField/CheckBoxField';
import RadioField from './components/QuestionFields/RadioField/RadioField';

const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/form/:formId">
                    <FormResponse />
                </Route>
                <Route exact path="/responses/">
                    <FormResponseData />
                </Route>
                <Route exact path="/">
                    <TextField />
                    <DateField />
                    <TimeField />
                    <CheckBoxField />
                    <RadioField />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
