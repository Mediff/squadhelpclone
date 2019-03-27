import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {getUser} from '../../actions/actionCreator';


export const AuthRequired = (ComposedComponent) => {

    class RequireAuth extends Component {

        componentDidMount() {
            if (!this.props.currentUser) {
                this.props.getUser();
                this.props.history.push('/login');
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (!this.props.currentUser) {
                this.props.getUser();
                this.props.history.push('/login');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {currentUser: state.userReducers.currentUser};
    };

    const mapDispatchToProps = (dispatch) => ({
        getUser: () => dispatch(getUser())
    });

    return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
};

