import React from 'react'
import PropTypes from 'prop-types'

// stateless component
const MovieList = ({movies}) => {
    const emptyMessage = (
        <p>There are no movies yet.</p>
    );

    const movieList = (
        <div>
          {
            movies.error.response 
            ?   <h3>Error retrieving data</h3> 
            :   movies.movies.map(movie => <div key={movie.id}>
                {movie.title}
            </div>)
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
