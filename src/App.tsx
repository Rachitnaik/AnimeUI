import { Grid, Box } from "@mui/material";
import React from "react";
import Navbar from "./components/Homepage/NavFolder/Navbar";
import "./App.css";
import Footer from "./components/Homepage/Footer/Bottompart";

const App: React.FC = () => {
  return (
    <div className="div1">
      <Grid>
        <Navbar />
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={6} md={6}>
          <img
            src="/kamado.png"
            alt="Image"
            style={{
              width: "100%",
              height: "auto",
              marginLeft: "80px",
              marginTop: "100px",
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={4} style={{ marginTop: "-20px" }}>
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Footer />
        </Box>
      </Grid>
    </div>
  );
};

export default App;
