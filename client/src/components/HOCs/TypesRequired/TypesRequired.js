import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {getCombinedTypes, setSavedContest, setContestTypes} from '../../../actions/actionCreator';
import {clearContests, clearTypeId, getContest, getTypeId, setContest} from '../../../utils/localStorage/localStorage';


export const TypesRequired = (ComposedComponent) => {

    class TypesRequired extends Component {

        componentDidMount() {
            if (!this.props.combinedTypes) {
                this.props.getCombinedTypes();
            }
            !this.props.selectedContestType && this.props.setContestTypes(getTypeId());
            !this.props.savedContest && this.props.setSavedContest(getContest());
        }

        componentDidUpdate(prevProps, prevState) {
            if (this.props.selectedContestType && this.props.selectedContestType.length === 0) {
                clearContests();
                clearTypeId();
                this.props.history.push('/payment')
            }
        }

        render() {
            return this.props.combinedTypes && <ComposedComponent {...this.props} />
        }
    }

    const mapStateToProps = (state) => {
        return {
            combinedTypes: state.contestTypesReducers.combinedTypes,
            selectedContestType: state.contestTypesReducers.selectedContestType,
            savedContest: state.contestReducers.savedContest
        };
    };

    const mapDispatchToProps = (dispatch) => ({
        getCombinedTypes: () => dispatch(getCombinedTypes()),
        setSavedContest: (contest) => dispatch(setSavedContest(contest)),
        setContestTypes: (id) => dispatch(setContestTypes(id))
    });

    return connect(mapStateToProps, mapDispatchToProps)(TypesRequired);
};
