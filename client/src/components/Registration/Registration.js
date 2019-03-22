
import React, {Component} from 'react';
import styles from './Registration.module.sass';
import logo from '../../images/logo.png';
import '@fortawesome/fontawesome-free/css/all.css';
import connect from 'react-redux/es/connect/connect';
import {register} from '../../actions/actionCreator';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
        this.passwordConfirmRef = React.createRef();
        this.displayRef = React.createRef();
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.buyerRole = React.createRef();
    }

    handleSubmit = (event) => {
        const firstName = this.firstNameRef.current.value;
        const lastName = this.lastNameRef.current.value;
        const displayName = this.displayRef.current.value;
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        const passwordConfirm = this.passwordConfirmRef.current.value;
        const role = this.buyerRole.current.selected ? 'buyer' : 'creator';

        /*TODO*/
        //Validation

        this.props.register({firstName, lastName, displayName, email, password, role});

        event.preventDefault();

    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.registerContainer}>
                    <div className={styles.headContainer}>
                        <img src={logo} alt="Company Logo"/>
                        <div className={styles.registerButton}>Login</div>
                    </div>
                    <form className={styles.formContainer} onSubmit={this.handleSubmit}>
                        <div className={styles.registerInfoContainer}>
                            <div className={styles.createAccountTitle}>
                                <h2>CREATE AN ACCOUNT</h2>
                            </div>
                            <div className={styles.createAccountText}>
                                <h4>We always keep your name and email address private.</h4>
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="First Name" type="text" ref={this.firstNameRef}/>
                            </div>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="Last Name" type="text" ref={this.lastNameRef}/>
                            </div>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="Display Name" type="text" ref={this.displayRef}/>
                            </div>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="Email Address" type="text" ref={this.emailRef}/>
                            </div>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="Password" type="text" ref={this.passwordRef} />
                            </div>
                            <div className={styles.inputFieldContainer}>
                                <input className={styles.inputField} placeholder="Password Confirmation" type="text" ref={this.passwordConfirmRef}/>
                            </div>
                        </div>
                        <div className={styles.radioContainer}>
                            <div className={styles.radioButtonContainer}>
                                <div className={styles.radioButtonInput}>
                                    <input type="radio" value="buyer" name="register" defaultChecked ref={this.buyerRole}/>
                                </div>
                                <div className={styles.radioButtonText}>
                                    <h4>Join As a Buyer</h4>
                                    <span>I am looking for a Name, Logo or Tagline for my business, brand or product.</span>
                                </div>
                            </div>
                            <div className={styles.radioButtonContainer}>
                                <div className={styles.radioButtonInput}>
                                    <input type="radio" value="creator" name = "register"/>
                                </div>
                                <div className={styles.radioButtonText}>
                                    <h4>Join As a Creative</h4>
                                    <span>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.registerButton} type="submit">
                                <span>Create Account</span>
                            </button>
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
    register: (user) => dispatch(register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);