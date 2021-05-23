import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import '../App.css';

const Filter = ({search,handleRating}) => {
    
    return (
        
        <div className='movie-list'>
          <input  placeholder="movie" type="text" onChange={(e)=>search(e.target.value) }/>
          <div className="footer" style={{fontSize:25,backgroundColor:"rgb(36, 36, 46)",marginLeft:50}}>
          <StarRatingComponent 
          
          starCount={7}
          onStarClick={(value)=>handleRating(value)}
          >
          </StarRatingComponent>
          </div>
          

        </div>
    )
}

export default Filter ;