import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormHeader.module.sass';
import {formHeaderOptions} from '../../../utils/constants/options';

export const FormHeader = ({headText, bottomText, type}) => {

    const headerStyles = type === formHeaderOptions.FormHeaderLogin? styles.loginAccountTitle: styles.registerAccountTitle;

    return (
        <div className={styles.signupInfo}>
            <div className={headerStyles}>
                <h2>{headText}</h2>
            </div>
            {
                type === formHeaderOptions.FormHeaderRegister && (
                    <div className={styles.createAccountText}>
                        <h4>{bottomText}</h4>
                    </div>
                )
            }
        </div>
    )
};

FormHeader.propTypes = {
    headText: PropTypes.string,
    bottomText: PropTypes.string,
    type: PropTypes.string
};

