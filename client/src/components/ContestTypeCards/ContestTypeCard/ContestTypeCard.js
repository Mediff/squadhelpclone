import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ContestTypeCard.module.sass';
import {imagesURL} from '../../../api/baseURL';
import {contestTypeOptions} from '../../../utils/constants/options';
import connect from 'react-redux/es/connect/connect';
import {setContestTypes} from '../../../actions/actionCreator';

class ContestTypeCard extends Component {

    state = {
        isHover: true
    };

    clickHandler = () => {
        const {id} = this.props;
        this.props.setContestTypes(id);
        this.props.history.push('/createcontest');
    };

    mouseHoverHandler = () => {
        this.setState({
            isHover: !this.state.isHover
        });
    };

    setImage = (image, hoverImage) => {
        return this.state.isHover ? `${imagesURL}/${image}` :
            `${imagesURL}/${hoverImage}`;
    };

    renderImages = () => {
        if (Array.isArray(this.props.image)) {
            return this.props.image.map((image, index) => {
                return <img className={styles.cardImage} src={this.setImage(image, this.props.imageHover[index])}
                            key={index} alt='Contest'/>
            });
        }
        return <img className={styles.cardImage} src={this.setImage(this.props.image, this.props.imageHover)}
                    alt='Contest'/>

    };

    render() {
        const mainStyle = this.props.options === contestTypeOptions.FavoriteTypes ? styles.mainContainer :
            styles.secondaryContainer;

        return (
            <div className={mainStyle}
                 onMouseEnter={() => this.mouseHoverHandler()}
                 onMouseLeave={() => this.mouseHoverHandler()} onClick={()=>{this.clickHandler()}}>
                <div className={styles.imageContainer}>
                    {this.renderImages()}
                </div>
                <div className={styles.contestName}>
                    {this.props.title}
                </div>
                <hr/>
                <div className={styles.contestDescription}>
                    {this.props.description}
                </div>
            </div>);
    }
}

ContestTypeCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    hoverImage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => ({
    setContestTypes: (id) => dispatch(setContestTypes(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(ContestTypeCard);

