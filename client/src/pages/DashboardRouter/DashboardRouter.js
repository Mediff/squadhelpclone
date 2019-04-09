import React, {Component} from 'react';

import styles from '../DashboardRouter/DashboardRouter.module.sass';
import SideNav from '../../components/SideNav/SideNav';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Brief from '../Brief/Brief';
import ContestUpdate from '../../pages/ContestUpdate/ContestUpdate';
import {ContestRequired} from '../../components/HOCs/ContestRequired/ContestRequired';

export class DashboardRouter extends Component {
    constructor(props){
        super(props);
        this.ContestBrief = ContestRequired(Brief);
    }
    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.sideNavContainer}>
                    <SideNav {...this.props}/>
                </div>
                <Route exact path='/dashboard' component={(props) => <Dashboard {...props}/>}/>
                <Route exact path='/dashboard/brief' component={(props) => <this.ContestBrief {...props}/>}/>
                <Route exact path='/dashboard/edit' component={(props) => <ContestUpdate {...props}/>}/>
            </div>
        );
    }
}
