import React from "react";
import "./Button.css";

const Button = ({classe, type, textButton, onClick}) => {
  return <button className={classe} type={type} onClick={onClick}>{textButton}</button>;
};

export default Button;