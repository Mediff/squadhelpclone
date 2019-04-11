import React, {Component} from 'react';
import styles from './CarouselTab.module.sass';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap';
import {ImageCarousel} from '../ImageCarousel/ImageCarousel';

class CarouselTab extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            key: 'name',
        };
    }

    render() {
        const {items} = this.props;
        return (
            <div className={styles.mainContainer}>
                <Tabs className={styles.tabsStyles} activeKey={this.state.key} onSelect={key => this.setState({ key })}>
                    <Tab className={styles.tabsStyle} eventKey='name' title='Name'>
                        <ImageCarousel images={items[0]} sliceNumber={3} />
                    </Tab>
                    <Tab className={styles.tabsStyle} eventKey='tagline' title='Tagline'>
                        <ImageCarousel images={items[1]} sliceNumber={3} />
                    </Tab>
                    <Tab className={styles.tabsStyle} eventKey='logo' title='Logo'>
                        <ImageCarousel images={items[2]} sliceNumber={3} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

CarouselTab.propTypes = {
     items: PropTypes.array
};

export default CarouselTab;