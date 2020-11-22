import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormResponseDataTable from './components/FormResponseDataTable/FormResponseDataTable';
import FormResponse from './pages/FormResponse/FormResponse';
const App = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/form/:formId">
                    <FormResponse />
                </Route>
                <Route exact path="/response/">
                    <FormResponseDataTable />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
