import React from 'react'
import PropTypes from 'prop-types'
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';
import { HashLoader } from 'react-spinners';

// stateless component
const MoviesList = ({ movies }) => {
  const emptyMessage = (
    <p>There are no movies yet.</p>
  );

  const moviesList = (
    <div>

      <HashLoader 
        color = {'#36bdb3'}
        loading = {movies.fetching}
        size = {40}
      />

      {
        movies.error.response
          ? <h3>Error retrieving data</h3>
          : 
          <Grid stackable columns={3}>
          {
            movies.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
          }
          </Grid>
      }
    </div>
  );

  return (
    <div>
      {/* Movies List */}
      {movies.length === 0 ? emptyMessage : moviesList}
    </div>
  )

}

MoviesList.prototype = {
  // state movies convert to array
  movies: PropTypes.shape({
    movies: PropTypes.array.isRequired,
  }).isRequired
};


export default MoviesList
