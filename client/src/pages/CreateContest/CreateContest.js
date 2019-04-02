import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getIndustries, getNameTypes, getStyles} from '../../actions/actionCreator'
import {CreateContestInput} from '../../components/CreateContestInput/CreateContestInput';
import {createContestNameHeaders} from '../../utils/constants/constants';
import {createContestNameInputs} from '../../utils/constants/constants';
import {createContestNamePlaceholders} from '../../utils/constants/constants';
import {inputTypeOptions} from '../../utils/constants/options';

class CreateContest extends Component {

    componentDidMount() {
        const id = Array.isArray(this.props.selectedContestType) ? this.props.selectedContestType[0] :
            this.props.selectedContestType;
        this.props.getIndustries();
        this.props.getNameTypes();
        this.props.getStyles(id);

    }


    renderNameContestInputs = () => {
        return createContestNameInputs.map((item, index) => {
                if (item === inputTypeOptions.InputSelect) {
                    if (index === 1) {
                        return (
                            <CreateContestInput key={index}
                                                placeholder={createContestNamePlaceholders[index]} inputRenderOptions={item}
                                                header={createContestNameHeaders[index]}
                                                selectOptions={this.props.nameTypes}/>
                        );
                    }
                    if (index === 2) {
                        return (
                            <CreateContestInput key={index}
                                                placeholder={createContestNamePlaceholders[index]} inputRenderOptions={item}
                                                header={createContestNameHeaders[index]}
                                                selectOptions={this.props.industries}/>
                        );
                    }
                }
                if (item === inputTypeOptions.InputCheckboxes) {
                    return (<CreateContestInput key={index}
                                                placeholder={createContestNamePlaceholders[index]} inputRenderOptions={item}
                                                header={createContestNameHeaders[index]}
                                                selectOptions={this.props.styles}/>);
                }
                return (
                    <CreateContestInput key={index}
                                        placeholder={createContestNamePlaceholders[index]} inputRenderOptions={item}
                                        header={createContestNameHeaders[index]}/>
                );
            }
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