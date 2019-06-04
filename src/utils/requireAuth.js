import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
    class Authenticate extends Component {
        componentWillMount() {
            if(!this.props.isAuthenticated){
                // this.props.addFlashMessage({
                //     type:'error',
                //     text: 'You need to login to access this page'
                // });
                // redirect
                // TODO: ! give  message in Login Page
                console.log('gelen router: ', this.context);
                this.props.history.push('/login');
            }
        }
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
    // Authenticate.contextType = {
    //     router: PropTypes.object.isRequired
    // }
    const mapStateToProps = ({ login }) => {
        return {
            isAuthenticated: login.isAuthenticated
        }
    }
    return connect(mapStateToProps) (Authenticate);
}

