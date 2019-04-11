import React, {Component} from 'react';

export const RoleRequired = (ComposedComponent, allowedRoles, user) => {

    class RequireRole extends Component {
        render() {
            return this.props.currentUser && <ComposedComponent {...this.props} />
        }
    }
};
