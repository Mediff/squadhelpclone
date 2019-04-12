import React, {Component} from 'react';
import cStyles from './Brief.module.sass';
import connect from 'react-redux/es/connect/connect';
import {StyleBadge} from '../../components/StyleBadge/StyleBadge';
import diamond from '../../images/diamond.png';
import {EntriesList} from '../../components/EntriesList/EntriesList';
import {setAllEntries, setRejectedEntries, entryRejected, entryAccepted, getStyles, updateContest}
from '../../actions/actionCreator';
import {StylesSelect} from '../../components/StylesSelect/StylesSelect';
import {ValidationMessage} from '../../components/ValidationMessage/ValidationMessage';
import {SuccessMessage} from "../../components/SuccessMessage/SuccessMessage";
import {validationMessageOptions} from '../../utils/constants/options';
import {updateContestScheme} from "../../utils/validation/validationSchemes";

class Brief extends Component {

    constructor(props) {
        super(props);
        const {title, ventureDescribe, customerDescribe, prize, styles} = this.props.selectedContest;
        this.state = {
            isRejectSelected: false,
            isReadOnly: true,
            title,
            ventureDescribe,
            customerDescribe,
            prize,
            styles,
            titleError: '',
            ventureDescribeError: '',
            customerDescribeError: '',
            prizeError: ''
        };
    }

    componentDidMount() {
        this.props.selectAllEntries(this.props.selectedContest);
        if (!this.props.styles) {
            this.props.getStyles();
        }
    }

    renderStyles = (styles) => {
        return styles.map((style, index) => <StyleBadge key={index} style={style}/>);
    };

    onAcceptEntryHandler = (entry) => {
        const {prize} = this.props.selectedContest;
        this.props.entryAccepted({entry: entry, prize: prize});
    };

    onRejectEntryHandler = (entry) => {
        this.props.entryRejected({entry: entry});
    };

    onAllClickHandler = () => {
        this.setState({
            isRejectSelected: false
        });
        this.props.selectAllEntries(this.props.selectedContest);
    };

    onRejectClickHandler = () => {
        this.setState({
            isRejectSelected: true
        });
        this.props.selectRejectedEntries(this.props.selectedContest);
    };

    onButtonClick = () => {
        const {isReadOnly} = this.state;
        if (isReadOnly) {
            this.setState({
                isReadOnly: false
            })
        } else {
            this.updateContest();
        }

    };

    updateContest = async () => {
        this.setState({
            titleError: '',
            ventureDescribeError: '',
            customerDescribeError: '',
            prizeError: ''
        });
        try {
            const {title, ventureDescribe, customerDescribe, prize} = this.state;
            const {id} = this.props.selectedContest;
            await updateContestScheme.validate({title, ventureDescribe, customerDescribe, prize}, {abortEarly: false});
            this.props.updateContest({title, ventureDescribe, customerDescribe, prize, id});
        } catch (e) {
            e.inner.forEach(error => this.proceedError(error));
        }
    };

    proceedError = (error) => {
        this.setState({
            [error.path + 'Error']: error.message
        });
    };

    changeHandler = value => event => {
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

    render() {
        const {isReadOnly, title, ventureDescribe, customerDescribe, prize} = this.state;
        const {updateSuccess, updateError} = this.props;
        const inputStyle = isReadOnly ? cStyles.inputField : cStyles.editInputField;
        const buttonText = isReadOnly ? 'edit' : 'save';
        let filteredStyles;
        if (this.props.styles) {
            filteredStyles = this.props.styles.filter(style => style.contestTypeId === this.props.selectedContest.contestTypeId);
        }
        return (
            <div className={cStyles.mainContainer}>
                <div className={cStyles.briefContainer}>
                    <div className={cStyles.contestBriefContainer}>
                        {updateSuccess &&
                            <SuccessMessage message='Update success'/>}
                        {updateError &&
                            <ValidationMessage type={validationMessageOptions.CreateContestError} message={updateError}/>}
                        <button className={cStyles.editLink} onClick={this.onButtonClick}>{buttonText}</button>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Name:</div>
                            <input className={inputStyle} type='text' value={title} readOnly={isReadOnly}
                                   onChange={this.changeHandler('title')}/>
                            <ValidationMessage type={validationMessageOptions.CreateContestError}
                                               message={this.state.titleError}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Contest Type:</div>
                            <input className={cStyles.inputField} type='text'
                                   value={this.props.selectedContest.ContestType.name} readOnly={true}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Company Describe:</div>
                            <textarea className={inputStyle} type='text'
                                      value={ventureDescribe} readOnly={isReadOnly}
                                      onChange={this.changeHandler('ventureDescribe')}/>
                            <ValidationMessage type={validationMessageOptions.CreateContestError}
                                               message={this.state.ventureDescribeError}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Customer Describe:</div>
                            <textarea className={inputStyle} type='text'
                                      value={customerDescribe} readOnly={isReadOnly}
                                      onChange={this.changeHandler('customerDescribe')}/>
                            <ValidationMessage type={validationMessageOptions.CreateContestError}
                                               message={this.state.customerDescribeError}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Sub types:</div>
                            <div className={cStyles.styles}>
                                <div className={cStyles.selectedStyles}>
                                    {this.props.selectedContest.styles && this.renderStyles(this.state.styles)}
                                </div>
                                {!isReadOnly && <div className={cStyles.stylesListContainer}>
                                    <StylesSelect stylesArray={filteredStyles} changeHandler={this.styleHandler}
                                                  selectedStyles={this.state.styles}/>
                                </div>}
                            </div>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.prize}>
                                <img src={diamond} alt='Prize'/>
                                <input className={inputStyle} type='text'
                                       value={prize} readOnly={isReadOnly}
                                       onChange={this.changeHandler('prize')}/>
                                <div>&#36;</div>
                                <ValidationMessage type={validationMessageOptions.CreateContestError}
                                                   message={this.state.prizeError}/>
                            </div>
                        </div>
                        <EntriesList onReject={this.onRejectEntryHandler} onAccept={this.onAcceptEntryHandler}
                                     items={this.props.selectedEntries}
                                     isRejectSelected={this.state.isRejectSelected}
                                     allClickHandler={this.onAllClickHandler}
                                     rejectedClickHandler={this.onRejectClickHandler}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContest: state.contestReducers.selectedContest,
        selectedEntries: state.entriesReducers.selectedEntries,
        styles: state.contestTypesReducers.styles,
        updateSuccess: state.contestReducers.updateSuccess,
        updateError: state.contestReducers.updateError
    };
};

const mapDispatchToProps = (dispatch) => ({
    selectRejectedEntries: contest => dispatch(setRejectedEntries(contest)),
    selectAllEntries: contest => dispatch(setAllEntries(contest)),
    entryRejected: entry => dispatch(entryRejected(entry)),
    entryAccepted: entry => dispatch(entryAccepted(entry)),
    getStyles: () => dispatch(getStyles()),
    updateContest: (contest) => dispatch(updateContest(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(Brief);

