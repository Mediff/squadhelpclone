import React, {Component} from 'react';
import styles from './Dashboard.module.sass';
import {Contests} from '../../components/Contests/Contests';
import connect from 'react-redux/es/connect/connect';
import {getUserContests} from "../../actions/actionCreator";
import SideNav from '../../components/SideNav/SideNav';
import plus from '../../images/plus.png';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getUserContests();
    }

    addContestRedirect = () => {
        this.props.history.push('/');
    };

    render() {
        let contests;
        if (this.props.userContests) {
            contests = this.props.getActive ? this.props.userContests.filter(contest => !contest.winnerId) :
                this.props.userContests.filter(contest => contest.winnerId);
        }
        return (
            <div className={styles.mainContainer}>
                <div className={styles.sideNavContainer}>
                    <SideNav {...this.props}/>
                </div>
                <div className={styles.contestsContainer}>
                    <div className={styles.addContestButton} onClick={()=>this.addContestRedirect}>
                        <img src={plus} alt='Add contest'/>
                        Add contest
                    </div>
                    {this.props.userContests && <Contests contests={contests} history={this.props.history}/>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser,
        userContests: state.contestReducers.userContests,
        getActive: state.contestReducers.getActive
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUserContests: () => dispatch(getUserContests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);