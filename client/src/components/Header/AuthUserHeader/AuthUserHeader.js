import React, {Component} from 'react';
import styles from './AuthUserHeader.module.sass';
import PropTypes from 'prop-types';
import anonymous from '../../../images/anonumous.png';
import email from '../../../images/email-small.png';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {logout} from '../../../actions/actionCreator';

class AuthUserHeader extends Component {

    onClickHandler = () => {
        this.props.logout();
    };

    render() {
        return (
            <div className={styles.authHeaderContainer}>
                <div className={styles.authHeaderGreeting}>
                    <a className={`dropdown-toggle ${styles.dropdown}`} id='dropdownMenuLink' data-toggle='dropdown'
                       data-hover='dropdown'>
                        <div className={styles.personInfoContainer}>
                            <img className={styles.authHeaderImage} src={anonymous} alt="Current user"/>
                            <span className={styles.userHi}>{'Hi, ' + this.props.name}</span>
                        </div>
                    </a>
                    <ul className={`dropdown-menu ${styles.dropdownList}`} aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link className={styles.dropdownLink} to='/dashboard'>Dashboard</Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownLink} to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <Link className={styles.dropdownLink} to='/' onClick={this.onClickHandler}>Logout</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.authHeaderMail}>
                    <img src={email} alt='Email'/>
                </div>
            </div>
        )
    }
}

AuthUserHeader.propTypes = {
    name: PropTypes.string
};

const mapStateToProps = () => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserHeader);
