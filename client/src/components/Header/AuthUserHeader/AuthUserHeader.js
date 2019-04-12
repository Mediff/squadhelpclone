import React, {Component} from 'react';
import styles from './AuthUserHeader.module.sass';
import PropTypes from 'prop-types';
import anonymous from '../../../images/anonumous.png';
import email from '../../../images/email-small.png';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {logout} from '../../../actions/actionCreator';
import {creativeLinks, customerLinks} from "../../../utils/constants/constants";
import {userRoles} from "../../../utils/constants/options";

class AuthUserHeader extends Component {

    onClickHandler = () => {
        this.props.logout();
    };

    renderLinks = () => {
        const {user} = this.props;
        const linkArray = user.role === userRoles.creative ? creativeLinks : customerLinks;
        const renderArray = linkArray.map((item, index) => <li key={index}><Link className={styles.dropdownLink}
                                                                                 to={item.link}>{item.title}</Link></li>);
        renderArray.push(<li key={linkArray.length + 1}><div className={styles.dropdownLink}
                                                                        onClick={this.onClickHandler}>Logout</div></li>);
        return renderArray;
    };

    render() {
        return (
            <div className={styles.authHeaderContainer}>
                <div className={styles.authHeaderGreeting}>
                    <button className={`dropdown-toggle ${styles.dropdown}`} id='dropdownMenuLink' data-toggle='dropdown'
                       data-hover='dropdown'>
                        <div className={styles.personInfoContainer}>
                            <img className={styles.authHeaderImage} src={anonymous} alt="Current user"/>
                            <span className={styles.userHi}>{'Hi, ' + this.props.user.firstName}</span>
                        </div>
                    </button>
                    <ul className={`dropdown-menu ${styles.dropdownList}`} aria-labelledby="dropdownMenuLink">
                        {this.renderLinks()}
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
    user: PropTypes.shape({
        firstName: PropTypes.string,
        role: PropTypes.string
    })
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthUserHeader);
