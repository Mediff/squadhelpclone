import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ContestTypeCard.module.sass';
import {imagesURL} from '../../api/baseURL';

export class ContestTypeCard extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        isHover: true
    };

    mouseHoverHandler = () => {
        this.setState({
            isHover: !this.state.isHover
        });
    };

    setImage = (image, hoverImage) => {
        return this.state.isHover? `${imagesURL}/${image}`:
            `${imagesURL}/${hoverImage}`;
    };

    renderImages = () => {
        if(Array.isArray(this.props.image)) {
            return this.props.image.map((image, index) => {
               return <img className={styles.cardImage} src={this.setImage(image, this.props.imageHover[index])}
                           alt='Contest'/>
            });
        }
        return  <img className={styles.cardImage} src={this.setImage(this.props.image, this.props.imageHover)}
                     alt='Contest'/>

    };

    renderImages = () => {
        if(Array.isArray(this.props.image)){
            return this.props.image.map( item =>{
               return  <img className={styles.cardImage} src={this.setImage()} alt='Contest'/>
            });
        }
        return <img className={styles.cardImage} src={this.setImage()} alt='Contest'/>;

    };

    render() {
        return (
            <div className={styles.mainContainer}
                 onMouseEnter={() => this.mouseHoverHandler()}
                 onMouseLeave={() => this.mouseHoverHandler()}>
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
    image: PropTypes.string,
    hoverImage: PropTypes.string
};

