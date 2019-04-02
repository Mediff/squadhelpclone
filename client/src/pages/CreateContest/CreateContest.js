import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getIndustries, getNameTypes, getStyles} from '../../actions/actionCreator'

class CreateContest extends Component {

    componentDidMount() {
        const id = Array.isArray(this.props.selectedContestType)? this.props.selectedContestType[0]:
            this.props.selectedContestType;
        this.props.getIndustries();
        this.props.getNameTypes();
        this.props.getStyles(id);

    }

    render() {
        console.log(this.props.industries);
        console.log(this.props.styles);
        console.log(this.props.nameTypes);

        return (
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    Hello from Create Contest
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContestType: state.contestTypesReducers.selectedContestType,
        industries: state.contestTypesReducers.industries,
        styles: state.contestTypesReducers.styles,
        nameTypes: state.contestTypesReducers.nameTypes
    };
};

const mapDispatchToProps = (dispatch) => ({
    getIndustries: () => dispatch(getIndustries()),
    getStyles: (id) => dispatch(getStyles(id)),
    getNameTypes: () => dispatch(getNameTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);