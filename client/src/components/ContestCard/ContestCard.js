
import React from 'react';
import styles from './ContestCard.module.sass';
import {EntriesNumberCard} from "../EntriesNumberCard/EntriesNumberCard";

export const ContestCard = (props) => {

    return (
        <div className={styles.contestContainer}>
            <div className={styles.contestDescriptionContainer}>
                <div className={styles.contestHeader}>
                    Name for a house painting, renovation and decoration business (#21186)
                </div>
                <div className={styles.contestDescription}>
                    <div className={styles.contestName}>
                        Naming / Company Name
                    </div>
                    <div className={styles.contestText}>
                        House painting, renovation and decoration services. We offer affordable,
                        honest and professional services to our clients...
                    </div>
                </div>
            </div>
            <div className={styles.entriesNumberContainer}>
                <EntriesNumberCard entriesNumber={props.contest.Entries.length}/>
            </div>
        </div>
    );
};