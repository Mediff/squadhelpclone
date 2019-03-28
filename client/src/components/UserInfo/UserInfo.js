
import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.sass';

export const UserInfo = (props) => {
    const {firstName, email} = props.user;
    return (
        <div className={styles.userInfoContainer}>
            <div className={styles.imageContainer}>
                <img
                    src="//d20az30pqn13cl.cloudfront.net/images/208532/original/anonumous-976525500be75652093055585ff38b11.png"
                    alt="User picture"
                    className={styles.userProfilePicture}/>
            </div>

            <div className={styles.userDataContainer}>
                <h4>{firstName}</h4>
                <h5>{email}</h5>
            </div>
        </div>
    );
};
