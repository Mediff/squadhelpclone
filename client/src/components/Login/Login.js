import React, {Component} from 'react';
import styles from './Login.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {login} from '../../actions/actionCreator';
import {loginScheme} from '../../utils/validation/validationSchemes';
import {ValidationMessage} from '../ValidationMessage/ValidationMessage';
import {InputComponent} from '../InputComponent/InputComponent';
import {FormHeader} from '../FormHeader/FormHeader';
import {FormSubmitButton} from '../FormSubmitButton/FormSubmitButton';
import {ForgetPassword} from '../ForgetPassword/ForgetPassword';
import {AuthHeader} from '../AuthHeader/AuthHeader';
import {loginPlaceholders, loginInputKeys} from '../../utils/constants/constants';

class Login extends Component {

    constructor(props) {
        super(props);
    }

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

    createFormFields = () => {
        return Array.from({length: 2}).map((item, i) => {
            return (
                <div className={styles.row}>
                    <div className={styles.inputFieldContainer} key={i}>
                        <InputComponent placeholder={loginPlaceholders[i]} changeHandler={this.changeHandler(loginInputKeys[i])} />
                        <ValidationMessage message={this.state[loginInputKeys[i] + 'ErrorMessage']}/>
                    </div>
                </div>
            );
        })
    };

    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            emailErrorMessage: '',
            passwordErrorMessage: ''
        });
        try {
            const {email, password} = this.state;
            await loginScheme.validate({email, password});
            this.props.login({email, password});
        } catch (e) {
            this.proceedError(e);
        }
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.headerContainer}>
                    <AuthHeader logo={logo} buttonText='Signup'/>
                </div>
                <div className={styles.signupContainer}>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <FormHeader headText='LOGIN TO YOUR ACCOUNT' options='login'/>
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