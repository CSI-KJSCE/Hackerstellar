import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
  }, []);

  return (
    <div
      style={{
        background: "black",
        position: "fixed",
        top: "0%",
        left: "0%",
        height: "100vh",
        width: "100vw",
        zIndex: "7000",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: showPreloader ? "all" : "none",
        opacity: showPreloader ? "1" : "0",
        display: "flex",
        transition: "opacity 0.5s 1s ease",
      }}
      >
      <img
        preload="auto"
        src="/preloader.gif"
        alt="preloader"
        style={{
          width: "100%",
          height: "auto",
          opacity: showPreloader ? "1" : "0",
          transform: showPreloader ? "scale(1)" : "scale(4)",
          transition: "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 2s ease",
        }}
      />
    </div>
  );
};

export default Preloader;
