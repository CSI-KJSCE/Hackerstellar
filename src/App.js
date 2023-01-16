import React, { useState, useEffect } from "react";
import "./index.css";
import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import RightNavbar from "./components/RightNavbar";
import Background from "./components/Background";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Sponsors from "./pages/Sponsors";
import Preloader from "./components/PreLoader";
import NotBuilt from "./pages/NotBuilt";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [current, setCurrent] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        setCurrent(section.getAttribute("id"));
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setScreenWidth(window.innerWidth));
  }, []);

  if (screenWidth < 1200) {
    return (
      <section className="section" id="not-built">
        <NotBuilt />
      </section>
    );
  } else {
    return (
      <>
        <Preloader show={showPreloader} />
        <TopNavbar current={current} />
        <LeftNavbar current={current} />
        <RightNavbar />
        <Background />
        <section className="section" id="home">
          <Home setShowPreloader={setShowPreloader} />
        </section>
        <section className="section" id="about">
          <About current={current} />
        </section>
        <section className="section" id="domains">
          <h1>Domains</h1>
        </section>
        <section className="section" id="prizes">
          <h1>Prizes</h1>
        </section>
        <section className="section" id="timeline">
          <h1>Timeline</h1>
        </section>
        <section className="section" id="sponsors">
          <Sponsors />
        </section>
        <section className="section" id="faq">
          <Faq />
        </section>
      </>
    );
  }
}

export default App;
