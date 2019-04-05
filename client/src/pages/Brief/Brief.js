import React, {Component} from 'react';
import styles from './Brief.module.sass';
import connect from 'react-redux/es/connect/connect';

class Brief extends Component {

    render() {
        console.log(this.props.selectedContest);
        return (
            <div className={styles.mainContainer}>
                {JSON.stringify(this.props.selectedContest)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContest: state.contestReducers.selectedContest
    };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Brief);

