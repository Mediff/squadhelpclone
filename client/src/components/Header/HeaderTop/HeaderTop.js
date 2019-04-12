import React from 'react';
import styles from './HeaderTop.module.sass';
import AuthUserHeader from '../AuthUserHeader/AuthUserHeader';
import {AuthRegButtonHeader} from "../AuthRegButtonsHeader/AuthRegButtonHeader";

export const HeaderTop = ({user}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.headContainer}>
                <div className="row">
                    <div className="col-md-6 col-xs-7 col-sm-6 text-center">
                        <div className={styles.contactDetails}>
                            <i className="fa fa-phone"/>
                            <a href="tel:(877)355-3585">(877)&nbsp;355-3585</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-5 col-sm-6 text-center">
                        {user ? <AuthUserHeader user={user}/> : <AuthRegButtonHeader/>}
                    </div>
                </div>
            </div>
        </div>
    );
};
