import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';
export default class NewMoviePage extends Component {
    state = {

    };
  render() {
    return (
      <div>
        <h1>New movie Page</h1>
        <NewMovieForm />
      </div>
    )
  }
}
