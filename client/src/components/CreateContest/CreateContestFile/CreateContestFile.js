import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestFile.module.sass';

class CreateContestFile extends Component {

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
    }

    state = {
        chosenText: 'Upload a file'
    };

    spanClickHandler = () => {
        this.fileInputRef.current.click();
    };

    fileChangeHandler = (event) => {
        const fileName = event.target.value.split(/\\|\//).pop();
        this.setState({
            chosenText: fileName
        });
        this.props.changeHandler(event);
    };

    render() {
        return (
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    {this.props.header}
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputText} onClick={this.spanClickHandler}>Choose File</div>
                    <input className={styles.inputText} ref={this.fileInputRef} type='file'
                           onChange={this.fileChangeHandler} name='file'/>
                    <div className={styles.chosenContainer}>
                        <div className={styles.chosenText}>{this.state.chosenText}</div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateContestFile.propTypes = {
    header: PropTypes.string,
    changeHandler: PropTypes.func
};

export default CreateContestFile
