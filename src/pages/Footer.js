import React from "react";
import "./styles/Footer.css";
import mail from "../data/assets/mail.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-wrapper">
        <div className="contact-logo-wrapper">
          <img
            src={require("../data/assets/logo.svg").default}
            alt=""
            className="contact-logo"
          />
          <h3>CSI-KJSCE</h3>
        </div>
        <div className="contact-issues">
          <h3>ANY ISSUES ? ALWAYS AT YOUR SERVICE</h3>
          <div className="contact-issues-button">
            <a href="mailto:csikjsce@somaiya.edu">
              <img src={mail} alt="mail" />
              csikjsce@somaiya.edu
            </a>
            <button>SEND</button>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        {/* <div className="footer-quote">
          <h3>Do you know ?</h3>
          <p>
            "I ain't been up on the block in a minute, uh<br/> I been mixing up the
            Wock' with the Minute, uh<br/> I been building up the blocks like a
            meanie (Uh, uh)<br/> Eliantte got water, dripping out the ceiling (Huh,
            uh)"
          </p>
        </div> */}
        <div className="links">
          <h3>Links</h3>
          <div className="links-wrapper">
            <a href="#">
              Sponsors
            </a>
            <a href="#">
              Sponsors
            </a>
            <a href="#">
              Sponsors
            </a>
            <a href="#">
              Sponsors
            </a>
            <a href="https://www.facebook.com/csi.kjsce/">
              facebook
            </a>
            <a href="https://www.instagram.com/csi_kjsce/">
              instagram
            </a>
            <a href="https://www.linkedin.com/company/csi-kjsce/">
              linkedin
            </a>
            <a href="https://www.youtube.com/channel/UCZ1Z2Z1Z2Z1Z2Z1Z2Z1Z2Z1">
              youtube
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr/>
        <h5>© 2023 CSI-KJSCE. All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
