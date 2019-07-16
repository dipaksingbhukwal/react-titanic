import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        id={props.name}
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
