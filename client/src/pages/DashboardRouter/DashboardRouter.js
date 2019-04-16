import React, {Component} from 'react';
import styles from '../DashboardRouter/DashboardRouter.module.sass';
import SideNav from '../../components/SideNav/SideNav';
import {Route} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Brief from '../Brief/Brief';
import {DefaultRequired} from '../../components/HOCs/DefaultRequired/DefaultRequired';
import connect from 'react-redux/es/connect/connect';


export class DashboardRouter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ContestBrief = DefaultRequired(Brief, this.props.selectedContest, '/dashboard');
        return (
            <div className={styles.mainContainer}>
                <div className={styles.sideNavContainer}>
                    <SideNav {...this.props}/>
                </div>
                <Route exact path='/dashboard' component={(props) => <Dashboard {...props}/>}/>
                <Route exact path='/dashboard/brief' component={(props) => <ContestBrief {...props}/>}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContest: state.contestReducers.selectedContest
    };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRouter);
