import React, { Component } from 'react';
import LoginForm from '../LoginForm';

import { login } from '../../actions/login'

// connect to store (reducer)
import { connect } from 'react-redux';


class LoginPage extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm />
            </div>
        )
    }
}

const mapStateToProps = ({login}) => {
    return {
        login
    }
};

// import action
const mapDispatchToProps = {
  login  
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
