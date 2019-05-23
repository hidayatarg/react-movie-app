import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie'

// connect to store (reducer)
import { connect } from 'react-redux';

class NewMoviePage extends Component {
 
  render() {
    // console.log('new movie page props ',this.props);
    return (
      <div>
      {/* Send the onNewMovie Submit action as props to NewMovieForm */}
        <h2>New Movie</h2>        
        <NewMovieForm
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit} />
      </div>
    )
  }
}

const mapStateToProps = ({ newMovie }) => {
  return {
    newMovie
  }
};

// Here importing the actions
const mapDispatchToProps = {
  onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps) (NewMoviePage)
