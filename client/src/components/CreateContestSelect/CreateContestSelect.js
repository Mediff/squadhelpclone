import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestSelect.module.sass';

export const CreateContestSelect = ({header, selectOptions, placeholder}) => {

    const renderOptions = () => {
        return selectOptions.map((item) => <option key={item.id} value={item.id}>{item.name}</option>);
    };

    return (
        <div>
            <div className={styles.header}>
                {header}
            </div>
            <select className={styles.inputStyles} defaultValue={placeholder}>
                {renderOptions()}
            </select>
        </div>
    );
};

CreateContestSelect.propTypes = {
    header: PropTypes.string,
    selectOptions: PropTypes.array,
    placeholder: PropTypes.string
};