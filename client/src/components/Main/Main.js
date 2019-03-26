import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {test} from "../../actions/actionCreator";
import {Link} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.test();
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
    test: () => dispatch(test())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);