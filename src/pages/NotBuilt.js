import React from "react";
import "../index.css";
import "./styles/NotBuilt.css";
import { Theme } from "../theme/theme";
import Background from "../components/Background";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function NotBuilt() {
  return (
    <>
      <Background />
      <Theme>
        <Grid container justifyContent="center">
          <Grid item mobile={10} tablet={8} laptop={6.5}>
            <Box
              sx={{
                width: "100%",
                height: "auto",
                marginTop: "25vh",
                p: 5,
                py: 7,
                transform: "translateY(-50%)",
                overflow: "hidden",
                backdropFilter: "blur(15px) saturate(200%)",
                backgroundColor: "rgba(var(--foreground-color-rgb), 0.75)",
                border: "1px solid rgba(var(--border-color-rgb), 0.2)",
              }}
            >
              <h1 className="incomplete_title">Website Under Construction</h1>
              <p className="incomplete_content">
                We apologize for the inconvenience, our website is currently
                under construction and for the best viewing experience, we
                suggest using a laptop or desktop computer.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
}

export default NotBuilt;
