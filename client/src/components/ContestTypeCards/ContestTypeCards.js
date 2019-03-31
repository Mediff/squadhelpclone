
import React from 'react';
import PropTypes from 'prop-types';
import {ContestTypeCard} from '../ContestTypeCard/ContestTypeCard';

export const ContestTypeCards = ({contestTypes}) => {
    return (
        <div className={styles.mainContainer}>
            {contestTypes.map((contestType) =>
                <ContestTypeCard image={contestType.image} hoverImage={contestType.hoverImage}
                                 title={contestType.title} description={contestType.description}/>
            )}
        </div>
    );
};

ContestTypeCards.propTypes = {
    contestTypes: PropTypes.array
};