
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestTextInput.module.sass';

export const CreateContestTextInput = ({header, placeholder, changeHandler}) => {

    return (
        <div>
            <div className={styles.header}>
                {header}
            </div>
            <input className={styles.input} type='text' placeholder={placeholder} onChange={(event)=> changeHandler(event)}/>
        </div>
    );
};

CreateContestTextInput.propTypes = {
    header: PropTypes.string,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
};