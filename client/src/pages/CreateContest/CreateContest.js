import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';

class CreateContest extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <div className={styles.mainContainer}>
                Hello from Create Contest
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);