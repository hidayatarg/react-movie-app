import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react'

// stateless component
const MovieList = ({ movies }) => {
  const emptyMessage = (
    <p>There are no movies yet.</p>
  );

  const movieList = (
    <div>
      {
        movies.error.response
          ? <h3>Error retrieving data</h3>
          : movies.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  );

  return (
    <div>
      {/* Movies List */}
      {movies.length === 0 ? emptyMessage : movieList}
    </div>
  )

}

MovieList.prototype = {
  // state movies convert to array
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired
};


export default MovieList
