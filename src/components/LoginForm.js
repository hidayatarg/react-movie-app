import React, { Component } from 'react';
import { Button, Form, Message } from "semantic-ui-react";
import InlineError from "./InlineError";
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

// if token is n the local storage forward to other direction


export default class LoginForm extends Component {
   state = {
        username : '',
        password : '',
        // hata
        errors: {},
        redirect: false
    };

  // Indentify the coming prop type
  static propTypes = {
    onLogin: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = () => {
    // validation
    const errors = this.validate();
    // console.log('error: ', errors);
    // send the error to state
    this.setState({
      errors,
      redirect: true
    });

   console.log('Bilgileriniz: ', this.state);
   this.props.onLogin(this.state);

  };

  validate = () => {
    const errors = {}
    if (!this.state.username) errors.username = "Username Can't be blank";
    if (!this.state.password) errors.password = "Password Can't be blank";
    return errors

  }

    render() {    
      
        const { errors } = this.state;
        const form = (
          <Form
            onSubmit={this.onSubmit}
            loading={this.props.login.fetching}
          >
            <Form.Field>
              <label>Username</label>
              {errors.username && <InlineError message={errors.username} />}
              <input
                id="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              {errors.password && <InlineError message={errors.password} />}
              <input
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="password"
                type="password"
              />
            </Form.Field>
            <Button type="submit" className="primary">Submit</Button>
            {
              this.props.login.error.response
              &&
              (
                <Message negative>
                  <Message.Header>We're Sorry</Message.Header>
                  <p>A problem occured.</p>
                </Message>
              )
            }
          </Form>
          
        ) 
      console.log('durum: ', this.props.login.done)

        return (
          <div>
            {
              // if done is true redict to movie or show the form
              this.props.login.done && this.state.redirect
                ? <Redirect to="/movies" /> : form
            }
          </div>
        );
    }
}
