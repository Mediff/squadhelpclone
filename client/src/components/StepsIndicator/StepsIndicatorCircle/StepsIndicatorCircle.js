import React from 'react';
import styles from './StepsIndicatorCircle.module.sass';
import PropTypes from 'prop-types';

export const StepsIndicatorCircle = ({isSelected, isFirst, isCurrent}) => {

    const barStyle = isSelected ? styles.barSelected : styles.bar;
    const circleStyle = isSelected ? styles.circleSelected : isCurrent ? styles.current : styles.circle;

    return (
        <div className={styles.mainContainer}>
            {!isFirst && <span className={barStyle}/>}
            <div className={circleStyle}>
                <div className={styles.label}>
                    {(isSelected && !isCurrent) && <i className='fa fa-check'/>}
                </div>
            </div>
        </div>
    );
};

StepsIndicatorCircle.propTypes = {
    isSelected: PropTypes.bool,
    isFirst: PropTypes.bool,
    isCurrent: PropTypes.bool
};