import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestCheckboxes.module.sass';

export const CreateContestCheckboxes = ({selectOptions}) => {

    const renderOptions = () => {
        return selectOptions.map((item) => {
            return (
                <div className={styles.checkbox} key={item.id}>
                    <input type='checkbox' value={item.id}/>
                    <label>{item.name}</label>
                </div>
            );

        });
    };

    return (
        <div className={styles.mainContainer}>
            {renderOptions()}
        </div>
    );
};

CreateContestCheckboxes.propTypes = {
    selectOptions: PropTypes.array
};