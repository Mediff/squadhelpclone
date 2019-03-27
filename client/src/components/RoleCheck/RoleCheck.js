
import React from 'react';
import PropTypes from 'prop-types';
import styles from './RoleCheck.module.sass';

export const RoleCheck = (props) => {
    return (
        <div className={styles.radioButtonContainer}>
            <div className={styles.radioButtonInput}>
                <input type="radio"
                       value={props.radioValue}
                       name={props.radioName}
                       onChange={(event)=> props.changeHandler(event)}
                       defaultChecked={props.isDefault}/>
            </div>
            <div className={styles.radioButtonText}>
                <h4>{props.headerText}</h4>
                <span>{props.bottomText}</span>
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