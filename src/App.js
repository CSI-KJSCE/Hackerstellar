import React from "react";
import "./index.css";
import { Theme } from "./theme/theme";
import TopNavbar from "./components/TopNavbar";

function App() {
  let current = "home";

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    return current;
  };

  window.addEventListener("scroll", handleScroll);

  console.log(handleScroll());

  return (
    <>
      <Theme>
        <TopNavbar current={current} />
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
      </Theme>
    </>
  );
}

export default App;
