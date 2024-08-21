import React from "react";
import './Img.css'

const Img = ({alteText, imageRender, additionalClass=""}) => {
    return (
        <figure className="illustrator-box">
         <img src={imageRender} 
         alt={alteText}
         className= {`illustrator-box__image ${additionalClass}`}
         />
        </figure>
    );
};

export default Img;