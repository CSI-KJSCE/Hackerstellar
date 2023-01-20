import React from "react";
import "./styles/Home.css";
import Button from "../components/Button";
import Spline from "@splinetool/react-spline";

const Home = () => {
  let [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);
  return (
    <>
      <div className="home">
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
          style={{ display: show ? "block" : "none" }}
        />
        <div className="button_position">
          <Button text="Sponsor Us" />
          <Button text="Contact Us"/>
        </div>
      </div>
    </>
  );
};

export default Home;
