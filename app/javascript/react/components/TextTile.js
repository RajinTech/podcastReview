import React from 'react';

const TextTile = (props) => {
  return (
    <label>{props.label}
      <input
        type="text"
        onChange={props.onChange}
        name={props.name}
        value={props.content}
      />
    </label>
    );
}

export default TextTile;
