
import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormSubmitButton.module.sass';

export const FormSubmitButton = (props) => {
    return (
        <button className={styles.loginButton} type="submit">
            <span>{props.buttonText}</span>
        </button>
    )
};

FormSubmitButton.propTypes = {
    buttonText: PropTypes.string
};