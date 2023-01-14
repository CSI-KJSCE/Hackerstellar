import React from "react";
import Stats from "../components/Stats";
import "./styles/About.css";

const About = (props) => {
  return (
    <div className="about_wrapper">
      <div className="about_text">
        <div className="about_heading">
          <h1>About</h1>
          <img
            src="http://logo-hack.surge.sh/hackerstellar.png"
            alt=""
            className="about_logo"
          ></img>
        </div>
        <p className="about_content">
          Welcome to <span>Hackerstellar</span>, a <span>24-Hour</span>{" "}
          <span>Offline</span> Coding Hackathon where innovation and imagination
          come to life. Join us to explore the limitless potential of technology
          under the theme of <span>Space Exploration</span>. Hosted by the{" "}
          <span>Computer Society of India</span> at{" "}
          <span>K. J. Somaiya College of Engineering</span>.<br />
          <br />
          At Hackerstellar, <span>Network</span> with like-minded individuals,{" "}
          <span>Demonstrate</span> your abilities and <span>Develop</span>{" "}
          cutting-edge and <span>Learn</span>. With great prizes, including <span>Cash
          Prizes</span>, <span>Vouchers</span>, and <span>Internship</span> opportunities, and <span>Industry Experts </span>
           as judges, this is an event not to be missed. Complimentory <span>Food</span>, <span>Fun Activities</span> and what not! Register on{" "}
          <span> Devfolio</span> now to be a part of this{" "}
          <span>unforgettable</span> event and be a part of the future of
          technology and space exploration.
        </p>
      </div>
      <Stats current={props.current} />
    </div>
  );
};

export default About;
