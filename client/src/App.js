import React from 'react';
import Main from './components/Main/Main';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {AuthRequired} from './components/AuthRequired/AuthRequired';

const history = createHistory();

const App = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={AuthRequired(Main)}/>
                <Route path="/login" component={(props) => <Login {...props}/>}/>
                <Route path="/register" component={(props) => <Registration {...props}/>}/>
                <Route path="/dashboard" component={AuthRequired(Dashboard)}/>
            </Switch>
        </Router>
    )
};

export default App;



