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
        transform: showPreloader ? "scale(1)" : "scale(4)",
        transition: "opacity 1s 2s ease, transform 3s ease",
      }}
    >
      <img
        src="/preloader.gif"
        style={{
          width: "100%",
          height: "auto",
          opacity: showPreloader ? "1" : "0",
          transition: "opacity 2s ease",
        }}
        alt="preloader"
      />
    </div>
  );
};

export default Preloader;
