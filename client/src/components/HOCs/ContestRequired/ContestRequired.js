import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';


export const ContestRequired = (ComposedComponent) => {

    class ContestRequired extends Component {

        componentDidMount() {
            if (!this.props.selectedContest) {
                this.props.history.push('/dashboard');
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (!this.props.selectedContest) {
                this.props.history.push('/dashboard');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {selectedContest: state.contestReducers.selectedContest};
    };

    const mapDispatchToProps = (dispatch) => ({
    });

    return connect(mapStateToProps, mapDispatchToProps)(ContestRequired);
};
