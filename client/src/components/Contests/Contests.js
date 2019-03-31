
import React from 'react';
import PropTypes from 'prop-types';
import {ContestCard} from "./ContestCard/ContestCard";

export const Contests = ({contests}) => {
    return (
        <div>
            {contests.map((contest) =>
                <ContestCard contest={contest} key={contest.id}/>
            )}
        </div>
    );
};

Contests.propTypes = {
    contests: PropTypes.array
};

