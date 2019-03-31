import React from 'react';
import styles from './AuthUserHeader.module.sass';
import PropTypes from 'prop-types';
import anonymous from '../../../images/anonumous.png';

export const AuthUserHeader = ({name}) => {
    return (
        <div className={styles.authHeaderContainer}>
            <div className={styles.authHeaderGreeting}>
                <img className={styles.authHeaderImage} src={anonymous} alt="Current user"/>
                <span className={styles.userHi}>{'Hi, ' + name}</span>
            </div>
            <div className={styles.authHeaderMail}>
                <i className='far fa-envelope'/>
            </div>
        </div>
    );
};

AuthUserHeader.propTypes = {
    name: PropTypes.string
};
