import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoleCheck.module.sass';

export const RoleCheck = ({radioValue, radioName, changeHandler, isDefault, headerText, bottomText}) => {
    return (
        <div className={styles.radioButtonContainer}>
            <input type="radio"
                   value={radioValue}
                   name={radioName}
                   onChange={(event) => changeHandler(event)}
                   defaultChecked={isDefault}/>
            <div className={styles.radioButtonText}>
                <h4>{headerText}</h4>
                <div><span>{bottomText}</span></div>
            </div>
        </div>
    )
};

RoleCheck.propTypes = {
    headerText: PropTypes.string,
    bottomText: PropTypes.string,
    radioName: PropTypes.string,
    radioValue: PropTypes.string,
    isDefault: PropTypes.bool,
    changeHandler: PropTypes.func
};