import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  return(
    <div className="panel">
      <div>
        <h3>Rating: {props.rating}</h3>
        <h3>Binge Value: {props.bingeVal}</h3>
        <h3>Education Value: {props.educationVal}</h3>
        <h3>Entertainment Value: {props.entertainmentVal}</h3>
        <h3>Comment: {props.comment}</h3>
      </div>
    </div>
  )
}

export default ReviewTile;
