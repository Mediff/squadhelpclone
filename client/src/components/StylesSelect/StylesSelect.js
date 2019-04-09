import React from 'react';
import styles from './StylesSelect.module.sass';
import PropTypes from 'prop-types';

export const StylesSelect = ({stylesArray, selectedStyles, changeHandler}) => {

    const renderStyles = () => {
        return stylesArray.map(style => {
            const isSelected = selectedStyles.indexOf(style.name);
            return <div className={styles.row} key={style.id}>
                    <input type='checkbox' name='styles[]' className={styles.checkbox} value={style.name}
                       onChange={(event) => changeHandler(event)} checked={isSelected !== -1}/>
                    <label>{style.name}</label>
                </div>
        });
    };

    return (
        <div className={styles.mainContainer}>
            {renderStyles()}
        </div>
    );
};

StylesSelect.propTypes = {
    stylesArray: PropTypes.array,
    selectedStyles: PropTypes.array
};