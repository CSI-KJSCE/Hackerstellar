import React from "react";
import "../components/styles/LeftNavbar.css";

const LeftNavbar = () => {
  return (
    <>
      <div className="left-navbar">
        <h1 className="left-navbar_title">#DimensionDrift</h1>
        <div className="left-navbar_menu">
          <li>
            <a href="mailto:csi-kjsce@somaiya.edu">
              <i className="fa-regular fa-envelope icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/csikjsce/?hl=en">
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/csi---kjsce-student%27s-chapter/">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@csikjsce3963">
              <i className="fa-brands fa-youtube icon"></i>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
