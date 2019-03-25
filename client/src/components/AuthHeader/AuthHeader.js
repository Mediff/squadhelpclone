
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthHeader.module.sass';

export const AuthHeader = (props) => {
    return (
        <div className={styles.headContainer}>
            <img src={props.logo} alt="Company Logo"/>
            <div className={styles.signupButton}>{props.buttonText}</div>
        </div>
    )
};

AuthHeader.propTypes = {
    buttonText: PropTypes.string,
    logo: PropTypes.string
};