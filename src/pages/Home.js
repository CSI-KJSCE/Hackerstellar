import React, { useRef, useEffect } from "react";
import "./styles/Home.css";
import Spline from "@splinetool/react-spline";

const Home = () => {
  let [show, setShow] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <div className="home">
        <img
          src="hackerstellar.webp"
          alt=""
          className="home_logo"
        ></img>
        <img
          src="astronaut.webp"
          alt=""
          className="home_astro"
        ></img>
        <Spline
          scene="https://prod.spline.design/JlGlt2QT4iK50QuS/scene.splinecode"
          className="home_mars"
          style={{ display: show ? "block" : "none" }}
        />
        <div className="button_position">
          <div
            className="apply-button"
            data-hackathon-slug="hackerstellar"
            data-button-theme="dark"
            style = {{height: "50px", width: "400px"}}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Home;
