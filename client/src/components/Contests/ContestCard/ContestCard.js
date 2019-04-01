import React from 'react';
import styles from './ContestCard.module.sass';
import {EntriesNumberCard} from "./EntriesNumberCard/EntriesNumberCard";
import diamond from '../../../images/diamond.png';
import check from '../../../images/check.png';

export const ContestCard = ({contest}) => {

    return (
        <div className={styles.contestContainer}>
            <div className={styles.contestDescriptionContainer}>
                <div className={styles.contestHeader}>
                    Name for a house painting, renovation and decoration business (#21186)
                </div>
                <div className={styles.contestName}>
                    Naming / Company Name
                </div>
                <div className={styles.contestText}>
                    {contest.ventureDescribe}
                </div>
                <div className={styles.footer}>
                    <div className={styles.prize}>
                        <div>
                            <img src={diamond} alt='Prize'/>
                        </div>
                        <div>
                            {contest.prize}&#36;
                        </div>
                    </div>
                    {!contest.winnerId &&
                        <div className={styles.active}>
                            <img src={check} alt='Active contest'/>
                            <div>
                                active
                            </div>
                        </div>}
                </div>
            </div>
            <EntriesNumberCard entriesNumber={contest.Entries.length}/>
        </div>
    );
};
