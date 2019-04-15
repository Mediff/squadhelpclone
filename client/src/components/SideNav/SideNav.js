import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import styles from './SideNav.module.sass';
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';
import {customerSideNavIcons, customerSideNavText, creativeSideNavIcons, creativeSideNavText} from '../../utils/constants/constants';
import {SideNavLink} from './SideNavLink/SideNavLink'
import {setUserActiveContests, setUserCompletedContests, setAllUserEntries, setAllActiveContests} from '../../actions/actionCreator';
import {userRoles} from '../../utils/constants/options';

class SideNav extends Component {

    renderLinks = () => {
        return this.props.currentUser.role === userRoles.customer ? this.customerLinks() : this.creativeLinks();
    };

    customerLinks = () => {
        return customerSideNavIcons.map((item, i) => {
            return <div className={styles.sideNavLink} key={i}>
                <SideNavLink icon={item} text={customerSideNavText[i]} clickHandler={this.customerHandlers[i]}/>
            </div>
        });
    };

    creativeLinks = () => {
        return creativeSideNavIcons.map((item, i) => {
            return <div className={styles.sideNavLink} key={i}>
                <SideNavLink icon={item} text={creativeSideNavText[i]} clickHandler={this.creativeHandlers[i]}/>
            </div>
        });
    };

    userActiveContestsHandler = () => {
        this.props.history.push('/dashboard');
        this.props.setUserActiveContests();
    };

    userCompletedContestsHandler = () => {
        this.props.history.push('/dashboard');
        this.props.setUserCompletedContests();
    };

    redirectToAccountHandler = () => {
        this.props.history.push('/');
    };

    allActiveContestsHandler = () => {
        this.props.history.push('/dashboard');
        this.props.setAllActiveContests();
    };

    allUserEntries = () => {
        this.props.history.push('/dashboard');
        this.props.setAllUserEntries();
    };

    customerHandlers = [this.userActiveContestsHandler, this.userCompletedContestsHandler, this.redirectToAccountHandler];
    creativeHandlers = [this.allActiveContestsHandler, this.allUserEntries];

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
        selectedContests: state.contestReducers.selectedContests,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    setUserCompletedContests: () => dispatch(setUserCompletedContests()),
    setUserActiveContests: () => dispatch(setUserActiveContests()),
    setAllActiveContests: () => dispatch(setAllActiveContests()),
    setAllUserEntries: () => dispatch(setAllUserEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);