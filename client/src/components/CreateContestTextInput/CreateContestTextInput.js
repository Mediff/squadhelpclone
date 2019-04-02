
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestTextInput.module.sass';

export const CreateContestTextInput = ({header, placeholder}) => {

    return (
        <div>
            <div className={styles.header}>
                {header}
            </div>
            <input className={styles.input} type='text' placeholder={placeholder}/>
        </div>
    );
};

CreateContestTextInput.propTypes = {
    header: PropTypes.string,
    placeholder: PropTypes.string
};