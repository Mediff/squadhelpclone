
import React, { Component } from 'react';
import { connect } from 'react-redux';

export const AuthRequired = (ComposedComponent) => {

    class RequireAuth extends Component {

        componentWillMount() {
            if(!this.props.isAuth) {
                this.props.history.push('/login');
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if(!this.props.isAuth) {
                this.props.history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return  {isAuth: state.userReducers.isAuth};
    }

    return connect(mapStateToProps)(RequireAuth);
};