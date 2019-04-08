import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entry.module.sass';
import {RejectAcceptButtons} from '../../components/RejectAcceptButtons/RejectAcceptButtons';

export const Entry = ({entry, onReject, onAccept}) => {
    const {isWinner, isRejected} = entry;
    const notChecked = !isWinner && !isRejected;
    return (
        <div className={styles.mainContainer}>
            <div className={styles.entriesContainer}>
                <div className={styles.entriesKeys}>
                    <div>user:</div>
                    <div>value:</div>
                </div>
                <div className={styles.entriesValues}>
                    <div>{entry.account.firstName}</div>
                    <div>{entry.text}</div>
                </div>
            </div>
            <div className={styles.statusContainer}>
                {isWinner && <div className={styles.statusAccepted}>Accepted</div>}
                {isRejected && <div className={styles.statusRejected}>Rejected</div>}
                {notChecked && <div className={styles.buttonsContainer}>
                    <RejectAcceptButtons onAccept={onAccept} onReject={onReject}/>
                </div>}
            </div>
        </div>
    );
};

Entry.propTypes = {
    entry: PropTypes.shape({
        text: PropTypes.string,
        isWinner: PropTypes.bool,
        isRejected: PropTypes.bool,
        account: PropTypes.shape({
            firstName: PropTypes.string
        })
    }),
    onReject: PropTypes.func,
    onAccept: PropTypes.func
};
