
import React from 'react';
import styles from './StyleBadge.module.sass';
import PropTypes from 'prop-types';

export const StyleBadge = ({style}) => {
    return (
        <div className={styles.mainContainer}>
            {style}
        </div>
    );
};

StyleBadge.propTypes = {
    style: PropTypes.string
};