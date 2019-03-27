
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.sass';
import {HeaderTop} from '../HeaderTop/HeaderTop';
import {HeaderBottom} from "../HeaderBottom/HeaderBottom";
import logo from '../../images/logoMainPage.jpg';

export const Header = (props) => {
    return (
        <header>
            <HeaderTop/>
            <HeaderBottom logo={logo}/>
        </header>
    );
};

Header.propTypes = {
};