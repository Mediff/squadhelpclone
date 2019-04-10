import React from 'react';
import styles from './StepsIndicator.module.sass';
import PropTypes from 'prop-types';
import {StepsIndicatorCircle} from './StepsIndicatorCircle/StepsIndicatorCircle';

export const StepsIndicator = ({title, message, overallSteps, passedSteps}) => {

    const renderSteps = () => {
        const array = [];
        for (let i = 0; i < overallSteps; i++) {
            array.push(<StepsIndicatorCircle isFirst={i === 0} isSelected={passedSteps > i} isCurrent={passedSteps === i} key={i}/>)
        }
        return array;
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.message}>
                    {message}
                </div>
            </div>
            <div className={styles.progressContainer}>
                {renderSteps()}
            </div>
        </div>
    );
};

StepsIndicator.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    overallSteps: PropTypes.number,
    passedSteps: PropTypes.number
};