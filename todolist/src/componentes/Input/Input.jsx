import React from "react";
import './Input.css'

const Input = ({ fnChange, type, placeholder, name, id, value}) => {
    return (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={fnChange}
          autoComplete="off"
        />
    );
  };
  
  export default Input;