import React from 'react';
import styles from './AuthRegButtonHeader.module.sass';
import {Link} from 'react-router-dom'

export const AuthRegButtonHeader = () => {
    return (
        <ul className={styles.signNav + ' pull-right'}>
            <li>
                <Link className={styles.link} to="/register"> Sign Up </Link>
            </li>
            <li>
                <Link className={styles.link} to="/login">Login</Link>
            </li>
        </ul>
    );
};