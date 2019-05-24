import React, { Component } from 'react';
import NewMovieForm from '../NewMovieForm';
import { onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit } from '../../actions/newMovie'

// connect to store (reducer)
import { connect } from 'react-redux';

class NewMoviePage extends Component {
 
  componentDidMount() {
    const { match } = this.props;
    // there is no movie but there is id in the router
    // take from backend service via id
    if (!this.props.movie && match.params.id){
      this.props.fetchMovie(match.params.id);
    }
  }
  

  render() {
    // console.log('Sectin filim ids ',this.props.match.params.id);
    return (
      <div>
      {/* Send the onNewMovie Submit action as props to NewMovieForm */}
        <h2>New Movie</h2>        
        <NewMovieForm
          movie={this.props.movie}
          newMovie={this.props.newMovie}
          onNewMovieSubmit={this.props.onNewMovieSubmit}
          onUpdateMovieSubmit={this.props.onUpdateMovieSubmit} />
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
  onNewMovieSubmit,
  onUpdateMovieSubmit,
  fetchMovie
};

export default connect(mapStateToProps, mapDispatchToProps) (NewMoviePage)
