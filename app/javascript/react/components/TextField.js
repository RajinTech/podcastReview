import React from 'react';

const TextField = (props) => {
  return (
    <label>{props.label}
      <textarea
        onChange={props.onChange}
        name={props.name}
        value={props.content}
      />
    </label>
    );
}

export default TextField;
