import React from 'react'
import PropTypes from 'prop-types'

// stateless component
const MovieList = ({movies}) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const movieList = (
        <p>There are movies </p>
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
