
import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserInfo.module.sass';

export const UserInfo = (props) => {
    return (
        <div className={styles.userInfoContainer}>
            <img
                src="//d20az30pqn13cl.cloudfront.net/images/208532/original/anonumous-976525500be75652093055585ff38b11.png"
                alt="User picture"
                className={styles.userProfilePicture}/>
            <div className={styles.userDataContainer}>
                <h4>{props.firstName}</h4>
                <h5>{props.email} </h5>
            </div>
        </div>
    );
};

UserInfo.propTypes = {
};