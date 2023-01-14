import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  let text = props.text;
  let icon = props.icon;
  return (
    <div className="button_parent">
      <div className="button">
        {icon && <img src={icon} alt="icon"></img>}
        {/* <img src={icon}></img> */}
        {text}
      </div>
    </div>
  );
}
