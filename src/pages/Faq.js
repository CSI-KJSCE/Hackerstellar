import React from "react";
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
  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-title">
          <h1>FAQs</h1>
        </div>
        <div className="faq-content">
          {data.map((content,ind) => (
            <div className="faq-question" key={ind}>
              <Accordion sx={{
                width: "100%",
                margin: "1rem auto",
                backdropFilter: "blur(2px) saturate(200%)",
                backgroundColor: "rgba(var(--foreground-color-rgb), 0.75)",
                borderRadius: "1rem",
                border: "1px solid rgba(var(--border-color-rgb), 0.2)",
              }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{
                    color: "#cfcfcf",
                    fontSize: "1.1rem",
                  }}
                >
                  <Typography  sx={{
                    color: "#e56806",
                    fontWeight: "bold",
                    fontSize: "1.15rem",
                    textTransform: "uppercase",
                  }}>{content.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{
                    color: "#cfcfcf",
                    fontSize: "1.1rem",
                  }}>{content.answer}</Typography>
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
