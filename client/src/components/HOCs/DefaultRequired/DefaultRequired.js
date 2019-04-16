import React, {Component} from 'react';

export const DefaultRequired = (ComposedComponent, prop, redirect) => {

    class RequiredDefault extends Component {

        componentDidMount() {
            if (!prop) {
                this.props.history.push(redirect);
            }
        }

        componentDidUpdate(prevProps, prevState) {
            if (!prop) {
                this.props.history.push(redirect);
            }
        }

        render() {
            return prop && <ComposedComponent {...this.props} />
        }
    }

    return RequiredDefault;
};
