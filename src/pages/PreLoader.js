import React, { useState, useEffect } from "react";
import "./styles/Preloader.css";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
  }, []);

  return (
    <div
      className="preloader-container"
      style={{ pointerEvents: showPreloader ? "all" : "none", opacity: showPreloader ? "1" : "0" }}
    >
      <img
        className="preloader-img"
        preload="auto"
        src="/preloader.gif"
        alt="preloader"
      />
    </div>
  );
};

export default Preloader;