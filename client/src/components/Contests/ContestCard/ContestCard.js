import React, {Component} from 'react';
import styles from './ContestCard.module.sass';
import {EntriesNumberCard} from "./EntriesNumberCard/EntriesNumberCard";
import diamond from '../../../images/diamond.png';
import check from '../../../images/check.png';
import {setContest} from "../../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';

class ContestCard extends Component {

    onClickHandler = () => {
        this.props.setContest(this.props.contest);
        this.props.history.push('/dashboard/brief');
    };

    render() {
        return (
            <div className={styles.contestContainer} onClick={this.onClickHandler}>
                <div className={styles.contestDescriptionContainer}>
                    <div className={styles.contestHeader}>
                        {this.props.contest.title}
                    </div>
                    <div className={styles.contestName}>
                        Naming / Company Name
                    </div>
                    <div className={styles.contestText}>
                        {this.props.contest.ventureDescribe}
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.prize}>
                            <div>
                                <img src={diamond} alt='Prize'/>
                            </div>
                            <div>
                                {this.props.contest.prize}&#36;
                            </div>
                        </div>
                        {!this.props.contest.winnerId &&
                        <div className={styles.active}>
                            <img src={check} alt='Active contest'/>
                            <div>
                                active
                            </div>
                        </div>}
                    </div>
                </div>
                <EntriesNumberCard entriesNumber={this.props.contest.Entries.length}/>
            </div>
        )
    };
}

ContestCard.propTypes = {
    contest: PropTypes.shape({
        ventureDescribe: PropTypes.string,
        winnerId: PropTypes.number,
        prize: PropTypes.number
    })
};

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    setContest: (contest) => dispatch(setContest(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestCard);
