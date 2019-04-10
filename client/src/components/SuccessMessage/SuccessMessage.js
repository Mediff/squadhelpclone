import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuccessMessage.module.sass';

export const SuccessMessage = ({message}) => message && <div className={styles.message}>{message}</div>;

SuccessMessage.propTypes = {
    message: PropTypes.string
};