import React from "react";
import {
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
  // Card,
  // CardContent,
  // CardMedia,
  Grid,
  TextField,
  Typography,
  Toolbar,
} from "@mui/material";

import "./Feedback.css";

// import React, { useEffect, useState } from "react";

// interface Manga {
//   id: string;
//   attributes: {
//     canonicalTitle: string;
//     posterImage: {
//       large: string;
//     };
//   };
// }

const Interest: React.FC = () => {
  const themes = useTheme();
  const isXsSm = useMediaQuery(themes.breakpoints.down("sm"));
  //   const themes = useTheme();
  //   const isXs = useMediaQuery(themes.breakpoints.only("xs"));
  //   const isSm = useMediaQuery(themes.breakpoints.only("sm"));

  const theme = createTheme({
    typography: {
      h2: {
        display: "flex",
        marginLeft: "2rem",
        marginBottom: "6rem",
        fontStyle: "italic",
        fontWeight: 500,
        letterSpacing: "5px",
        "@media (max-width:600px)": {
          fontSize: "28px",
        },
      },
    },
  });

  return (
    <>
      <Box>
        <Toolbar sx={{ display: "flex" }}>
          <Grid
            container
            spacing={isXsSm ? 2 : 5}
            direction={isXsSm ? "column-reverse" : "row"}
            alignItems={isXsSm ? "center" : "flex-start"}
          >
            <Grid item xs={12} sm={6}>
              <div className="mainInterest">
                <ThemeProvider theme={theme}>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{ marginBottom: "3rem" }}
                  >
                    Update Everyday
                    <br /> Only At MangaFox
                  </Typography>
                </ThemeProvider>
              </div>

              <div className="emailField" style={{ marginBottom: "3rem" }}>
                <TextField
                  label="Email"
                  variant="filled"
                  fullWidth
                  sx={{
                    bgcolor: "#F5F5F5",
                    borderRadius: "20px",
                    width: isXsSm ? "100%" : "20rem",
                    marginLeft: isXsSm ? 0 : "10rem",
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div className="Feedback">
                <img
                  src="./bankai.png"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    marginBottom: isXsSm ? "2rem" : 0,
                    marginLeft: isXsSm ? 0 : "5rem",
                  }}
                  alt="Google"
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </>
  );
};

export default Interest;
