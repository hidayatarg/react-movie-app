import React, { Component } from 'react';
import { Button, Form } from "semantic-ui-react";
import InlineError from "./InlineError";
import { Redirect } from "react-router-dom";

// if token is n the local storage forward to other direction


export default class LoginForm extends Component {
   state = {
        username : '',
        password : '',
        // hata
        errors: {},
        redirect: false
    };

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

  };

  validate = () => {
    const errors = {}
    if (!this.state.username) errors.username = "Username Can't be blank";
    if (!this.state.password) errors.password = "Password Can't be blank";
    return errors

  }

    render() {
        const { errors } = this.state;
        return (
          <div>
            <Form
              onSubmit={this.onSubmit}
              
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

          
            </Form>
          </div>
        );
    }
}
