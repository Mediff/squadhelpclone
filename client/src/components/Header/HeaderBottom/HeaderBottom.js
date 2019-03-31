
import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderBottom.module.sass';
import {Link} from 'react-router-dom';

export const HeaderBottom = ({logo}) => {
    return (
        <div className={styles.mainContainer}>
            <div className='row'>
                <div className='col-md-2 col-sm-2 col-xs-2'>
                    <div className={styles.logoContainer}>
                        <img src={logo} className='img-fluid' alt='Company Logo'/>
                    </div>
                </div>
                <div className='col-md-8 col-xs-7 col-sm-8 no-padding-mobile'>
                    <ul className='pull-right'>
                        <li className={`${styles.linkDropdown} dropdown`}>
                            <button className='dropdown-toggle' id='dropdownMenuLink' data-toggle='dropdown'
                               data-hover='dropdown'>Name Ideas</button>
                            <ul className='dropdown-menu' aria-labelledby="dropdownMenuLink">
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-2 col-xs-3 col-sm-2 pull-left">
                    <div className={styles.linkContainer}>
                        <Link className={styles.link} to="/register"> START CONTEST</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeaderBottom.propTypes = {
    logo: PropTypes.string
};