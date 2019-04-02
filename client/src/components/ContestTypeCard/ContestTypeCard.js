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

    setImage = () => {
        return this.state.isHover? `${imagesURL}/${this.props.image}`:
            `${imagesURL}/${this.props.imageHover}`;
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
                {this.renderImages()}
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

