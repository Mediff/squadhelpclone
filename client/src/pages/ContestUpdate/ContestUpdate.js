import React, {Component} from 'react';
import styles from './ContestUpdate.module.sass';
import connect from 'react-redux/es/connect/connect';

class ContestUpdate extends Component{
    render() {
        return (
            <div className={styles.mainContainer}>
                Hello
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestUpdate);