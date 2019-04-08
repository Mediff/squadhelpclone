
import React from 'react';
import styles from './Header.module.sass';
import {HeaderTop} from './HeaderTop/HeaderTop';
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import logo from '../../images/logoMainPage.jpg';

export const Header = ({user}) => {
    return (
        <header>
            <div className={styles.headerTop}>
                <HeaderTop user={user}/>
            </div>
            <HeaderBottom user={user} logo={logo}/>
        </header>
    );
};
