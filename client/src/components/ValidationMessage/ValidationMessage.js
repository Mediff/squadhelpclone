import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidationMessage.module.sass';

export const ValidationMessage = (props) => props.message && <div className={styles.message}>{props.message}</div>;

ValidationMessage.propTypes = {
    message: PropTypes.string
};