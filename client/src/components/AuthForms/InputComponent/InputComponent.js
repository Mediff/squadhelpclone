import React from 'react';
import styles from "./InputComponent.module.sass";
import PropTypes from 'prop-types';

export const InputComponent = ({placeholder, changeHandler}) =>
    <input className={styles.inputField}
           placeholder={placeholder}
           type="text"
           onChange={(event) => changeHandler(event)}/>;


InputComponent.propTypes = {
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
};
