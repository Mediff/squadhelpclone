import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderBottom.module.sass';
import {Link} from 'react-router-dom';
import burger from '../../../images/burger-menu.png';

export const HeaderBottom = ({logo, user}) => {

    const getAuthUserLinks = () => {

    };

    const getUserLinks = () => {

    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.logoContainer}>
                <img src={logo} alt='Company Logo'/>
            </div>
            <div className={styles.linkContainer}>
                <Link className={styles.link} to="/contesttype">START CONTEST</Link>
            </div>
                <a className={styles.dropdown} id='dropdownMenuLink' data-toggle='dropdown'
                        data-hover='dropdown'>
                    <img src={burger} alt='Responsive menu'/>
                </a>
                <ul className={`dropdown-menu ${styles.dropdownList}`} aria-labelledby="dropdownMenuLink">
                    <li>
                        <Link className={styles.dropdownLink} to='tel:(877)355-3585'>
                            <i className='fa fa-phone'/>
                            <span>(877)&nbsp;355-3585</span>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.dropdownLink} to='/register'>Signup</Link>
                    </li>
                    <li>
                        <Link className={styles.dropdownLink} to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link className={styles.dropdownLink} to='/contesttype'>Start Contest</Link>
                    </li>
                </ul>
        </div>
    );
};

HeaderBottom.propTypes = {
    logo: PropTypes.string
};