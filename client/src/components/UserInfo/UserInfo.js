
import React from 'react';
import styles from './UserInfo.module.sass';
import anonymous from '../../images/anonumous.png';

export const UserInfo = ({user}) => {
    const {firstName, email} = user;
    return (
        <div className={styles.userInfoContainer}>
            <div className={styles.imageContainer}>
                <img
                    src={anonymous}
                    alt="User"
                    className={styles.userProfilePicture}/>
            </div>

            <div className={styles.userDataContainer}>
                <h4>{firstName}</h4>
                <h5>{email}</h5>
            </div>
        </div>
    );
};
