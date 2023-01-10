import React, { useState, useEffect } from "react";
import "./index.css";
import TopNavbar from "./components/TopNavbar";
import LeftNavbar from "./components/LeftNavbar";
import RightNavbar from "./components/RightNavbar";

function App() {
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
  }, []);

  return (
    <>
        <TopNavbar current={current} />
        <LeftNavbar/>
        <RightNavbar/>
        <section className="section" id="home">
          <h1>Home</h1>
        </section>
        <section className="section" id="about">
          <h1>About</h1>
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
          <h1>Sponsors</h1>
        </section>
        <section className="section" id="faq">
          <h1>FAQs</h1>
        </section>
    </>
  );
}

export default App;
