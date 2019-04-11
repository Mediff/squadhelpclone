import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {Link} from 'react-router-dom';
import styles from './Main.module.sass';
import {Header} from '../../components/Header/Header';
import {getUser} from '../../actions/actionCreator';
import {getToken} from '../../utils/localStorage/localStorage';
import {startPageTitle, startPageText, startPageAnimationListItems} from '../../utils/constants/constants';
import UnderlineSpan from '../../components/UnderlineSpan/UnderlineSpan';
import CarouselTab from '../../components/CarouselTab/CarouselTab';
import {getImagesArray} from '../../utils/constants/constants';


class Main extends Component {

    componentDidMount() {
        if (getToken()) {
            this.props.getUser();
        }
    }

    render() {
        return (
            <div className={styles.mainContainer}>
                <Header user={this.props.currentUser}/>
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>
                        {startPageTitle[0]}
                        <UnderlineSpan items={startPageAnimationListItems}/>
                    </h1>
                    <p className={styles.text}>
                        {startPageText[0]}
                        <br/>
                        {startPageText[1]}
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link className={styles.button} to="/contesttype">START A CONTEST</Link>
                    </div>

                    <div className={styles.carouselContainer}>
                        <CarouselTab items={getImagesArray}/>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isFetching: state.userReducers.isFetching,
        error: state.userReducers.error,
        currentUser: state.userReducers.currentUser
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);