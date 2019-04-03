import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getIndustries, getNameTypes, getStyles} from '../../actions/actionCreator'
import {CreateContestTextInput} from '../../components/CreateContestTextInput/CreateContestTextInput';
import {CreateContestTextArea} from '../../components/CreateContestTextArea/CreateContestTextArea';
import {CreateContestCheckboxes} from '../../components/CreateContestCheckboxes/CreateContestCheckboxes';
import {CreateContestSelect} from '../../components/CreateContestSelect/CreateContestSelect';
import {createContestNameHeaders} from '../../utils/constants/constants';
import {createContestNamePlaceholders} from '../../utils/constants/constants';
import {getTypeId, clearTypeId} from '../../utils/localStorage/localStorage';

class CreateContest extends Component {

    state = {
        id: null
    };

    componentDidMount() {
        let id = Array.isArray(this.props.selectedContestType) ? this.props.selectedContestType[0] :
            this.props.selectedContestType;
        if(!id){
            id = getTypeId()? getTypeId(): this.props.history.push('/contesttype');
        }
        this.setState({
            id
        });
        this.props.getIndustries();
        this.props.getNameTypes();
        this.props.getStyles(id);

    }


    renderNameContestInputs = () => {

        return (
            <div className={styles.inputs}>
                {this.state.id === 1 && <CreateContestTextInput header={createContestNameHeaders[0]}
                                            placeholder={createContestNamePlaceholders[0]}/>}
                <CreateContestSelect header={createContestNameHeaders[1]} placeholder={createContestNamePlaceholders[1]}
                                     selectOptions={this.props.nameTypes}/>
                <CreateContestSelect header={createContestNameHeaders[2]} placeholder={createContestNamePlaceholders[2]}
                                     selectOptions={this.props.industries}/>
                <CreateContestTextArea header={createContestNameHeaders[3]}
                                       placeholder={createContestNamePlaceholders[3]}/>
                <CreateContestTextArea header={createContestNameHeaders[4]}
                                       placeholder={createContestNamePlaceholders[4]}/>
                <CreateContestCheckboxes header={createContestNameHeaders[5]}
                                         placeholder={createContestNamePlaceholders[5]}
                                         selectOptions={this.props.styles}/>
            </div>
        );
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.formContainer}>
                    {(this.props.nameTypes && this.props.industries && this.props.styles) && this.renderNameContestInputs()}
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