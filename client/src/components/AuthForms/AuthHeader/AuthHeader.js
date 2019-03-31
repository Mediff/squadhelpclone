
import React from 'react';
import PropTypes from 'prop-types';
import styles from './AuthHeader.module.sass';
import {Link} from 'react-router-dom';

export const AuthHeader = ({logo, buttonText, clickHandler}) => {
    return (
        <div className={styles.headContainer}>
            <Link to='/'>
                <img src={logo} alt='Company Logo'/>
            </Link>
            <div className={styles.signupButton} onClick={()=>clickHandler()}>{buttonText}</div>
        </div>
    )
};

AuthHeader.propTypes = {
    buttonText: PropTypes.string,
    logo: PropTypes.string,
    clickHandler: PropTypes.func
};