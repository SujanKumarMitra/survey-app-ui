import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormResponse from './components/FormResponse/FormResponse';
const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/form/:formId">
                    <FormResponse />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
