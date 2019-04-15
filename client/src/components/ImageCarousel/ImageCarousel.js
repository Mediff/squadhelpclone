import React from 'react';
import styles from './ImageCarousel.module.sass';
import PropTypes from 'prop-types';
import {Carousel} from 'react-bootstrap';

export const ImageCarousel = ({images, sliceNumber}) => {

    const renderCarouselItem = images => images.map((image, index) => <img key={index} src={image} alt='Slider'/>);

    const renderCarousel = () => {
        const carousel = [];
        for(let i = 0; i < images.length; i += sliceNumber){
            carousel.push(<Carousel.Item key={i}>
                <div className={styles.imagesContainer}>
                    {renderCarouselItem(images.slice(i, i + sliceNumber))}
                </div>
            </Carousel.Item>);
        }
        return carousel;
    };

    return (
        <div className={styles.mainContainer}>
            <Carousel>
                {renderCarousel()}
            </Carousel>
        </div>
    );
};

ImageCarousel.propTypes = {
    images: PropTypes.array,
    sliceNumber: PropTypes.number
};