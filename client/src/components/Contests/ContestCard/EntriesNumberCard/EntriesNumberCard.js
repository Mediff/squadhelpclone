import React from 'react';
import styles from './EntriesNumberCard.module.sass';
import PropTypes from 'prop-types';
import account from '../../../../images/account.png';

export const EntriesNumberCard = ({entriesNumber}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.cardEntryContainer}>
                    <div className={styles.entryContainer}>
                        <img src={account} alt='User'/>
                        <span>{entriesNumber}</span>
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
            <div className={styles.cardBottomContainer}>
                <i className='fas fa-trophy'/>
                <span>Tier a creatives only</span>
            </div>
        </div>
    );
};

EntriesNumberCard.propTypes = {
    entriesNumber: PropTypes.number
};