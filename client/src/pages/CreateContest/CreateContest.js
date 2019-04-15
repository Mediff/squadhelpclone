import React, {Component} from 'react';
import cStyles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {
    createContest, setContestTypes, setSavedContest, getCombinedTypes
} from '../../actions/actionCreator'
import {CreateContestTextInput} from '../../components/CreateContest/CreateContestTextInput/CreateContestTextInput';
import {CreateContestTextArea} from '../../components/CreateContest/CreateContestTextArea/CreateContestTextArea';
import {CreateContestCheckboxes} from '../../components/CreateContest/CreateContestCheckboxes/CreateContestCheckboxes';
import {CreateContestSelect} from '../../components/CreateContest/CreateContestSelect/CreateContestSelect';
import {CreateContestSubmitButtons} from '../../components/CreateContest/CreateContestSubmitButtons/CreateContestSubmitButtons';
import CreateContestFile from '../../components/CreateContest/CreateContestFile/CreateContestFile';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {validationMessageOptions} from '../../utils/constants/options';
import {createContestNameHeaders, createContestNamePlaceholders, stepsIndicatorMessage} from '../../utils/constants/constants';
import {clearTypeId, setContest, clearContests} from '../../utils/localStorage/localStorage';
import {contestTaglineLogoScheme, contestNameScheme} from '../../utils/validation/validationSchemes';
import {StepsIndicator} from '../../components/StepsIndicator/StepsIndicator';

class CreateContest extends Component {

    constructor(props) {
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        title: '',
        nameType: '',
        industry: '',
        ventureDescribe: '',
        customerDescribe: '',
        styles: [],
        file: '',
        titleErrorMessage: '',
        nameTypeErrorMessage: '',
        industryErrorMessage: '',
        ventureDescribeErrorMessage: '',
        customerDescribeErrorMessage: '',
        savedContest: ''
    };

    shouldComponentUpdate(){
        if (this.props.selectedContestType.length === 0) {
            clearContests();
            clearTypeId();
            this.props.history.push('/payment');
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.savedContest !== prevProps.savedContest) {
            this.resetFormFields();
            setContest(this.props.savedContest);
        }
    }

    resetFormFields = () => {
        this.formRef.current.reset();
    };

    redirectToContestTypeHandler = () => {
        clearTypeId();
        clearContests();
        this.props.history.push('/contesttype');
    };

    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    styleHandler = event => {
        if (event.target.checked) {
            this.setState({
                styles: [...this.state.styles, event.target.value]
            });
        } else {
            this.setState({
                styles: this.state.styles.filter(style => style !== event.target.value)
            });
        }
    };

    fileUploadHandler = event => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        this.setState({
            file: formData
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
        const {title, nameType, industry, customerDescribe, ventureDescribe, file, styles} = this.state;
        const contestTypeId = this.props.selectedContestType[0];
        const contestGroup = this.props.savedContest && this.props.savedContest.contestGroup;
        const priority = this.props.savedContest ? this.props.savedContest.priority + 1 : 1;
        try {
            this.state.contestTypeId === 2 ?
                await contestNameScheme.validate({title, nameType, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false}) :
                await contestTaglineLogoScheme.validate({title, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false});
            this.props.createContest({
                contest: {
                    title, nameType, industry, customerDescribe, ventureDescribe, file,
                    contestTypeId, styles: styles || [], contestGroup, priority
                },
                contestTypes: this.props.selectedContestType
            });
        } catch (e) {
            e.inner.forEach(error => {
                this.proceedError(error)
            });
        }
    };

    renderNameContestInputs = () => {
        const {industries, styles, nameTypes} = this.props.combinedTypes;
        const currentContestTypeId = this.props.selectedContestType[0];
        const filteredIndustries = styles.filter(style => style.contestTypeId === currentContestTypeId);
        return (
            <div className={cStyles.inputs}>
                <CreateContestTextInput header={createContestNameHeaders[0]}
                                        placeholder={createContestNamePlaceholders[0]}
                                        changeHandler={this.changeHandler('title')}/>
                <ValidationMessage message={this.state.titleErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                {currentContestTypeId === 2 &&
                <CreateContestSelect header={createContestNameHeaders[1]}
                                     placeholder={createContestNamePlaceholders[1]}
                                     selectOptions={nameTypes}
                                     changeHandler={this.changeHandler('nameType')}/>}
                <ValidationMessage message={this.state.nameTypeErrorMessage}
                                   type={validationMessageOptions.CreateContestError}/>
                <CreateContestSelect header={createContestNameHeaders[2]}
                                     placeholder={createContestNamePlaceholders[2]}
                                     selectOptions={industries}
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
                                         changeHandler={this.styleHandler}
                                         placeholder={createContestNamePlaceholders[5]}
                                         selectOptions={filteredIndustries}/>
                <CreateContestFile header={createContestNameHeaders[6]}
                                   changeHandler={this.fileUploadHandler}/>
            </div>
        );
    };

    render() {
        const {contestTypes} = this.props.combinedTypes;
        const contestId = this.props.selectedContestType[0];
        const contest = contestTypes.find(contestType => contestType.id === contestId);
        const passedSteps = this.props.savedContest ? this.props.savedContest.priority + 1 : 1;
        return (
            <div>
                <div className={cStyles.mainContainer}>
                    <div className={cStyles.stepsContainer}>
                        <StepsIndicator title={contest.name} message={stepsIndicatorMessage[1]}
                                        overallSteps={this.props.steps}
                                        passedSteps={passedSteps}
                        />
                    </div>
                    <form onSubmit={this.onSubmitHandler} encType='multipart/form-data' ref={this.formRef}>
                        <div className={cStyles.formContainer}>
                            {this.renderNameContestInputs()}
                        </div>
                        <div className={cStyles.submitContainer}>
                            <CreateContestSubmitButtons resetText='Back' submitText='Next'
                                                        clickHandler={this.redirectToContestTypeHandler}/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContestType: state.contestTypesReducers.selectedContestType,
        savedContest: state.contestTypesReducers.savedContest,
        combinedTypes: state.contestTypesReducers.combinedTypes,
        steps: state.contestTypesReducers.steps,
    };
};

const mapDispatchToProps = (dispatch) => ({
    createContest: (data) => dispatch(createContest(data)),
    setContestTypes: (id) => dispatch(setContestTypes(id)),
    setSavedContest: (contest) => dispatch(setSavedContest(contest)),
    getCombinedTypes: () => dispatch(getCombinedTypes())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);