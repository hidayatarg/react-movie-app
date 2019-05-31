import React, { Component } from 'react';
import LoginForm from '../LoginForm';

import { loginUser } from '../../actions/login'

// connect to store (reducer)
import { connect } from 'react-redux';


class LoginPage extends Component {
    render() {
        console.log('gidecek props:', this.props);
        
        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm 
                    onLogin={this.props.loginUser}
                    login={this.props.login}
                />
            </div>
        )
    }
}
// the parameter shall be the same with the login action name
const mapStateToProps = ({ login }) => {
    return {
        login
    }
};

// import action
const mapDispatchToProps = {
    loginUser  
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
