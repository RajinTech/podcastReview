import React from 'react';
import { Link } from 'react-router';

const ReviewTile = props => {
  return(
    <div className="panel">
      <div>
        <h2>Vote Total: {props.voteTotal}</h2>
        <h3>Rating: {props.rating}</h3>
        <h3>Binge Value: {props.bingeVal}</h3>
        <h3>Education Value: {props.educationVal}</h3>
        <h3>Entertainment Value: {props.entertainmentVal}</h3>
        <h3>Overall Value: {props.totalScore}</h3>
        <h3>Comment: {props.comment}</h3>
      </div>
    </div>
  )
}

export default ReviewTile;
