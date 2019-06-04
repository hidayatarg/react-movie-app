import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
    class Authenticate extends Component {
        render() {
            console.log('gelen require Auth: ', this.props);
            
            return (
                <ComposedComponent 
                {...this.props} />
            )
        }
    }
// subscribe to the login store via isAuthenticated 
// defined key
    Authenticate.prototypes = {
        isAuthenticated: PropTypes.bool.isRequired
    }
    const mapStateToProps = ({ login }) => {
        return {
            isAuthenticated: login.isAuthenticated
        }
    }
    return connect(mapStateToProps) (Authenticate);
}

