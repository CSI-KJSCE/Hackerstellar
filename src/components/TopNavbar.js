import React from "react";
import "./styles/TopNavbar.css";

const TopNavbar = (props) => {
  function toggleNav() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("open");
  }
  return (
    <nav className="navbar">
      <div className="navbar_logo__container">
        <img
          src={require("../data/assets/logo.svg").default}
          alt=""
          className="navbar_logo"
        />
      </div>
      <div className="menu">
        <li className={`home ${props.current === "home" ? "active" : null}`}>
          <a href="#home">Home</a>
        </li>
        <li className={`about ${props.current === "about" ? "active" : null}`}>
          <a href="#about">About</a>
        </li>
        <li
          className={`domains ${props.current === "domains" ? "active" : null}`}
        >
          <a href="#domains">Domains</a>
        </li>
        <li
          className={`prizes ${props.current === "prizes" ? "active" : null}`}
        >
          <a href="#prizes">Prizes</a>
        </li>
        <li
          className={`timeline ${
            props.current === "timeline" ? "active" : null
          }`}
        >
          <a href="#timeline">Timeline</a>
        </li>
        <li
          className={`sponsors ${
            props.current === "sponsors" ? "active" : null
          }`}
        >
          <a href="#sponsors">Sponsors</a>
        </li>
        <li className={`faq ${props.current === "faq" ? "active" : null}`}>
          <a href="#faq">FAQs</a>
        </li>
      </div>
      <h1 className="navbar_title">Hackerstellar</h1>
      <div className="navbar_hamburger__container">
        <input className="menu-btn" type="checkbox" id="menu-btn" onClick={()=> toggleNav()}/>
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
      </div>
    </nav>
  );
};

export default TopNavbar;
