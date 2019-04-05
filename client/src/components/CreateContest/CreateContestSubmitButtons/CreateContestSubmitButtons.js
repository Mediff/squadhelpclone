import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestSubmitButtons.module.sass';

export const CreateContestSubmitButtons = ({resetText, clickHandler, submitText}) => {

    return (
        <div className={styles.container}>
            <button className={styles.resetButton} onClick={()=> clickHandler()}>{resetText}</button>
            <button type='submit' className={styles.submitButton}>{submitText}</button>
        </div>
    );
};

CreateContestSubmitButtons.propTypes = {
    resetText: PropTypes.string,
    submitText: PropTypes.string,
    clickHandler: PropTypes.func
};