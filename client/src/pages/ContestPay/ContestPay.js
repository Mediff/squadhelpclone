import React, {Component} from 'react';
import styles from './ContestPay.module.sass';
import connect from 'react-redux/es/connect/connect';
import {CreateContestTextInput} from '../../components/CreateContest/CreateContestTextInput/CreateContestTextInput';
import {CreateContestSubmitButtons} from '../../components/CreateContest/CreateContestSubmitButtons/CreateContestSubmitButtons';
import {createContestPaymentHeaders} from '../../utils/constants/constants';
import {createContestPaymentPlaceholders} from '../../utils/constants/constants';
import {contestPayScheme} from '../../utils/validation/validationSchemes';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {validationMessageOptions} from '../../utils/constants/options';
import {proceedPay} from '../../actions/actionCreator';
import {Header} from '../../components/Header/Header';
import {StepsIndicator} from '../../components/StepsIndicator/StepsIndicator';
import {stepsIndicatorTitle} from '../../utils/constants/constants';

class ContestPay extends Component {

    state = {
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPrize: '',
        cardNumberErrorMessage: '',
        cardExpirationErrorMessage: '',
        cardSecurityCodeErrorMessage: '',
        cardPrizeErrorMessage: ''
    };

    proceedError = (error) => {
        this.setState({
            [error.path + 'ErrorMessage']: error.message
        });
    };

    onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const {cardNumber, cardExpiration, cardSecurityCode, cardPrize} = this.state;
            await contestPayScheme.validate({
                cardNumber,
                cardExpiration,
                cardSecurityCode,
                cardPrize
            }, {abortEarly: false});
            this.props.proceedPay({
                payment: {
                    contest: this.props.savedContest,
                    prize: cardPrize
                }, history: this.props.history
            });
        } catch (e) {
            e.inner.forEach(error => {
                this.proceedError(error)
            });
        }
    };

    changeHandler = (value) => (event) => {
        this.setState({
            [value]: event.target.value
        });
    };

    redirectToContestType = () => {
        this.props.history.push('/contesttype');
    };

    render() {
        const steps = this.props.savedContest? this.props.savedContest.priority + 1: 0;
        return (
            <div>
                <Header user={this.props.currentUser}/>
                <div className={styles.mainContainer}>
                    <StepsIndicator title={stepsIndicatorTitle[1]} message={''}
                                    overallSteps={steps + 1}
                                    passedSteps={steps}/>
                    <div className={styles.paymentContainer}>
                        <form onSubmit={this.onSubmitHandler}>
                            <CreateContestTextInput placeholder={createContestPaymentPlaceholders[0]}
                                                    changeHandler={this.changeHandler('cardNumber')}
                                                    header={createContestPaymentHeaders[0]}/>
                            <ValidationMessage message={this.state.cardNumberErrorMessage}
                                               type={validationMessageOptions.CreateContestError}/>
                            <div className={styles.inputRowContainer}>
                                <div className={styles.inputRow}>
                                    <CreateContestTextInput placeholder={createContestPaymentPlaceholders[1]}
                                                            changeHandler={this.changeHandler('cardExpiration')}
                                                            header={createContestPaymentHeaders[1]}/>
                                    <ValidationMessage message={this.state.cardExpirationErrorMessage}
                                                       type={validationMessageOptions.CreateContestError}/>
                                </div>
                                <div className={styles.inputRow}>
                                    <CreateContestTextInput placeholder={createContestPaymentPlaceholders[2]}
                                                            changeHandler={this.changeHandler('cardSecurityCode')}
                                                            header={createContestPaymentHeaders[2]}/>
                                    <ValidationMessage message={this.state.cardSecurityCodeErrorMessage}
                                                       type={validationMessageOptions.CreateContestError}/>
                                </div>
                            </div>
                            <CreateContestTextInput placeholder={createContestPaymentPlaceholders[3]}
                                                    changeHandler={this.changeHandler('cardPrize')}
                                                    header={createContestPaymentHeaders[3]}/>
                            <ValidationMessage message={this.state.cardPrizeErrorMessage}
                                               type={validationMessageOptions.CreateContestError}/>
                            <CreateContestSubmitButtons clickHandler={this.redirectToContestType} resetText='Back'
                                                        submitText='Pay Now'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        savedContest: state.contestTypesReducers.savedContest,
        proceedPayData: state.contestReducers.payProceed,
        currentUser: state.userReducers.currentUser,
        steps: state.contestTypesReducers.steps
    };
};

const mapDispatchToProps = (dispatch) => ({
    proceedPay: (data) => dispatch(proceedPay(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestPay);