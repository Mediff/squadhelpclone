
import React from 'react';
import styles from './EntriesNumberCard.module.sass';
import PropTypes from 'prop-types';

export const EntriesNumberCard = (props) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardEntryContainer}>
                <div className={styles.entryContainer}>
                    <i className="fa fa-user"/>
                    <span>{props.entriesNumber}</span>
                </div>
                <div className={styles.entryText}>
                    Entries
                </div>
            </div>
            <div className={styles.cardDaysLeftContainer}>
                <div className={styles.daysLeftContainer}>
                    <span>4d,13h</span>
                </div>
                <div className={styles.daysLeftText}>
                    Left
                </div>
            </div>
        </div>
    );
};

EntriesNumberCard.propTypes = {
    entriesNumber: PropTypes.number
};