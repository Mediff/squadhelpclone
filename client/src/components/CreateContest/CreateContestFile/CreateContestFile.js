import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestFile.module.sass';

class CreateContestFile extends Component {

    constructor(props) {
        super(props);
        this.fileInputRef = React.createRef();
    }

    spanClickHandler = () => {
        this.fileInputRef.current.click();
    };

    fileChangeHandler = (event) => {
        this.props.changeHandler(event);
    };

    render() {
        const {fileName, header} = this.props;
        const file = fileName === ''? 'Upload file': fileName;
        return (
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    {header}
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputText} onClick={this.spanClickHandler}>Choose File</div>
                    <input className={styles.inputText} ref={this.fileInputRef} type='file'
                           onChange={this.fileChangeHandler} name='file'/>
                    <div className={styles.chosenContainer}>
                        <div className={styles.chosenText}>{file}</div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateContestFile.propTypes = {
    header: PropTypes.string,
    fileName: PropTypes.string,
    changeHandler: PropTypes.func
};

export default CreateContestFile
