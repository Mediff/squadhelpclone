import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import styles from './HeaderTop.module.sass';
import {getUserContests} from "../../actions/actionCreator";
import {AuthUserHeader} from '../AuthUserHeader/AuthUserHeader';
import {AuthRegButtonHeader} from "../AuthRegButtonsHeader/AuthRegButtonHeader";

const HeaderTop = (props) => {
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
                        {props.user ? <AuthUserHeader name={props.firstName}/> : <AuthRegButtonHeader/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducers.currentUser,
        userContests: state.contestReducers.userContests
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUserContests: () => dispatch(getUserContests())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);