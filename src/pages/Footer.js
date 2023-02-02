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
            <span >
              <img src={mail} alt="mail" />
              csikjsce@somaiya.edu
            </span>
            <a href="mailto:csikjsce@somaiya.edu">CONTACT</a>
          </div>
        </div>
      </div>
      {/* <div className="footer-wrapper">
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
              Facebook
            </a>
            <a href="https://www.instagram.com/csi_kjsce/">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/csi-kjsce/">
              Linkedin
            </a>
            <a href="https://www.youtube.com/channel/UCZ1Z2Z1Z2Z1Z2Z1Z2Z1Z2Z1">
              Youtube
            </a>
          </div>
        </div>
      </div> */}
      <div className="footer-bottom">
        <hr/>
        <h5>© 2023 CSI-KJSCE. All rights reserved</h5>
      </div>
    </div>
  );
};

export default Footer;
