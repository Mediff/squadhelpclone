import React, {Component} from 'react';
import styles from './Registration.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {register} from '../../actions/actionCreator';
import {loginScheme} from '../../utils/validation/validationSchemes';
import {InputComponent} from '../../components/InputComponent/InputComponent';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {AuthHeader} from '../../components/AuthHeader/AuthHeader';
import {FormHeader} from "../../components/FormHeader/FormHeader";
import {registerInputKeys, registerPlaceholders} from "../../utils/constants/constants";
import {FormSubmitButton} from "../../components/FormSubmitButton/FormSubmitButton";
import {RoleCheck} from "../../components/RoleCheck/RoleCheck";

class Registration extends Component {

    constructor(props) {
        super(props);
    }

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
        role: 'buyer'
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

    radioHandler = (event) => {
      this.setState({
          role: event.target.value
      });
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
        const {firstName, lastName, displayName, email, password, role} = this.state;
        console.log(role);
        try {
            await loginScheme.validate({firstName, lastName, displayName, email, password});
            this.props.register({firstName, lastName, displayName, email, password, role});
        } catch (e) {
            this.proceedError(e);
        }
    };

    createFormFields = () => {
        return Array.from({length: 6}).map((item, i) => {
            return (
                <div className={styles.inputFieldContainer} key={i}>
                    <InputComponent placeholder={registerPlaceholders[i]} changeHandler={this.changeHandler(registerInputKeys[i])} />
                    <div className={styles.inputValidateContainer}>
                        <ValidationMessage message={this.state[registerInputKeys[i] + 'ErrorMessage']}/>
                    </div>
                </div>
            );
        })
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.registerContainer}>
                    <AuthHeader logo={logo} buttonText='Login'/>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <div className={styles.registerInfoContainer}>
                           <FormHeader bottomText='We always keep your name and email address private.' headText='CREATE AN ACCOUNT' options='register'/>
                        </div>
                        <div className={styles.inputContainer}>
                            {this.createFormFields()}
                        </div>
                        <RoleCheck headerText='Join As a Buyer' bottomText='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                                   radioName='register' radioValue='buyer' changeHandler={this.changeHandler('role')} isDefault={true}/>
                        <RoleCheck headerText='Join As a Creative' bottomText='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                                   radioName='register' radioValue='creator' changeHandler={this.changeHandler('role')} isDefault={false}/>
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