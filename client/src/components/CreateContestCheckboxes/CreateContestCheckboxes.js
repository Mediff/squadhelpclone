import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestCheckboxes.module.sass';

export const CreateContestCheckboxes = ({selectOptions, header}) => {

    const renderOptions = () => {
        return selectOptions.map((item) => {
            return (
                <div className={styles.checkboxContainer} key={item.id}>
                    <div className={styles.checkboxWithLabel}>
                        <input type='checkbox' className={styles.checkbox} value={item.id}/>
                        <label>{item.name}</label>
                    </div>
                </div>
            );

        });
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                {header}
            </div>
            {renderOptions()}
        </div>
    );
};

CreateContestCheckboxes.propTypes = {
    selectOptions: PropTypes.array
};