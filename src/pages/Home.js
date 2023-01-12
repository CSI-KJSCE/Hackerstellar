import React from "react";
import "./styles/Home.css";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <>
      <div className="home">
        <div class="main"></div>
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
