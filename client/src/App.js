import React from 'react';
import Main from './components/Main/Main';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Dashboard from './pages/Dashboard/Dashboard';
import ContestType from './pages/ContestType/ContestType';
import CreateContest from './pages/CreateContest/CreateContest';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {AuthRequired} from './components/HOCs/AuthRequired/AuthRequired';


const history = createHistory();

const App = () => {
    const AuthDashboard = AuthRequired(Dashboard);
    const AuthContestType = AuthRequired(ContestType);
    const AuthCreateContest = AuthRequired(CreateContest);

    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={AuthRequired(Main)}/>
                <Route path='/login' component={(props) => <Login {...props}/>}/>
                <Route path='/register' component={(props) => <Registration {...props}/>}/>
                <Route path='/dashboard' component={(props) => <AuthDashboard {...props}/>}/>
                <Route path='/contesttype' component={(props) => <AuthContestType {...props}/>}/>
                <Route path='/createcontest' component={(props) => <AuthCreateContest {...props}/>}/>
            </Switch>
        </Router>
    )
};

export default App;



