import React from 'react';
import styles from "../InputComponent/InputComponent.module.sass";
import PropTypes from 'prop-types';

export const InputComponent = (props) => <input className={styles.inputField} placeholder={props.placeholder}
                                                type="text"
                                                onChange={(event) => props.changeHandler(event)}/>;


InputComponent.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};
