import {
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Footer from "../Homepage/Footer/Bottompart";
import "./Starter.css";
import Navbar from "../Homepage/NavFolder/Navbar";
import Typography from "@mui/material/Typography";
import NewList from "../Section 2/NewList";
// import Interest from "../Section 3/Interest";
import Ratingscroll from "../Section 4/Ratingscroll";
import RedBox from "../Section 5/RedBox";
import Feedback from "../Section 6/Feedback";
import MainFoot from "../Section 7 Foot/MainFoot";

const Starter: React.FC = () => {
  const themes = useTheme();
  const isXs = useMediaQuery(themes.breakpoints.only("xs"));
  const isSm = useMediaQuery(themes.breakpoints.only("sm"));

  const theme = createTheme({
    typography: {
      h2: {
        position: "relative",
        top: "20px",
        display: "flex",
        justifyContent: "center",
        fontStyle: "italic",
        fontWeight: 800,
        letterSpacing: "5px",
        "@media (max-width:600px)": {
          fontSize: "28px",
        },
      },
    },
  });

  const imageStyle: React.CSSProperties = {
    margin: "auto",
    width: isSm || isXs ? "90%" : "40%",
    height: "auto",
    position: "relative",
    top: isSm || isXs ? "-10px" : "-40px",
  };
  return (
    <>
      <div className="main" style={{ height: "100vh" }}>
        <div className="div1">
          <div className="div3">
            <Navbar />

            <ThemeProvider theme={theme}>
              <Typography variant="h2">Demon Slayer:</Typography>
              <Typography variant="h2">Kimetsu No Yaiba</Typography>
            </ThemeProvider>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img src="/kamado.png" alt="Image" style={imageStyle} />
            </Box>

            <Box
              sx={{
                position: "relative",
                zIndex: 2,

                top: isXs || isSm ? "50px" : "-120px",
              }}
            >
              <Footer />
            </Box>
          </div>
        </div>

        <NewList />

        {/* <Interest /> */}

        <Ratingscroll />

        <RedBox />

        <Feedback />

        <MainFoot />
      </div>
    </>
  );
};

export default Starter;
