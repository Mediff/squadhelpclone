
import React from 'react';
import {HeaderTop} from './HeaderTop/HeaderTop';
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";
import logo from '../../images/logoMainPage.jpg';

export const Header = ({user}) => {
    return (
        <header>
            <HeaderTop user={user}/>
            <HeaderBottom logo={logo}/>
        </header>
    );
};
