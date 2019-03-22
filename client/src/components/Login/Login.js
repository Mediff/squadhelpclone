import React, {Component} from 'react';
import styles from './Login.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {login} from '../../actions/actionCreator';

class Login extends Component {

    constructor(props) {
        super(props);

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }


    handleSubmit = (event) => {
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        this.props.login({email, password});

        event.preventDefault();
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.signupContainer}>
                    <div className={styles.headContainer}>
                        <img src={logo} alt="Company Logo"/>
                        <div className={styles.signupButton}>Signup</div>
                    </div>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <div className={styles.signupInfo}>
                            <h2>LOGIN TO YOUR ACCOUNT</h2>
                        </div>
                        <div className={styles.inputFieldContainer}>
                            <input className={styles.inputField} placeholder="Email Address" type="text" ref={this.emailRef}/>
                        </div>
                        <div className={styles.inputFieldContainer}>
                            <input className={styles.inputField} placeholder="Password" type="text" ref={this.passwordRef}/>
                        </div>
                        <div className={styles.checkPassButtonsContainer}>
                            <div>
                                <input type="checkbox" id="remember"/>
                                <label>Remember me</label>
                            </div>
                            <div>
                                <span>Forget Password</span>
                            </div>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.loginButton} type="submit">
                                <span>LOGIN</span>
                            </button>
                            <div className={styles.facebookButton}>
                                <a
                                    href="https://www.facebook.com/v2.5/dialog/oauth?client_id=110109922373970&state=26f0bda5e3cc3eda6791b09446ca503a&response_type=code&sdk=php-sdk-5.6.3&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Ffb_login.php&scope=email">
                                    <i className="fab fa-facebook-f"/>
                                    <span>Sign in with Facebook</span>
                                </a>
                            </div>
                            <div className={styles.googleButton}>
                                <a
                                    href="https://www.facebook.com/v2.5/dialog/oauth?client_id=110109922373970&state=26f0bda5e3cc3eda6791b09446ca503a&response_type=code&sdk=php-sdk-5.6.3&redirect_uri=https%3A%2F%2Fwww.squadhelp.com%2Ffb_login.php&scope=email">
                                    <i className="fab fa-google"/>
                                    <span>Sign in with Google</span>
                                </a>
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
        state,
        isFetching: state.userReducers.isFetching,
        error: state.userReducers.error,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);