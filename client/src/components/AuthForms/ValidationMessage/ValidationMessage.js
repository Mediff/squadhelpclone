import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidationMessage.module.sass';
import {validationMessageOptions} from '../../../utils/constants/options';

export const ValidationMessage = ({message, type}) => {
    const style = type === validationMessageOptions.FrontError? styles.message: styles.serverMessage;
    return (
        message && <div className={style}>{message}</div>
    );
};

ValidationMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
};