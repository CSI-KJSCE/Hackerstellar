import React from "react";
import "./styles/Sponsors.css";

const Sponsors = () => {
    const handleClick = () => {
    window.location.href = "mailto:csi-kjsce@somaiya.edu?subject=Regarding%20Hackerstellar%20Hackathon&body=Hello%20CSI-KJSCE";
    }
  return (
    <>
      <div className="sponsor">
        <div className="sponsor_title">
          <h1>Sponsors</h1>
          <p>
            {" "}
            <span>&gt;</span> Want to become a Sponsor? Hit the button below!{" "}
            <span>&lt;</span>{" "}
          </p>
        </div>
        <div onClick={handleClick} className="sponsor_button">
          <div className="btn-wrap">
            <div className="btn sponsor_btn-trapezoid-outline top">
              <span>Sponsor Us</span>
            </div>
            <div className="sponsor_btn-trapezoid-outline2 bottom">
              <span>Sponsor Us</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
