import React, {Component} from 'react';
import cStyles from './Brief.module.sass';
import connect from 'react-redux/es/connect/connect';
import {StyleBadge} from '../../components/StyleBadge/StyleBadge';
import diamond from '../../images/diamond.png';
import {Link} from 'react-router-dom';
import {EntriesList} from '../../components/EntriesList/EntriesList';
import {setAllEntries, setRejectedEntries} from '../../actions/actionCreator';

class Brief extends Component {

    constructor(props) {
        super(props);
        !this.props.selectedContest && this.props.history.push('/dashboard');
        console.log(this.props.selectedContest);
    }

    state = {
        isRejectSelected: false
    };

    componentDidMount() {
        this.props.selectAllEntries(this.props.selectedContest);

    }

    renderStyles = (styles) => {
        return styles.map((style, index) => <StyleBadge key={index} style={style}/>);
    };

    onAcceptEntryHandler = () => {
    };

    onRejectEntryHandler = () => {
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

    render() {
        return (
            <div className={cStyles.mainContainer}>
                {this.props.selectedContest &&
                <div className={cStyles.briefContainer}>
                    <div className={cStyles.contestBriefContainer}>
                        <Link className={cStyles.editLink} to='/dashboard/edit'>edit</Link>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Name:</div>
                            <input className={cStyles.inputField} type='text'
                                   value={this.props.selectedContest.title}
                                   readOnly={true}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Contest Type:</div>
                            <input className={cStyles.inputField} type='text'
                                   value={this.props.selectedContest.ContestType.name} readOnly={true}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Company Describe:</div>
                            <input className={cStyles.inputField} type='text'
                                   value={this.props.selectedContest.ventureDescribe} readOnly={true}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Customer Describe:</div>
                            <input className={cStyles.inputField} type='text'
                                   value={this.props.selectedContest.customerDescribe} readOnly={true}/>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.inputDesc}>Sub types:</div>
                            <div className={cStyles.styles}>
                                {this.props.selectedContest.styles && this.renderStyles(this.props.selectedContest.styles)}
                            </div>
                        </div>
                        <div className={cStyles.inputContainer}>
                            <div className={cStyles.prize}>
                                <img src={diamond} alt='Prize'/>
                                <input className={cStyles.inputField} type='text'
                                       value={this.props.selectedContest.prize} readOnly={true}/>
                                <div>&#36;</div>
                            </div>
                        </div>
                            <EntriesList onReject={this.onRejectEntryHandler} onAccept={this.onAcceptEntryHandler}
                                         items={this.props.selectedEntries}
                                         isRejectSelected={this.state.isRejectSelected}
                                         allClickHandler={this.onAllClickHandler}
                                         rejectedClickHandler={this.onRejectClickHandler}/>
                    </div>
                </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContest: state.contestReducers.selectedContest,
        selectedEntries: state.entriesReducers.selectedEntries
    };
};

const mapDispatchToProps = (dispatch) => ({
    selectRejectedEntries: contest => dispatch(setRejectedEntries(contest)),
    selectAllEntries: contest => dispatch(setAllEntries(contest))
});

export default connect(mapStateToProps, mapDispatchToProps)(Brief);

