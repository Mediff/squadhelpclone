import React, {Component} from 'react';

import styles from "../DashboardRouter/DashboardRouter.module.sass";
import SideNav from "../../components/SideNav/SideNav";
import {Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Brief from '../Brief/Brief';

export class DashboardRouter extends Component {

    render() {
        return (
            <Router history={this.props.history}>
                <div className={styles.mainContainer}>
                    <div className={styles.sideNavContainer}>
                        <SideNav {...this.props}/>
                    </div>
                    <Switch>
                        <Route exact path='/dashboardrouter' component={Dashboard}/>
                        <Route path='/dashboardrouter/brief' component={Brief}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
