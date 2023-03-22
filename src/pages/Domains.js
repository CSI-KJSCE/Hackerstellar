import React, { useState, useEffect } from "react";
import "./styles/Domains.css";
import Card from "../components/Card";

const Domains = () => {
  return (
    <>
      <div className="domains">
        <div className="domains_title">
          <h1>Domains</h1>
          <p>
            {" "}
            <span>&gt;</span> PROBLEM STATEMENTS WILL BE BASED ON THESE{" "}
            <span>&lt;</span>{" "}
          </p>
        </div>
        <div className="domains_cards">
          <Card
            title="DESIGN-DEVELOP"
            subtitle="WEB/APP"
            content="Explore the potential of web and mobile applications to solve real-world problems and improve lives."
            color="#15FC63"
          />
          <Card
            title="CODE-TRAIN-RUN"
            subtitle="AI/ML"
            content="Harness the power of artificial intelligence and machine learning to build smart solutions that can learn and adapt."
            color="#F16500"
          />
          <Card
            title="FLAVOUR-WEB3"
            subtitle="BLOCKCHAIN"
            content="Utilize blockchain technology to develop, secure and decentralize systems that can increase transparency and trust."
            color="#0FC5FF"
          />
        </div>
      </div>
    </>
  );
};

export default Domains;
