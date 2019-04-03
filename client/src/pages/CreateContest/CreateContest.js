import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {getIndustries, getNameTypes, getStyles, createContest} from '../../actions/actionCreator'
import {CreateContestTextInput} from '../../components/CreateContest/CreateContestTextInput/CreateContestTextInput';
import {CreateContestTextArea} from '../../components/CreateContest/CreateContestTextArea/CreateContestTextArea';
import {CreateContestCheckboxes} from '../../components/CreateContest/CreateContestCheckboxes/CreateContestCheckboxes';
import {CreateContestSelect} from '../../components/CreateContest/CreateContestSelect/CreateContestSelect';
import {CreateContestSubmitButtons} from '../../components/CreateContest/CreateContestSubmitButtons/CreateContestSubmitButtons';
import CreateContestFile from '../../components/CreateContest/CreateContestFile/CreateContestFile';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {validationMessageOptions} from '../../utils/constants/options';
import {createContestNameHeaders} from '../../utils/constants/constants';
import {createContestNamePlaceholders} from '../../utils/constants/constants';
import {getTypeId, clearTypeId, setContest, getContest, setTypeId, clearContests} from '../../utils/localStorage/localStorage';
import {contestTaglineLogoScheme, contestNameScheme} from '../../utils/validation/validationSchemes';

class CreateContest extends Component {

    state = {
        contestTypeId: null,
        title: '',
        nameType: '',
        industry: '',
        ventureDescribe: '',
        customerDescribe: '',
        styles: '',
        filePath: '',
        titleErrorMessage: '',
        nameTypeErrorMessage: '',
        industryErrorMessage: '',
        ventureDescribeErrorMessage: '',
        customerDescribeErrorMessage: ''
    };

    componentDidMount() {
        let id = this.props.selectedContestType && this.props.selectedContestType[0];
        if (!id) {
            let ids = getTypeId();
            id = ids ? ids[0] : this.props.history.push('/contesttype');
        }
        this.setState({
            contestTypeId: id
        });
        this.props.getIndustries();
        this.props.getNameTypes();
        this.props.getStyles(id);
    }

    redirectToContestTypeHandler = () => {
        clearTypeId();
        this.props.history.push('/contesttype');
    };

    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    proceedError = (error) => {
        this.setState({
            [error.path + 'ErrorMessage']: error.message
        });
    };

    onSubmitHandler = async (event) => {
        event.preventDefault();
        this.setState({
            titleErrorMessage: '',
            nameTypeErrorMessage: '',
            industryErrorMessage: '',
            ventureDescribeErrorMessage: '',
            customerDescribeErrorMessage: ''
        });
        const {title, nameType, industry, customerDescribe, ventureDescribe, styles, filePath, contestTypeId} = this.state;
        try {
            this.state.contestTypeId === 2 ?
                await contestNameScheme.validate({title, nameType, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false}) :
                await contestTaglineLogoScheme.validate({title, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false});

            const contests = getContest() ? getContest() : [];

            contests.push({
                title,
                industry,
                customerDescribe,
                ventureDescribe,
                contestTypeId,
                styles,
                filePath,
                nameType
            });

            setContest(contests);
            const ids = getTypeId();
            if (ids.length > 1) {
                ids.shift();
                setTypeId(ids);
                window.location.reload();
            } else {
                clearTypeId();
                clearContests();
                this.props.createContest({
                    contests,
                    history: this.props.history
                });
            }

        } catch (e) {
            e.inner.forEach(error => {
                this.proceedError(error)
            });
        }
    };

    renderNameContestInputs = () => {
        return (
            <div className={styles.inputs}>
                <CreateContestTextInput header={createContestNameHeaders[0]}
                                        placeholder={createContestNamePlaceholders[0]}
                                        changeHandler={this.changeHandler('title')}/>
                <ValidationMessage message={this.state.titleErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                {this.state.contestTypeId === 2 &&
                <CreateContestSelect header={createContestNameHeaders[1]}
                                     placeholder={createContestNamePlaceholders[1]}
                                     selectOptions={this.props.nameTypes}
                                     changeHandler={this.changeHandler('nameType')}/>}
                <ValidationMessage message={this.state.nameTypeErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                <CreateContestSelect header={createContestNameHeaders[2]}
                                     placeholder={createContestNamePlaceholders[2]}
                                     selectOptions={this.props.industries}
                                     changeHandler={this.changeHandler('industry')}/>
                <ValidationMessage message={this.state.industryErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                <CreateContestTextArea header={createContestNameHeaders[3]}
                                       changeHandler={this.changeHandler('ventureDescribe')}
                                       placeholder={createContestNamePlaceholders[3]}/>
                <ValidationMessage message={this.state.ventureDescribeErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                <CreateContestTextArea header={createContestNameHeaders[4]}
                                       changeHandler={this.changeHandler('customerDescribe')}
                                       placeholder={createContestNamePlaceholders[4]}/>
                <ValidationMessage message={this.state.customerDescribeErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                <CreateContestCheckboxes header={createContestNameHeaders[5]}
                                         changeHandler={this.changeHandler('styles')}
                                         placeholder={createContestNamePlaceholders[5]}
                                         selectOptions={this.props.styles}/>
                <CreateContestFile header={createContestNameHeaders[6]}
                                   changeHandler={this.changeHandler('filePath')}/>
            </div>
        );
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <form onSubmit={this.onSubmitHandler}>
                    <div className={styles.formContainer}>
                        {(this.props.nameTypes && this.props.industries && this.props.styles) && this.renderNameContestInputs()}
                    </div>
                    <div className={styles.submitContainer}>
                        <CreateContestSubmitButtons firstText='Back' secondText='Next'
                                                    clickHandler={this.redirectToContestTypeHandler}/>
                    </div>
                </form>
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
    getNameTypes: () => dispatch(getNameTypes()),
    createContest: (data) => dispatch(createContest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);