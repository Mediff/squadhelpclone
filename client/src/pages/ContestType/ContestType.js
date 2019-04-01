import React, {Component} from 'react';
import styles from './ContestType.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getContestTypes} from "../../actions/actionCreator";
import {ContestTypeCards} from '../../components/ContestTypeCards/ContestTypeCards';
import {contestTypesSubText, contestTypesTitleText} from '../../utils/constants/constants';

class ContestType extends Component {

    componentDidMount() {
        this.props.getContestTypes();
    }

    combineTypes = (first, second) => {
        return [{
            id: [first.id, second.id],
            image: [first.image, second.image],
            imageHover: [first.imageHover, second.imageHover],
            name: `${first.name} + ${second.name}`
        }];
    };



    getCombinedTypes = () => {
        const result = [];
        for (let i = 0; i < this.props.contestTypes.length - 1; i++) {
            for (let j = i + 1; j < this.props.contestTypes.length; j++) {
                result.push(this.combineTypes(this.props.contestTypes[i], this.props.contestTypes[j]));
            }
        }
        result.push();
        return result;
    };

    render() {
        let combinedResult;
        if (this.props.contestTypes) {
            combinedResult = this.getCombinedTypes();
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