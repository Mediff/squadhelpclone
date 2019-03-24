import React from 'react';
import styles from './ValidationMessage.module.sass';

function ValidationMessage(props) {
    return (
        props.message && <div className={styles.message}>{props.message}</div>
    );
}

export default ValidationMessage;