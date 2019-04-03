import React, {Component} from 'react';
import styles from './ContestPay.module.sass';
import connect from 'react-redux/es/connect/connect';

class ContestPay extends Component {

    render() {
        return (
            <div className={styles.mainContainer}>
                Hello From Contest Pay
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

export default connect(mapStateToProps, mapDispatchToProps)(ContestPay);