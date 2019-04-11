import React, {Component} from 'react';
import styles from './Registration.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {register} from '../../actions/actionCreator';
import {registerScheme} from '../../utils/validation/validationSchemes';
import {InputComponent} from '../../components/AuthForms/InputComponent/InputComponent';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {AuthHeader} from '../../components/AuthForms/AuthHeader/AuthHeader';
import {FormHeader} from "../../components/AuthForms/FormHeader/FormHeader";
import {registerInputKeys, registerPlaceholders, registerRadioBottomText, registerRadioHeadText,
    registerRadioValues} from "../../utils/constants/constants";
import {FormSubmitButton} from "../../components/AuthForms/FormSubmitButton/FormSubmitButton";
import {RoleCheck} from "../../components/AuthForms/RoleCheck/RoleCheck";
import {formHeaderOptions, validationMessageOptions} from "../../utils/constants/options";

class Registration extends Component {

    state = {
        emailErrorMessage: '',
        passwordErrorMessage: '',
        confirmPasswordErrorMessage: '',
        displayNameErrorMessage: '',
        firstNameErrorMessage: '',
        lastNameErrorMessage: '',
        email: '',
        password: '',
        confirmPassword: '',
        displayName: '',
        firstName: '',
        lastName: '',
        role: 'customer'
    };

    proceedError = (error) => {
        this.setState({
            [error.path + 'ErrorMessage']: error.message
        });
    };

    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    buttonRedirectHandler = () => {
        this.props.history.push('/login');
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            emailErrorMessage: '',
            passwordErrorMessage: '',
            confirmPasswordErrorMessage: '',
            displayNameErrorMessage: '',
            firstNameErrorMessage: '',
            lastNameErrorMessage: ''
        });
        const {firstName, lastName, displayName, email, password, role, confirmPassword} = this.state;
        try {
            await registerScheme.validate({firstName, lastName, displayName, email, password, confirmPassword}, {abortEarly: false});
            this.props.register({
                user: {firstName, lastName, displayName, email, password, role},
                history: this.props.history
            });

        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    createFormFields = () =>
        registerInputKeys.map((item, i) =>
            <div className={styles.inputFieldContainer} key={i}>
                <InputComponent placeholder={registerPlaceholders[i]}
                                changeHandler={this.changeHandler(item)}/>
                <div className={styles.inputValidateContainer}>
                    <ValidationMessage message={this.state[item + 'ErrorMessage']}
                                       type={validationMessageOptions.FrontError}/>
                </div>
            </div>
        );

    createFormRadioButtons = () =>
        registerRadioValues.map((item, i) =>
            <div className={styles.radioButton} key={i}>
                <RoleCheck headerText={registerRadioHeadText[i]}
                           bottomText={registerRadioBottomText[i]}
                           radioName='register' radioValue={item}
                           changeHandler={this.changeHandler(item)}
                           isDefault={i === 0}/>
            </div>
        );


    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.headerContainer}>
                    <AuthHeader logo={logo} buttonText='Login' clickHandler={this.buttonRedirectHandler}/>
                </div>
                <div className={styles.registerContainer}>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <div className={styles.registerInfoContainer}>
                            <FormHeader bottomText='We always keep your name and email address private.'
                                        headText='CREATE AN ACCOUNT' type={formHeaderOptions.FormHeaderRegister}/>
                        </div>
                        <div className={styles.validationMessageContainer}>
                            {this.props.error &&
                            <ValidationMessage type={validationMessageOptions.ServerError}
                                               message={this.props.error}/>}
                        </div>
                        <div className={styles.inputContainer}>
                            {this.createFormFields()}
                        </div>
                        <div className={styles.radioContainer}>
                            {this.createFormRadioButtons()}
                        </div>
                        <div className={styles.buttonsContainer}>
                            <FormSubmitButton buttonText='Create Account'/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.userReducers.isFetching,
        error: state.userReducers.error,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    register: (user) => dispatch(register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);