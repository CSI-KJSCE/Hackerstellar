import "./index.css";
import { Typography } from "@mui/material";
import { Theme } from "./theme/theme";


function App() {
  return (
    <>
      <Theme>
        <Typography className="text-3xl font-bold underline" color="primary" variant="h3">Hello world!</Typography>
      </Theme>
    </>
  );
}

export default App;
