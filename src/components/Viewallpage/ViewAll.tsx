import Navbar from "../Homepage/NavFolder/Navbar";
// import Searchs from "../Homepage/NavFolder/Searchs";
import React, { useState, useEffect } from "react";
import {
  // Box,
  // ThemeProvider,
  // createTheme,
  // useMediaQuery,
  // useTheme,
  Button,
  Menu,
  MenuItem,
  Grid,
  Card,
  CardMedia,
  Typography,
  // Container,
} from "@mui/material";

import axios from "axios";

import "./ViewAll.css";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ViewAll: React.FC = () => {
  // const themes = useTheme();
  // const isXs = useMediaQuery(themes.breakpoints.only("xs"));
  // const isSm = useMediaQuery(themes.breakpoints.only("sm"));

  // const theme = createTheme({
  //   typography: {
  //     h2: {
  //       position: "relative",
  //       top: "20px",
  //       display: "flex",
  //       justifyContent: "center",
  //       fontStyle: "italic",
  //       fontWeight: 800,
  //       letterSpacing: "5px",
  //       "@media (max-width:600px)": {
  //         fontSize: "28px",
  //       },
  //     },
  //   },
  // });
  interface Manga {
    id: string;
    attributes: {
      canonicalTitle: string;
      averageRating: string;
      posterImage: {
        large: string;
      };
    };
  }
  // const imageStyle: React.CSSProperties = {
  //   margin: "auto",
  //   width: isSm || isXs ? "90%" : "40%",
  //   height: "auto",
  //   position: "relative",
  //   top: isSm || isXs ? "-10px" : "-40px",
  // };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mangaList, setMangaList] = useState<Manga[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    const fetchMangaList = async () => {
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/manga?page[limit]=${pageSize}&page[offset]=${
            (currentPage - 1) * pageSize
          }`
        );
        setMangaList(response.data.data);
      } catch (error) {
        console.error("Error fetching manga list:", error);
      }
    };

    fetchMangaList();
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  //card component module
  const renderCards = () => {
    return mangaList.map((manga: Manga) => (
      <Grid item xs={6} sm={6} md={2} key={manga.id}>
        <Card>
          <CardMedia
            component="img"
            image={manga.attributes.posterImage.large}
            alt={manga.attributes.canonicalTitle}
          />
        </Card>
        <Typography variant="body2">
          {manga.attributes.canonicalTitle}
        </Typography>
      </Grid>
    ));
  };

  const cardStyle: React.CSSProperties = {
    margin: "15px 100px",
  };
  return (
    <>
      <div className="main" style={{ height: "100vh" }}>
        <div className="div1">
          <div className="div3">
            <Navbar />
            <Button
              variant="contained"
              onClick={handleClick}
              sx={{
                marginLeft: "2rem",
                backgroundColor: "grey",
                width: "130px",
              }}
              endIcon={<ArrowDropDownIcon />}
            >
              All
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Option 1</MenuItem>
              <MenuItem onClick={handleClose}>Option 2</MenuItem>
              <MenuItem onClick={handleClose}>Option 3</MenuItem>
            </Menu>
            {/* rendering cards */}

            <div style={cardStyle}>
              <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 4, sm: 4, md: 15 }}
              >
                {renderCards()}
              </Grid>
              <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
                <span style={{ margin: "0 0.5rem" }}>{currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
