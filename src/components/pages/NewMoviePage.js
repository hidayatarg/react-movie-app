import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit } from '../../actions/newMovie'

// connect to store (reducer)
import { connect } from 'react-redux';

class NewMoviePage extends Component {
 

  render() {
    console.log('Sectin filim ids ',this.props);
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
  return {
    newMovie, 
    movie: movies.movies.find(item => item.id === 3)

  }
};

// Here importing the actions
const mapDispatchToProps = {
  onNewMovieSubmit
};

export default connect(mapStateToProps, mapDispatchToProps) (NewMoviePage)
