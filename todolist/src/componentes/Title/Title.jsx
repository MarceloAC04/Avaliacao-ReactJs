import React from "react";
import "./Title.css"

const Title = ({ titleText, color = "", textClass = "" }) => {
    return (
        <h1 className={`title  ${textClass}`} style={ {color: color}}>
      {titleText}
    </h1>
    )
}

export default Title;