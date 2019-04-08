
import React from 'react';
import styles from './RejectAcceptButtons.module.sass';
import PropTypes from 'prop-types';
import check from '../../images/check-btn.png';
import close from '../../images/close-btn.png';

export const RejectAcceptButtons = ({onReject, onAccept}) => {
    return (
        <div className={styles.mainContainer}>
            <button className={styles.button} onClick={()=> onAccept()}>
                <img src={check} alt='Check'/>
            </button>
            <button className={styles.button} onClick={()=> onReject()}>
                <img src={close} alt='Reject'/>
            </button>
        </div>
    );
};

RejectAcceptButtons.propTypes = {
    onReject: PropTypes.func,
    onAccept: PropTypes.func
};