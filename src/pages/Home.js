import React, { useRef, useEffect } from "react";
import "./styles/Home.css";
import Button from "../components/Button";
import Spline from "@splinetool/react-spline";

const Home = () => {
  let [show, setShow] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 5000);
  }, []);

  const audioRef = useRef(null);

  function handleClick() {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

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
          onClick={handleClick}
          src="https://ik.imagekit.io/thebeyonder723/hackerstellar.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673602246427"
          alt=""
          className="home_logo"
        ></img>
        <audio ref={audioRef} src="/Hans.mp3" />
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
          <div
            className="apply-button"
            data-hackathon-slug="hackerstellar"
            data-button-theme="dark"
            style = {{height: "50px", width: "400px"}}
          ></div>
          {/* <Button
            text="Devfolio"
            icon="/devfolio.svg"
            onClick={() => console.log("go to devfolio")}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
