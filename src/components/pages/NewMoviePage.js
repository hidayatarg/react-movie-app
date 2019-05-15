import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';

// connect to store (reducer)
import { connect } from 'react-redux';

class NewMoviePage extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
    state = {

    };
  render() {
    return (
      <div>
        <NewMovieForm />
      </div>
    )
  }
}

const mapStateToProps = ({ newMovie }) => {
  return {
    newMovie
  }
}

export default connect(mapStateToProps, null) (NewMoviePage)
