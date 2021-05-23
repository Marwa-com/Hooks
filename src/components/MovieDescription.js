import React from 'react'
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import '../App.css';

const MovieDescription = ({ movie }) => {
  return (
    <>
      {movie ? 
        <div className="mov-desc" > 
          <div className="head">
              <h5 style={{color:"blue",marginLeft:30,marginRight:100}}> Movie Description </h5>
              <Link to ="./movies"> Movie List </Link>
          </div>
          <div className="container">
             <div className="descrp">
             <h3 style={{color:"brown",marginLeft:30}}>{movie.title}</h3>
             <p style={{color:"white", marginLeft:30, marginRight:150 , textAlign:"initial", fontWeight:"700"}}> {movie.description} </p>
             </div>
             <ReactPlayer url={movie.trailer} />
          </div>
        </div>
         :
        <p > </p>
      } 
    </>
  )
}

export default MovieDescription