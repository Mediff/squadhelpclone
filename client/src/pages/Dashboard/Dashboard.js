import React, {Component} from 'react';
import styles from './Dashboard.module.sass';
import {Contests} from '../../components/Contests/Contests';
import connect from 'react-redux/es/connect/connect';
import {getUserContests, getAllActiveContests, getAllUserEntries} from '../../actions/actionCreator';
import plus from '../../images/plus.png';
import {userRoles} from '../../utils/constants/options';
import {Entry} from "../../components/EntriesList/Entry/Entry";

class Dashboard extends Component {

    componentDidMount() {
        const {role} = this.props.currentUser;

        if (role === userRoles.customer) {
            if (this.props.getActive) {
                this.props.getUserContests();
            }
        }

        if (role === userRoles.creative) {
            if (this.props.getUserEntries) {
                this.props.getAllUserEntries();
            } else {
                this.props.getAllActiveContests();
            }
        }
    }

    addContestRedirect = () => {
        this.props.history.push('/contesttype');
    };

    getEntries = () => {
        const {userEntries} = this.props;
        if (userEntries && userEntries.length > 0) {
            return userEntries && userEntries.map((entry, i) => <Entry key={i} entry={entry} isCheckable={false}/>)
        } else {
            return <div className={styles.noContest}>There is no contests</div>;
        }
    };

    getContests = () => {
        const {role} = this.props.currentUser;
        if (role === userRoles.customer) {
            if (this.props.userContests) {
                const contests = this.props.getActive ? this.props.userContests.filter(contest => !contest.winnerId) :
                    this.props.userContests.filter(contest => contest.winnerId);
                return contests.length > 0 ? <Contests contests={contests} history={this.props.history}/> :
                    <div className={styles.noContest}>There is no contests</div>
            }
        }
        if (role === userRoles.creative) {
            if (!this.props.getUserEntries && this.props.activeContests) {
                return this.props.activeContests.length > 0 ?
                    <Contests contests={this.props.activeContests} history={this.props.history}/> :
                    <div className={styles.noContest}>There is no entries</div>
            }
        }
    };

    render() {
        const {role} = this.props.currentUser;

        return (
            <div className={styles.mainContainer}>
                <div className={styles.contestsContainer}>
                    {role === userRoles.customer && <div className={styles.addContestButton} onClick={this.addContestRedirect}>
                        <img src={plus} alt='Add contest'/>
                        Add contest
                    </div>}
                    {(this.props.getActive || !this.props.getUserEntries) && this.getContests()}
                    {this.props.getUserEntries && this.getEntries()}

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
        getActive: state.contestReducers.getActive,
        getUserEntries: state.contestReducers.getUserEntries,
        userEntries: state.entriesReducers.userEntries
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUserContests: () => dispatch(getUserContests()),
    getAllActiveContests: () => dispatch(getAllActiveContests()),
    getAllUserEntries: () => dispatch(getAllUserEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);