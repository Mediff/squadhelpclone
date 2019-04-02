import React, {Component} from 'react';
import styles from './ContestType.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getContestTypes} from "../../actions/actionCreator";
import {ContestTypeCards} from '../../components/ContestTypeCards/ContestTypeCards';
import {contestTypesSubText, contestTypesTitleText} from '../../utils/constants/constants';
import {getCombinedTypes} from '../../utils/helpers/helpers';

class ContestType extends Component {

    componentDidMount() {
        this.props.getContestTypes();
    }

    render() {
        let combinedResult;
        if (this.props.contestTypes) {
            combinedResult = getCombinedTypes(this.props.contestTypes);
        }
        return (
            <div className={styles.mainContainer}>
                {this.props.contestTypes && <ContestTypeCards contestTypes={this.props.contestTypes}
                                                              titleText={contestTypesTitleText[0]}
                                                              subText={contestTypesSubText[0]}/>}
                {combinedResult && <ContestTypeCards contestTypes={combinedResult}
                                                     titleText={contestTypesTitleText[1]}
                                                     subText={contestTypesSubText[1]} />}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        contestTypes: state.contestTypesReducers.contestTypes,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getContestTypes: () => dispatch(getContestTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestType);