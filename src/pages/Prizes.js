import React, { useState, useEffect } from "react";
import "./styles/Prizes.css";

const Prizes = () => {
  return (
    <>
      <div className="prizes">
        <div className="prizes_title">
          <h1>Prizes</h1>
          <p>
            {" "}
            <span>&gt;</span> PRICES ACCORDING TO SPECIFIC DOMAINS{" "}
            <span>&lt;</span>{" "}
          </p>
        </div>
        <div className="prizes_main_div">
          <div className="prizes_galactic_genius">
            <div className="prizes_gg_wrapper">
              <div className="prizes_gg_title">GALACTIC GENIUS </div>
              <div className="prizes_gg_content">CASH PRIZE, GOODIES, INTERNSHIPS AND MANY MORE !!! </div>
            </div>
            <div className="prizes_gg_subtitle">INR 15k+</div>
          </div>
          <div className="prizes_domains">
            <div className="domain_child">
              <div className="prizes_title_2">AI/ML</div>
              <div className="prizes_subtitle">INR 10k+</div>
              <div className="prizes_card_content">
                CASH PRIZE AND GOODIES WORTH 1L+, INTERNSHIPS AND MANY MORE !!!
              </div>
            </div>
            <div className="domain_child">
              <div className="prizes_title_2">WEB/APP</div>
              <div className="prizes_subtitle">INR 10k+</div>
              <div className="prizes_card_content">
                CASH PRIZE AND GOODIES WORTH 1L+, INTERNSHIPS AND MANY MORE !!!
              </div>
            </div>
            <div className="domain_child">
              <div className="prizes_title_2">BLOCKCHAIN</div>
              <div className="prizes_subtitle">INR 10k+</div>
              <div className="prizes_card_content">
                CASH PRIZE AND GOODIES WORTH 1L+, INTERNSHIPS AND MANY MORE !!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prizes;
