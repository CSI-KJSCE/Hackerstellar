import React from 'react';
import "./styles/imagerule.css";

function ImageRule(props) {
    return (
        <img
          src={require("../data/assets/Asset1@3x.png")}
          alt="rule" className="image-rule"
          style={props.style ? props.style : {}}
        />
    );
}

export default ImageRule;
