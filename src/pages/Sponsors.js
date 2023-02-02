import React from "react";
import "./styles/Sponsors.css";
import data from "../data/sponsors/sponsors.json";

const Data = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.type} className="sponsor_content_group">
            <h1 className="sponsor_content_title">{item.type}</h1>
            <div className="sponsor_content_images">
              {item.contents.map((content) => {
                return (
                  <a href={content.link} key={content.name} target="_blank">
                    <img src={require("/src/data/sponsors/images/" + content.image)} alt={content.name} />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

const Sponsors = () => {
  const handleClick = () => {
    window.location.href =
      "mailto:csi-kjsce@somaiya.edu?subject=Regarding%20Hackerstellar%20Hackathon&body=Hello%20CSI-KJSCE";
  };
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
        <div className="sponsor_content">
          <Data />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
