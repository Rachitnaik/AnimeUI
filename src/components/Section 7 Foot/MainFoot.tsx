import React from "react";
import { Box, /* useMediaQuery, useTheme */ } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./MainFoot.css";

const Bottompart: React.FC = () => {
  // const themes = useTheme();
  // const isXsSm = useMediaQuery(themes.breakpoints.down("sm"));

  return (
    <Box>
      <Toolbar sx={{ display: "flex" }}>
        <>
          <Box
            sx={{
              zIndex: 2,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="MainFoot"
              style={{
                position: "relative",
                textAlign: "center",
              }}
            >
              {/* Display different image on small screens */}
              <img
                src="./Foot.jpg"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  marginBottom: "2rem",
                }}
                alt="Footer"
              />
              <div
                className="overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))",
                }}
              />

              <Typography
                variant="h6"
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  padding: "1rem",
                  color: "#fff",
                  fontFamily: "monospace",
                  textAlign: "center",
                  zIndex: 1,
                }}
              >
                If you too want to get excited over manga heroes' great
                performances with other readers all over the world, MangaFox is
                the best place.
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "14rem",
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FacebookIcon
                  style={{
                    fontSize: "3rem",
                    margin: "0 0.5rem",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
                <TwitterIcon
                  style={{
                    fontSize: "3rem",
                    margin: "0 0.5rem",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
                <InstagramIcon
                  style={{
                    fontSize: "3rem",
                    margin: "0 0.5rem",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />
              </Box>

              <Typography
                variant="h6"
                component="div"
                sx={{
                  position: "absolute",
                  bottom: "6rem",
                  left: 0,
                  right: 0,
                  color: "#fff",
                  fontFamily: "monospace",
                  textAlign: "center",
                  zIndex: 1,
                }}
              >
                Copyright
              </Typography>
            </div>
          </Box>
        </>
      </Toolbar>
    </Box>
  );
};

export default Bottompart;
