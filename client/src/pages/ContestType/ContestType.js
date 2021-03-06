import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {getContestTypes} from "../../actions/actionCreator";
import {ContestTypeCards} from '../../components/ContestTypeCards/ContestTypeCards';
import {contestTypesSubText, contestTypesTitleText} from '../../utils/constants/constants';
import {getCombinedTypes} from '../../utils/helpers/helpers';
import {contestTypeOptions} from '../../utils/constants/options';
import {Header} from '../../components/Header/Header';
import {StepsIndicator} from '../../components/StepsIndicator/StepsIndicator';
import {stepsIndicatorTitle, stepsIndicatorMessage} from '../../utils/constants/constants';

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
            <div>
                <Header user={this.props.currentUser}/>
                <StepsIndicator title={stepsIndicatorTitle[0]} message={stepsIndicatorMessage[0]} overallSteps={3} passedSteps={0}/>
                {this.props.contestTypes && <ContestTypeCards contestTypes={this.props.contestTypes}
                                                              titleText={contestTypesTitleText[0]}
                                                              subText={contestTypesSubText[0]}
                                                              options={contestTypeOptions.FavoriteTypes}
                                                              history={this.props.history}/>}
                {combinedResult && <ContestTypeCards contestTypes={combinedResult}
                                                     titleText={contestTypesTitleText[1]}
                                                     subText={contestTypesSubText[1]}
                                                     options={contestTypeOptions.CombinedTypes}
                                                     history={this.props.history}/>}
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        contestTypes: state.contestTypesReducers.contestTypes,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    getContestTypes: () => dispatch(getContestTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestType);