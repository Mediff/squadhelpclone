import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderBottom.module.sass';
import {Link} from 'react-router-dom';
import burger from '../../../images/burger-menu.png';
import {userLinks, creativeLinks, customerLinks} from '../../../utils/constants/constants';
import {userRoles} from '../../../utils/constants/options';
import connect from 'react-redux/es/connect/connect';
import {logout} from "../../../actions/actionCreator";


class HeaderBottom extends Component {

    renderLinks = () => {
        const {user} = this.props;
        const linkArray = !user ? userLinks : user.role === userRoles.creative ? creativeLinks : customerLinks;
        const renderArray = linkArray.map((item, index) => <li key={index}><Link className={styles.dropdownLink}
                                                                                 to={item.link}>{item.title}</Link></li>);
        user && renderArray.push(<li key={linkArray.length + 1}><button className={styles.dropdownLink}
                                                                      onClick={this.onClickHandler}>Logout</button></li>);
        return renderArray;
    };

    onClickHandler = () => {
        this.props.logout();
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.logoContainer}>
                    <img src={this.props.logo} alt='Company Logo'/>
                </div>
                <div className={styles.linkContainer}>
                    <Link className={styles.link} to="/contesttype">START CONTEST</Link>
                </div>
                <button className={styles.dropdown} id='dropdownMenuLink' data-toggle='dropdown'
                   data-hover='dropdown'>
                    <img src={burger} alt='Responsive menu'/>
                </button>
                <ul className={`dropdown-menu ${styles.dropdownList}`} aria-labelledby="dropdownMenuLink">
                    <li>
                        <Link className={styles.dropdownLink} to='tel:(877)355-3585'>
                            <i className='fa fa-phone'/>
                            <span>(877)&nbsp;355-3585</span>
                        </Link>
                    </li>
                    {this.renderLinks()}
                </ul>
            </div>
        );
    }
}

HeaderBottom.propTypes = {
    logo: PropTypes.string
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBottom);