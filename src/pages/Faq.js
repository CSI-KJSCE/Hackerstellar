import React, { useState } from "react";
import "./styles/Faq.css";
import data from "../data/faq/faq.json";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-title">
          <h1>FAQs</h1>
        </div>
        <div className="faq-content">
          {data.map((content, index) => (
            <div className="faq-question" key={content.question}>
              <Accordion
                expanded={expanded === index}
                className="accordion-transition"
                onChange={handleChange(index)}
                sx={{
                  width: "100%",
                  margin: "2rem auto",
                  backdropFilter: "blur(2px) saturate(200%)",
                  backgroundColor: "rgba(var(--foreground-color-rgb), 0.75)",
                  borderRadius: "1rem",
                  border: "1px solid rgba(var(--border-color-rgb), 0.2)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#cfcfcf" }} />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography
                    sx={{
                      color: expanded === index ? "#e56806" : "#cfcfcf",
                      fontWeight: "bold",
                      fontSize: "1.15rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {content.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#cfcfcf",
                      fontSize: "1.1rem",
                    }}
                  >
                    {content.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
