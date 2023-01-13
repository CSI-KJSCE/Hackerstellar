import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  let text = props.text;
  return (
    <div className="button_parent">
      <div className="button">{text}</div>
      <div className="button_ramp"></div>
    </div>
  );
}
