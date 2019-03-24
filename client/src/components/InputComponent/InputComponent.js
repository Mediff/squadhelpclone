
import React from 'react';
import styles from "../Login/Login.module.sass";

function InputComponent(props){

    return (
        <input className={styles.inputField} placeholder={props.placeholder} type="text" onChange={(event) => props.changeHandler(event)}/>
    );
}

export default InputComponent;