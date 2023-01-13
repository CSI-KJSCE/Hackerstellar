import React from "react";
import "./styles/Home.css";
import Button from "../components/Button";
import Spline from "@splinetool/react-spline";
import Background from "../components/Background";

const Home = () => {
  return (
    <>
      <div className="home">
        <Background />
        <img
          src="http://logo-hack.surge.sh/hackerstellar.png"
          alt=""
          className="home_logo"
        ></img>
        <img
          src="https://ik.imagekit.io/thebeyonder723/astro.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673602246797"
          alt=""
          className="home_astro"
        ></img>
        <Spline
          scene="https://prod.spline.design/JlGlt2QT4iK50QuS/scene.splinecode"
          className="home_mars"
        />
        <div className="button_position">
          <Button text="Devfolio"/>
          <Button text="Discord"/>
        </div>
      </div>
    </>
  );
};

export default Home;
