import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList'
import { fetchMovies } from '../../actions/movies'


class MoviesPage extends Component {
  static propTypes = {
    // will be an arry and it will be required
    movies: PropTypes.object.isRequired
  }
  
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    // console.log('Props: ', this.props);
    
    return (
      <div>
        <h2>Movies Page</h2>
        {/* calling Movie Component Passing the movies */}
        <MoviesList movies={this.props.movies}></MoviesList>
      </div>
    )
  }
}

// read State
const mapStateToProps = ({movies}) => {
  return {
    movies
  }
}

/* OR
const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}
*/

const mapDispatchToProps = {
  fetchMovies
}


export default connect(mapStateToProps, mapDispatchToProps) (MoviesPage);
