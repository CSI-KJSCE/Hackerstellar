import React from "react";
import "./styles/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-box-title">
            <img
              src="/hackerstellar.webp"
              alt=""
            />
            <h2>“We bid you Adieu” - Team CSI-KJSCE</h2>
          </div>
          <div className="footer-box-logo">
            <img src="/somaiya-two.png" alt="mail" />
            <img src="/somaiya-one.png" alt="mail" />
          </div>
        </div>
        <div className="footer-contact">
          <h1>Any issues reach out to us </h1>
          <div className="footer-contact-socials">
            <li>
              <a href="mailto:csi-kjsce@somaiya.edu">
                <i className="fa-regular fa-envelope icon"></i>
              </a>
              <a href="https://www.instagram.com/csikjsce/?hl=en">
                <i className="fa-brands fa-instagram icon"></i>
              </a>
              <a href="https://www.linkedin.com/company/csi---kjsce-student%27s-chapter/">
                <i className="fa-brands fa-linkedin icon"></i>
              </a>
              <a href="https://www.youtube.com/@csikjsce3963">
                <i className="fa-brands fa-youtube icon"></i>
              </a>
            </li>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p> Made with 💖 CSI-KJSCE | © 2023 rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
