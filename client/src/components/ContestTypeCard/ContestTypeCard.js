
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContestTypeCard.module.sass';

export const ContestTypeCard = ({image, hoverImage, title, description}) => {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.cardImage} src={image} alt='Contest'/>
            <div className={styles.contestName}>
                {title}
            </div>
            <hr/>
            <div className={styles.contestDescription}>
                {description}
            </div>
        </div>
    );
};

ContestTypeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    hoverImage: PropTypes.string
};

