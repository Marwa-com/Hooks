import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => (
   
   <Card style={{ width: 280, height:500, backgroundColor:" rgb(8, 8, 15)"}}>
            <Card.Img style={{height: 270}} src={movie.imageUrl} alt=""  />
            <Card.Body>
            <Card.Title style={{color:"red"}}>{movie.title} </Card.Title>
           <Card.Text style={{fontSize:12, color:"white"}}>{movie.description} <Button>Download </Button></Card.Text>
            </Card.Body>
            <Card.Body>
            <Card.Link style={{fontSize:25}} >
            <StarRatingComponent 
              name="rate1" 
              starCount={7}
              value={movie.rating} 
        />
            </Card.Link>   
            </Card.Body>
            </Card>
            
);

MovieCard.defaultProps = {
    movie: {}
};

MovieCard.propTypes = {
    movie: PropTypes.object
};

export default MovieCard;