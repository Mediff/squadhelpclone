import React from 'react';
import PropTypes from 'prop-types';
import styles from './ValidationMessage.module.sass';
import {validationMessageOptions} from '../../utils/constants/options';

export const ValidationMessage = ({message, type}) => {
    let style;
    switch(type){
        case validationMessageOptions.FrontError: {
            style = styles.message;
            break;
        }
        case validationMessageOptions.ServerError: {
            style = styles.serverMessage;
            break;
        }
        case validationMessageOptions.CreateContestError: {
            style = styles.createContestMessage;
            break;
        }
        default: {
            style = styles.message;
        }
    }
    return (
        message && <div className={style}>{message}</div>
    );
};

ValidationMessage.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
};