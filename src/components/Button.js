import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  let text = props.text;
  let icon = props.icon;
  return (
    <div className="btn-wrap">
      <div className="btn btn-trapezoid-outline top">
        <span>
          {icon && <img src={icon} alt="icon"></img>}
          {text}
        </span>
      </div>
      <div class="btn-trapezoid-outline2 bottom">
        <span>
        {icon && <img src={icon} alt="icon"></img>}
          {text}
        </span>
      </div>
    </div>
  );
}
