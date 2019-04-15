import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entry.module.sass';
import {RejectAcceptButtons} from '../../Buttons/RejectAcceptButtons/RejectAcceptButtons';

export const Entry = ({entry, onReject, onAccept, isCheckable}) => {

    const onRejectEntry = () => {
        onReject(entry)
    };
    const onAcceptEntry = () => {
        onAccept(entry);
    };

    const {isWinner} = entry;
    return (
        <div className={styles.mainContainer}>
            <div className={styles.entriesContainer}>
                <div className={styles.entriesKeys}>
                    <div>user:</div>
                    <div>value:</div>
                </div>
                <div className={styles.entriesValues}>
                    <div>{entry.Creator.firstName}</div>
                    <div>{entry.text}</div>
                </div>
            </div>
            <div className={styles.statusContainer}>
                {isWinner === true && <div className={styles.statusAccepted}>Accepted</div>}
                {isWinner === false && <div className={styles.statusRejected}>Rejected</div>}
                {(isWinner === null && !isCheckable) && <div className={styles.statusPending}>Pending</div>}
                {(isWinner === null && isCheckable) && <div className={styles.buttonsContainer}>
                    <RejectAcceptButtons onAccept={onAcceptEntry} onReject={onRejectEntry}/>
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
    onAccept: PropTypes.func,
    isCheckable: PropTypes.bool
};
