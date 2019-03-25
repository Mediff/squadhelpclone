import React from 'react';
import styles from './ForgetPassword.module.sass';

export const ForgetPassword = () => {
    return (
        <div className={styles.checkPassButtonsContainer}>
            <div>
                <input type="checkbox" id="remember"/>
                <label>Remember me</label>
            </div>
            <div>
                <span>Forget Password</span>
            </div>
        </div>
    )
};
