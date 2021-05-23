import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import MovieCard from './MovieCard';
import MovieDescription from './MovieDescription';
import '../App.css';
const MovieList = ({ movies, id, match }) => {
  return (
    <div className='card-deck'>
      {movies.map((el) => (
        <Link to={`/movies/${el.id}`} style={{ textDecoration: 'none' }}>
          
          <MovieCard movie={el} />
          </Link>
      ))}
      
        <Switch>
        <Route
          path='/movies/:id'
          render={({ match }) => {
            const id = match.params.id;
            const foundMovie = movies.find((movie) => movie.id === id);
            //console.log(foundMovie);
           // console.log(id);
            return (<MovieDescription movie={foundMovie} />);
          }}
        />
         <Route path="/movies" render={() => {
      return (<MovieList movies={movies}/>
          
      );
    }}/>
        </Switch> 
    </div>
  );
};

export default MovieList;
