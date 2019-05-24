import React from 'react'
import MovieCard from './MovieCard';
import { Grid } from 'semantic-ui-react';

const ActorList = (props) => {
    return (
        <div>
            <Grid stackable columns={3}>
                {
                    movies.movies.map(movie =>
                        <MovieCard
                            key={movie.id}
                            deleteMovie={deleteMovie}
                            movie={movie} />
                    )
                }
            </Grid>
        </div>
    )
}

export default ActorList
s