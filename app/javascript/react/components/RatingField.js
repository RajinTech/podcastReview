import React from 'react';

const RatingField = (props) => {
  return (
    <div>
      <label>{props.label}
        <br></br>
        <input
          type="range"
          min="1"
          max="5"

          onChange={props.onChange}
          name={props.name}
          value={props.value}
        />
      </label>
    </div>
    );
}

export default RatingField;
