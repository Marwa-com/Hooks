import React from 'react';
import { Link, Route } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({movies,id,match}) => {
    return (
        <div  className="card-deck">


    {movies.map( el => <Link to={`/movies/${id}`} style={{ textDecoration:"none" }}> <MovieCard movie={el}/></Link> )}
    { <Route path="/movies/:id" render={({ match }) => {
          const id = parseInt(match.params.id)
          const foundMovie = movies.find(movie => movie.id == id)
          console.log(foundMovie)
          console.log(id)
          return <MovieCard movie={foundMovie} />
        }} /> }
  </div>       
             
      
    )
}

export default MovieList


