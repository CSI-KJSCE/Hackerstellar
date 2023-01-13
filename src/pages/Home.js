import React from "react";
import "./styles/Home.css";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="home">
      <div className="background-container">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
        <img
          src='http://logo-hack.surge.sh/hackerstellar.png'
          alt=""
          className="home_logo"
        ></img>
        <img
          src={require("../data/assets/astro.png")}
          alt=""
          className="home_astro"
        ></img>
        <Spline
          scene="https://prod.spline.design/JlGlt2QT4iK50QuS/scene.splinecode"
          className="home_mars"
        />
      </div>
    </>
  );
};

export default Home;
