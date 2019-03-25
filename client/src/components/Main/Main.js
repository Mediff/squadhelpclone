import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {login} from "../../actions/actionCreator";
import {Link} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/register"> Sign Up </Link>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.userReducers.isFetching,
        error: state.userReducers.error,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);