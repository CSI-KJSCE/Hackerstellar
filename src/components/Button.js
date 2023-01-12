import React from "react";

export default function Button(props) {
  let text = props.text;
  let icon = props.icon;
  return (
    <div className="button_outer">
      <div className="button_text">
        <h4>
          {icon ? <img className="icon" src={icon} alt=''/> : null}
          {text}
        </h4>
      </div>
    </div>
  );
}
