import React from 'react';
import PropTypes from 'prop-types';
import styles from './CreateContestInput.module.sass';
import {inputTypeOptions} from '../../utils/constants/options';
import {CreateContestSelect} from '../CreateContestSelect/CreateContestSelect';
import {CreateContestTextArea} from '../CreateContestTextArea/CreateContestTextArea';
import {CreateContestTextInput} from '../CreateContestTextInput/CreateContestTextInput';
import {CreateContestCheckboxes} from  '../CreateContestCheckboxes/CreateContestCheckboxes';

export const CreateContestInput = ({header, selectOptions, inputRenderOptions, placeholder}) => {

    return (
        <div className={styles.mainContainer}>
            {inputRenderOptions === inputTypeOptions.InputSelect && <CreateContestSelect header={header}
                                                                                         selectOptions={selectOptions}/>}
            {inputRenderOptions === inputTypeOptions.InputTextBox && <CreateContestTextArea header={header}
                                                                                              placeholder={placeholder}/>}
            {inputRenderOptions === inputTypeOptions.InputTextField && <CreateContestTextInput header={header}
                                                                                              placeholder={placeholder}/>}
            {inputRenderOptions === inputTypeOptions.InputCheckboxes && <CreateContestCheckboxes header={header}
                                                                                               selectOptions={selectOptions}/>}
        </div>
    );
};

CreateContestInput.propTypes = {
    header: PropTypes.string,
    placeholder: PropTypes.string,
    selectOptions: PropTypes.array,
    inputsRenderOptions: PropTypes.string
};