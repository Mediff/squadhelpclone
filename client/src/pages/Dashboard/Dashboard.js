import React, {Component} from 'react';
import styles from './Dashboard.module.sass';
import {Header} from '../../components/Header/Header';
import {UserInfo} from '../../components/UserInfo/UserInfo';
import connect from 'react-redux/es/connect/connect';

class Dashboard extends Component {

    render() {
        console.log(this.props.currentUser);
        return (
            <div>
                <Header/>
                <div className={styles.userContainer}>
                    <UserInfo user={this.props.currentUser}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);