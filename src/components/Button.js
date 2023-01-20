import React from "react";
import "./styles/Button.css";

export default function Button(props) {
  let text = props.text;
  let icon = props.icon;
  const handleClick = () => {
    window.location.href = "mailto:csi-kjsce@somaiya.edu?subject=Regarding%20Hackerstellar%20Hackathon&body=Hello%20CSI-KJSCE";
}
  return (
    <div onClick={handleClick} className="btn-wrap">
      <div className="btn btn-trapezoid-outline top">
        <span>
          {icon && <img src={icon} alt="icon" className="btn_icon"></img>}
          {text}
        </span>
      </div>
      <div className="btn-trapezoid-outline2 bottom">
        <span>
        {icon && <img src={icon} alt="icon" className="btn_icon"></img>}
          {text}
        </span>
      </div>
    </div>
  );
}
