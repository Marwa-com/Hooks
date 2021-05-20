import React from 'react';
import MovieCard from './MovieCard';




const MovieList = ({movies}) => {
    return (
        <div  className="card-deck">
            {movies.map( el => <MovieCard movie={el}/>)}
        </div>
    )
}

export default MovieList


