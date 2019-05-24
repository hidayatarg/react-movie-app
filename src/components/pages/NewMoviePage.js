import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie'

// connect to store (reducer)
import { connect } from 'react-redux';

class NewMoviePage extends Component {
 

  render() {
    console.log('Sectin filim ids ',this.props.match.params.id);
    return (
      <div>
      {/* Send the onNewMovie Submit action as props to NewMovieForm */}
        <h2>New Movie</h2>        
        <NewMovieForm
          movie={this.props.movie}
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit} />
      </div>
    )
  }
}

// TODO: Fix here
const mapStateToProps = ({ newMovie, movies }, props) => {
  // id should be converted to string
  return {
    newMovie, 
    movie: movies.movies.find(item => item.id === +props.match.params.id)

  }
};

// Here importing the actions
const mapDispatchToProps = {
  onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps) (NewMoviePage)
