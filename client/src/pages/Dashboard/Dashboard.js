
import React, {Component} from 'react';
import styles from './Dashboard.module.sass';
import {Contests} from '../../components/Contests/Contests';
import connect from 'react-redux/es/connect/connect';
import {getUserContests, getAllActiveContests} from '../../actions/actionCreator';
import plus from '../../images/plus.png';
import {userRoles} from '../../utils/constants/options';

class Dashboard extends Component {

    componentDidMount() {
        const {role} = this.props.currentUser;

        if(role === userRoles.customer) {
            if (!this.props.userContests) {
                this.props.getUserContests();
            }
        }

        if(role === userRoles.creative) {
            if (!this.props.activeContests) {
                this.props.getAllActiveContests();
            }
        }
    }

    addContestRedirect = () => {
        this.props.history.push('/contesttype');
    };

    render() {
        let contests;
        const {role} = this.props.currentUser;

        if(role === userRoles.customer) {
            if (this.props.userContests) {
                contests = this.props.getActive ? this.props.userContests.filter(contest => !contest.winnerId) :
                    this.props.userContests.filter(contest => contest.winnerId);
            }
        }

        if(role === userRoles.creative) {
            contests = this.props.activeContests;
        }

        return (
            <div className={styles.mainContainer}>
                <div className={styles.contestsContainer}>
                    <div className={styles.addContestButton} onClick={this.addContestRedirect}>
                        <img src={plus} alt='Add contest'/>
                        Add contest
                    </div>
                    {contests && contests.length > 0 ?
                        <Contests contests={contests} history={this.props.history}/> :
                        <div className={styles.noContest}>There is no contests</div>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser,
        userContests: state.contestReducers.userContests,
        activeContests: state.contestReducers.activeContests,
        getActive: state.contestReducers.getActive
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUserContests: () => dispatch(getUserContests()),
    getAllActiveContests: () => dispatch(getAllActiveContests())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);