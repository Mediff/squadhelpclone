
import React from 'react';
import PropTypes from 'prop-types';
import {ContestCard} from './ContestCard/ContestCard';
import styles from './Contests.module.sass';

export const Contests = ({contests}) => {
    return (
        <div className={styles.mainContainer}>
            {contests.map((contest) =>
                <div className={styles.contestContainer} key={contest.id}>
                    <ContestCard contest={contest}/>
                </div>
            )}
        </div>
    );
};

Contests.propTypes = {
    contests: PropTypes.array
};

