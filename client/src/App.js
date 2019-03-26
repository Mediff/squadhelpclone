import React from 'react';
import Main from './components/Main/Main';
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';


const history = createHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={(props) => <Main {...props}/>}/>
                <Route path="/login" component={(props) => <Login {...props}/>}/>
                <Route path="/register" component={(props) => <Registration {...props}/>}/>
            </Switch>
        </Router>
    )
};

export default App;



