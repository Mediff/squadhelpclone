import React, {Component} from 'react';
import styles from './Login.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {login} from '../../actions/actionCreator';
import {loginScheme} from '../../utils/validation/validationSchemes';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {InputComponent} from '../../components/AuthForms/InputComponent/InputComponent';
import {FormHeader} from '../../components/AuthForms/FormHeader/FormHeader';
import {FormSubmitButton} from '../../components/AuthForms/FormSubmitButton/FormSubmitButton';
import {ForgetPassword} from '../../components/AuthForms/ForgetPassword/ForgetPassword';
import {AuthHeader} from '../../components/AuthForms/AuthHeader/AuthHeader';
import {loginPlaceholders, loginInputKeys} from '../../utils/constants/constants';
import {validationMessageOptions, formHeaderOptions} from '../../utils/constants/options';

class Login extends Component {

    state = {
        emailErrorMessage: '',
        passwordErrorMessage: '',
        email: '',
        password: ''
    };

    proceedError = (error) => {
        this.setState({
            [error.path + 'ErrorMessage']: error.message
        });
    };

    createFormFields = () =>
        loginInputKeys.map((item, i) =>
            <div className={styles.row} key={i}>
                <div className={styles.inputFieldContainer}>
                    <InputComponent placeholder={loginPlaceholders[i]}
                                    changeHandler={this.changeHandler(loginInputKeys[i])}/>
                    <ValidationMessage type={validationMessageOptions.FrontError}
                                       message={this.state[loginInputKeys[i] + 'ErrorMessage']}/>
                </div>
            </div>
        );


    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    buttonRedirectHandler = () => {
        this.props.history.push('/register');
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            emailErrorMessage: '',
            passwordErrorMessage: ''
        });
        try {
            const {email, password} = this.state;
            await loginScheme.validate({email, password}, {abortEarly: false});
            this.props.login({user:{email, password}, history: this.props.history});
        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.headerContainer}>
                    <AuthHeader logo={logo} clickHandler = {this.buttonRedirectHandler} buttonText='Signup'/>
                </div>
                <div className={styles.signupContainer}>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <FormHeader headText='LOGIN TO YOUR ACCOUNT' type={formHeaderOptions.FormHeaderLogin}/>
                        <div className={styles.validationMessageContainer}>
                            {this.props.error && <ValidationMessage type={validationMessageOptions.ServerError}
                                                                    message={this.props.error}/>}
                        </div>
                        <div className={styles.inputsContainer}>
                            {this.createFormFields()}
                        </div>
                        <div className={styles.row}>
                            <ForgetPassword/>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.buttonContainer}>
                                <FormSubmitButton buttonText='LOGIN'/>
                            </div>
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
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);