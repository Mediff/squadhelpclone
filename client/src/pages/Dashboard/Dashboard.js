import React, {Component} from 'react';
import styles from './Dashboard.module.sass';
import {Header} from '../../components/Header/Header';
import {UserInfo} from '../../components/UserInfo/UserInfo';
import {Contests} from '../../components/Contests/Contests';
import connect from 'react-redux/es/connect/connect';
import {getUserContests} from "../../actions/actionCreator";


class Dashboard extends Component {

    componentDidMount(){
        this.props.getUserContests();
    }

    render() {
        return (
            <div>
                <Header user={this.props.currentUser}/>
                <div className={styles.userContainer}>
                    {this.props.currentUser && <UserInfo user={this.props.currentUser}/>}
                </div>
                <div className={styles.contestsContainer}>
                    {this.props.userContests && <Contests contests={this.props.userContests}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser,
        userContests: state.contestReducers.userContests
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUserContests: () => dispatch(getUserContests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);