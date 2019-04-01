import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContestTypeCards.module.sass';
import {ContestTypeCard} from '../ContestTypeCard/ContestTypeCard';
import {contestTypesDescription} from '../../utils/constants/constants';

export const ContestTypeCards = ({contestTypes, titleText, subText}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleText}>
                {titleText}
            </div>
            <div className={styles.subText}>
                {subText}
            </div>
            <hr className={styles.separator}/>
            <div className={styles.cardsContainer}>
                {contestTypes.map((contestType, index) =>
                    <div className={styles.contestCard}  key={contestType.id}>
                        <ContestTypeCard image={contestType.image} imageHover={contestType.imageHover}
                                         title={contestType.name} description={contestTypesDescription[index]}/>
                    </div>
                )}
            </div>
        </div>
    );
};

ContestTypeCards.propTypes = {
    contestTypes: PropTypes.array
};