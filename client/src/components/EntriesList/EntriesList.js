
import React from 'react';
import PropTypes from 'prop-types';
import styles from './EntriesList.module.sass';
import {Entry} from '../../components/Entry/Entry';

export const EntriesList = ({allClickHandler, rejectedClickHandler, items, isRejectSelected, onAccept, onReject}) => {

    const onAcceptHandler = (entry) => {
        onAccept(entry);
    };

    const onRejectHandler = (entry) => {
        onReject(entry);
    };

    const renderEntries = () => {
        return items.map(item => <div className={styles.entry} key={item.id}><Entry entry={item} onAccept={onAcceptHandler}
                                                                      onReject={onRejectHandler}/></div>)
    };

    const styleReject = isRejectSelected? styles.tabItemSelected: styles.tabItem;
    const styleAll = isRejectSelected? styles.tabItem: styles.tabItemSelected;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.tabContainer}>
                <div className={styleAll} onClick={()=>allClickHandler()}>
                    All
                </div>
                <div className={styleReject} onClick={()=>rejectedClickHandler()}>
                    Rejected
                </div>
            </div>
            <div className={styles.entriesContainer}>
                {items ? renderEntries() : 'No entries'}
            </div>
        </div>
    );
};

EntriesList.propTypes = {
    allClickHandler: PropTypes.func,
    rejectedClickHandler: PropTypes.func,
    items: PropTypes.array,
    isRejectSelected: PropTypes.bool,
    onAccept: PropTypes.func,
    onReject: PropTypes.func
};


