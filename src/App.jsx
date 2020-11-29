import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormCreate from './pages/FormCreate/FormCreate';
import FormResponse from './pages/FormResponse/FormResponse';
import FormResponseData from './pages/FormResponseData/FormResponseData';


const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/submit/:formId">
                    <FormResponse />
                </Route>
                <Route exact path="/responses/">
                    <FormResponseData />
                </Route>
                <Route exact path="/form">
                    <FormCreate />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
