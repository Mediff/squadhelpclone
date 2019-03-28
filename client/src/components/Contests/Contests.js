import React from 'react';
import styles from './Contests.module.sass';
import PropTypes from 'prop-types';
import {ContestCard} from "../ContestCard/ContestCard";

export const Contests = (props) => {

    return (
        <div>
            {props.contests.map((contest) =>
                <ContestCard contest={contest} key={contest.id}/>
            )}
        </div>
    );
};

Contests.propTypes = {
    contests: PropTypes.array
};

