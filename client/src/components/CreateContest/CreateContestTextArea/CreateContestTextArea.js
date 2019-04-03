import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestTextArea.module.sass';

export const CreateContestTextArea = ({header, placeholder, changeHandler}) => {

    return (
        <div>
            <div className={styles.header}>
                {header}
            </div>
            <textarea placeholder={placeholder} onChange={(event)=> changeHandler(event)}/>
        </div>
    );
};

CreateContestTextArea.propTypes = {
    header: PropTypes.string,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
};