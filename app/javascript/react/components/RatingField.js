import React from 'react';

const RatingField = (props) => {
  return (
    <label>{props.label}
      <input
        type="range"
        min="1"
        max="5"
      
        onChange={props.onChange}
        name={props.name}
        value={props.content}
      />
    </label>
    );
}

export default RatingField;
