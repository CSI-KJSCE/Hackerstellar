import React from "react";
import "./styles/Footer.css";
import mail from "../data/assets/mail.svg";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-box-title">
            <h1>HACKERSTELLAR</h1>
            <h2>“We bid you Adieu” - Team CSI-KJSCE</h2>
          </div>
          <div className="footer-box-logo">
            <img src={mail} alt="mail" />
            <img src={mail} alt="mail" />
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-input">
            <label>Any issues reach out to us </label>
            <input type="text" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
          <div className="footer-contact-socials">
            <li>
              <a href="mailto:csi-kjsce@somaiya.edu">
                <i className="fa-regular fa-envelope icon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/csikjsce/?hl=en">
                <i className="fa-brands fa-instagram icon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/csi---kjsce-student%27s-chapter/">
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@csikjsce3963">
                <i className="fa-brands fa-youtube icon"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p> © 2021 Hackerstellar. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
