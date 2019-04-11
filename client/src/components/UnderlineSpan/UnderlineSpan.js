import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './UnderlineSpan.module.sass';

class UnderlineSpan extends Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            const length = this.props.items.length;
            const count = this.state.count > length - 2 ? 0 : this.state.count + 1;
            this.setState({
                count
            })
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {items} = this.props;
        const {count} = this.state;
        return (
            <div className={styles.mainContainer}>
                <span className={styles.underlineText}>{items[count]}</span>
            </div>
        )
    }
}


UnderlineSpan.propTypes = {
    items: PropTypes.array
};
export default UnderlineSpan;