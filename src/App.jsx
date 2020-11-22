import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormResponse from './pages/FormResponse/FormResponse';
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
