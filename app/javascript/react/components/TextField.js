import React from 'react';

const TextField = (props) => {
  return (
    <label>{props.label}
      <textarea
        onChange={props.onChange}
        name={props.name}
        value={props.value}
      />
    </label>
    );
}

export default TextField;
