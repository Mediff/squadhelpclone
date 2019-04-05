import React, {Component} from 'react';
import styles from './CreateContest.module.sass';
import connect from 'react-redux/es/connect/connect';
import {
    getIndustries,
    getNameTypes,
    getStyles,
    createContest,
    setContestTypes,
    setSavedContest
} from '../../actions/actionCreator'
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
import {
    getTypeId, clearTypeId, setContest, getContest, setTypeId, clearContests
} from '../../utils/localStorage/localStorage';
import {contestTaglineLogoScheme, contestNameScheme} from '../../utils/validation/validationSchemes';

class CreateContest extends Component {

    constructor(props){
        super(props);
        this.formRef = React.createRef();
    }

    state = {
        title: '',
        nameType: '',
        industry: '',
        ventureDescribe: '',
        customerDescribe: '',
        styles: '',
        file: '',
        titleErrorMessage: '',
        nameTypeErrorMessage: '',
        industryErrorMessage: '',
        ventureDescribeErrorMessage: '',
        customerDescribeErrorMessage: '',
        savedContest: ''
    };

    componentDidMount() {
        !this.props.selectedContestType && this.props.setContestTypes(getTypeId());
        !this.props.savedContest && this.props.setSavedContest(getContest());
        this.props.getIndustries();
        this.props.getNameTypes();
        this.props.getStyles();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.selectedContestType) {
            setTypeId(this.props.selectedContestType);
            if (this.props.selectedContestType.length === 0) {
                clearContests();
                clearTypeId();
                this.props.history.push('/payment')
            }
        } else {
            clearContests();
            clearTypeId();
            this.props.history.push('/contesttype');
        }
        if (this.props.savedContest) {
            if (this.props.savedContest !== prevProps.savedContest) {
                this.resetFormFields();
                setContest(this.props.savedContest);
            }
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
        const {title, nameType, industry, customerDescribe, ventureDescribe, file} = this.state;
        let {styles} = this.state;
        styles = styles ? styles : [];
        const contestTypeId = this.props.selectedContestType[0];
        const contestGroup = this.props.savedContest && this.props.savedContest.contestGroup;
        const priority =  this.props.savedContest ? this.props.savedContest.priority + 1: 1;
        try {
            this.state.contestTypeId === 2 ?
                await contestNameScheme.validate({title, nameType, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false}) :
                await contestTaglineLogoScheme.validate({title, industry, customerDescribe, ventureDescribe},
                    {abortEarly: false});
            this.props.createContest({
                contest: {
                    title, nameType, industry, customerDescribe, ventureDescribe, file,
                    contestTypeId, styles, contestGroup, priority
                }
            });
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
                                   changeHandler={this.fileUploadHandler}/>
            </div>
        );
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                {(this.props.nameTypes && this.props.industries && this.props.styles) &&
                <form onSubmit={this.onSubmitHandler} encType='multipart/form-data' ref={this.formRef}>
                    <div className={styles.formContainer}>
                        {this.renderNameContestInputs()}
                    </div>
                    <div className={styles.submitContainer}>
                        <CreateContestSubmitButtons resetText='Back' submitText='Next'
                                                    clickHandler={this.redirectToContestTypeHandler}/>
                    </div>
                </form>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContestType: state.contestTypesReducers.selectedContestType,
        industries: state.contestTypesReducers.industries,
        styles: state.contestTypesReducers.styles,
        nameTypes: state.contestTypesReducers.nameTypes,
        savedContest: state.contestTypesReducers.savedContest
    };
};

const mapDispatchToProps = (dispatch) => ({
    getIndustries: () => dispatch(getIndustries()),
    getStyles: () => dispatch(getStyles()),
    getNameTypes: () => dispatch(getNameTypes()),
    createContest: (data) => dispatch(createContest(data)),
    setContestTypes: (id) => dispatch(setContestTypes(id)),
    setSavedContest: (contest) => dispatch(setSavedContest(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateContest);