import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from './SideNav.module.sass';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import {sideNavIcons, sideNavText} from '../../utils/constants/constants';
import {SideNavLink} from './SideNavLink/SideNavLink'
import {getUserActiveContests, getUserCompletedContests} from "../../actions/actionCreator";

class SideNav extends Component {

    renderLinks = () => {
        return sideNavIcons.map((item, i) => {
            return <div className={styles.sideNavLink} key={i}>
                <SideNavLink icon={item} text={sideNavText[i]} clickHandler={this.creativeHandlers[i]}/>
            </div>
        });
    };

    activeContestsHandler = () => {
        this.props.history.push('/dashboard');
        this.props.getUserActiveContests();
    };

    completedContestsHandler = () => {
        this.props.history.push('/dashboard');
        this.props.getUserCompletedContests();
    };

    redirectToAccountHandler = () => {
        this.props.history.push('/');
    };

    creativeHandlers = [this.activeContestsHandler, this.completedContestsHandler, this.redirectToAccountHandler];

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <Link to='/'>
                        <img src={logo} alt='Company'/>
                    </Link>
                </div>
                <div className={styles.linksContainer}>
                    <div className={styles.navTitle}>
                        Navigation
                    </div>
                    <div className={styles.links}>
                        {this.renderLinks()}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        userContests: state.contestReducers.userContests,
        selectedContests: state.contestReducers.selectedContests
    };};

const mapDispatchToProps = (dispatch) => ({
    getUserCompletedContests: () => dispatch(getUserCompletedContests()),
    getUserActiveContests: () => dispatch(getUserActiveContests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);