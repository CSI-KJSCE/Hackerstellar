import React from "react";
import "./styles/TimeStamp.css";

const TimeStamp = (props) => {
  const isMobile = window.innerWidth < 600;

  return (
    <>
      <div
        className="timestamp-container"
        style={{
          alignItems: isMobile ? "flex-start" : props.align === "right" ? "flex-end" : "flex-start",
          textAlign: isMobile ? "left" : props.align === "right" ? "right" : "left",
          padding: isMobile ? "2.5vh 2vw 2.5vh 4.5vw" : props.align === "right" ? "2.5vh 4.5vw 2.5vh 2vw" : "2.5vh 2vw 2.5vh 4.5vw",
          transform: isMobile ? "translateX(0)" : props.align === "right" ? "translateX(35%)" : "translateX(-35%)"
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <div
          className="timestamp-time"
          style={{
            [isMobile ? "right" : props.align]: "-5%"
          }}
        >
          <span>{props.date}</span>
          <p>{props.month}</p>
        </div>
      </div>
    </>
  );
};

export default TimeStamp;
