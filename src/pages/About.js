import React from "react";
import Stats from "../components/Stats";
import "./styles/About.css";
import ReactHtmlParser from 'html-react-parser';
import data from "../data/about/about.json";

const About = (props) => {
  return (
    <div className="about_wrapper">
      <div className="about_text">
        <div className="about_heading">
          <h1>About</h1>
          <img
            src="https://ik.imagekit.io/thebeyonder723/hackerstellar.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673602246427"
            alt=""
            className="about_logo"
          ></img>
        </div>
        <p className="about_content">
          {ReactHtmlParser(data.para_one)}<br /><br />{ReactHtmlParser(data.para_two)}
        </p>
      </div>
      <Stats current={props.current} />
    </div>
  );
};

export default About;
