import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormResponse from './pages/FormResponse/FormResponse';
import FormResponseData from './pages/FormResponseData/FormResponseData';
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
            </Switch>
        </BrowserRouter>
    );
}

export default App;
