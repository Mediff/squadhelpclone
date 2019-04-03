import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestSubmitButtons.module.sass';

export const CreateContestSubmitButtons = ({firstText, clickHandler, secondText}) => {

    return (
        <div className={styles.container}>
            <button className={styles.firstButton} onClick={()=> clickHandler()}>{firstText}</button>
            <button type='submit' className={styles.secondButton}>{secondText}</button>
        </div>
    );
};

CreateContestSubmitButtons.propTypes = {
    firstText: PropTypes.string,
    secondText: PropTypes.string,
    clickHandler: PropTypes.func
};