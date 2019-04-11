import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {getCombinedTypes, setSavedContest, setContestTypes} from '../../../actions/actionCreator';
import {getContest, getTypeId} from '../../../utils/localStorage/localStorage';


export const TypesRequired = (ComposedComponent) => {

    class TypesRequired extends Component {

        componentDidMount() {
            if (!this.props.combinedTypes) {
                this.props.getCombinedTypes();
            }
            !this.props.selectedContestType && this.props.setContestTypes(getTypeId());
            !this.props.savedContest && this.props.setSavedContest(getContest());
        }

        render() {
            return this.props.combinedTypes && this.props.selectedContestType && <ComposedComponent {...this.props} />
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
