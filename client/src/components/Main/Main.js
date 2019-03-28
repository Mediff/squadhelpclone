import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {Header} from '../Header/Header';

class Main extends Component {

    componentDidMount() {
    }

    render() {
        return (
           <Header user={this.props.currentUser}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);