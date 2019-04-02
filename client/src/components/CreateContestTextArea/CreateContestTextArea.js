import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestTextArea.module.sass';

export const CreateContestTextArea = ({header, placeholder}) => {

    return (
        <div>
            <div className={styles.header}>
                {header}
            </div>
            <textarea placeholder={placeholder}/>
        </div>
    );
};

CreateContestTextArea.propTypes = {
    header: PropTypes.string,
    placeholder: PropTypes.string
};