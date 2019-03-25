import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormHeader.module.sass';

export const FormHeader = (props) => {
    return (
        <div className={styles.signupInfo}>
            <div className={styles.createAccountTitle}>
                <h2>{props.headText}</h2>
            </div>
            {
                props.options === 'register' && <div className={styles.createAccountText}>
                    <h4>{props.bottomText}</h4>
                </div>
            }
        </div>
    )
};

FormHeader.propTypes = {
    headText: PropTypes.string,
    bottomText: PropTypes.string,
    options: PropTypes.string
};

