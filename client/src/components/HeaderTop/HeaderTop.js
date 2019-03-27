import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import styles from './HeaderTop.module.sass';


export const HeaderTop = (props) => {
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
                        <ul className={styles.signNav + ' pull-right'}>
                            <li>
                                <Link className={styles.link} to="/register"> Sign Up </Link>
                            </li>
                            <li>
                                <Link className={styles.link} to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeaderTop.propTypes = {};