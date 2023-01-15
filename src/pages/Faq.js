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
          {data.map((content) => (
            <div className="faq-question" key={content.question}>
              <Accordion >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{content.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{content.answer}</Typography>
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
