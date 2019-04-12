import React from 'react';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import ContestType from './pages/ContestType/ContestType';
import CreateContest from './pages/CreateContest/CreateContest';
import ContestPay from './pages/ContestPay/ContestPay';
import {DashboardRouter} from './pages/DashboardRouter/DashboardRouter';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {AuthRequired} from './components/HOCs/AuthRequired/AuthRequired';
import {TypesRequired} from './components/HOCs/TypesRequired/TypesRequired';
import {userRoles} from './utils/constants/options';

const history = createHistory();

const App = () => {
    const AuthDashboard = AuthRequired(DashboardRouter, [userRoles.creative, userRoles.customer]);
    const AuthContestType = AuthRequired(ContestType, [userRoles.customer]);
    const ContestCreateTypesRequired = TypesRequired(CreateContest, [userRoles.customer]);
    const AuthCreateContest = AuthRequired(ContestCreateTypesRequired, [userRoles.customer]);
    const AuthContestPay = AuthRequired(ContestPay, [userRoles.customer]);

    return (
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={(props) => <Main {...props}/>}/>
                <Route path='/login' component={(props) => <Login {...props}/>}/>
                <Route path='/register' component={(props) => <Registration {...props}/>}/>
                <Route path='/contesttype' component={(props) => <AuthContestType {...props}/>}/>
                <Route path='/createcontest' component={(props) => <AuthCreateContest {...props}/>}/>
                <Route path='/payment' component={(props) => <AuthContestPay {...props}/>}/>
                <Route path='/dashboard' component={(props) => <AuthDashboard {...props}/>}/>
            </Switch>
        </Router>
    )
};

export default App;



