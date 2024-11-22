import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  // CardContent,
  CardMedia,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import "./RedBox.css";

interface Manga {
  id: string;
  attributes: {
    canonicalTitle: string;
    averageRating: string;
    popularityRank: number;
    userCount: string;
    posterImage: {
      large: string;
    };
  };
}

const RedBox: React.FC = () => {
  const [mangaPop, setMangaPop] = useState<Manga[]>([]);
  const theme = createTheme({
    typography: {
      h2: {
        display: "flex",
        marginLeft: "3rem",
        fontStyle: "italic",
        fontWeight: 800,
        marginBottom: "6rem",
        letterSpacing: "5px",
        "@media (max-width:600px)": {
          fontSize: "28px",
        },
      },
    },
  });
  const themes = useTheme();
  const isXsSm = useMediaQuery(themes.breakpoints.down("sm"));

  useEffect(() => {
    const fetchMangaData = async () => {
      try {
        const response = await axios.get(
          "https://kitsu.io/api/edge/manga?sort=popularityRank&page[limit]=10"
        );
        const mangaList: Manga[] = response.data.data;

        setMangaPop(mangaList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMangaData();
  }, []);

  return (
    <>
      <Box
        sx={{
          marginBottom: "6rem",
          backgroundColor: "maroon",
          // borderRadius: "5rem",
          borderTopLeftRadius: "2rem",
          borderTopRightRadius: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isXsSm ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5rem",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h2">
              Easy Read Manga
              <br />
              Anytime and Anywhere
            </Typography>
          </ThemeProvider>

          {isXsSm ? (
            <div className="googleapple">
              <img src="./google.png" style={{ width: "100px" }} alt="Google" />
              <img src="./apple.png" style={{ width: "100px" }} alt="Apple" />
            </div>
          ) : (
            <div className="googleapple">
              <img src="./google.png" style={{ width: "200px" }} alt="Google" />
              <img src="./apple.png" style={{ width: "200px" }} alt="Apple" />
            </div>
          )}
        </Box>
        <ThemeProvider theme={theme}>
          <Typography variant="h2" sx={{ justifyContent: "center" }}>
            Top 8 Popular Manga!
          </Typography>
        </ThemeProvider>
        <Grid container spacing={5} sx={{ justifyContent: "center" }}>
          {mangaPop.slice(0, 5).map((manga) => (
            <Grid item key={manga.id} xs={12} sm={6} md={3} lg={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="auto"
                  image={manga.attributes.posterImage.large}
                  alt={manga.attributes.canonicalTitle}
                />
              </Card>
              <Typography variant="h5" component="div">
                {manga.attributes.canonicalTitle}
              </Typography>
              <Typography variant="body2" component="div">
                Popularity Rank: {manga.attributes.popularityRank}
              </Typography>
              <Typography variant="body2" component="div">
                User Count: {manga.attributes.userCount}
              </Typography>
            </Grid>
          ))}
          <Grid item xs={12}></Grid>
          {mangaPop.slice(5, 10).map((manga) => (
            <Grid item key={manga.id} xs={12} sm={6} md={3} lg={2}>
              <Card>
                <CardMedia
                  component="img"
                  height="auto"
                  image={manga.attributes.posterImage.large}
                  alt={manga.attributes.canonicalTitle}
                />
              </Card>
              <Typography variant="h5" component="div">
                {manga.attributes.canonicalTitle}
              </Typography>
              <Typography variant="body2" component="div">
                Popularity Rank: {manga.attributes.popularityRank}
              </Typography>
              <Typography variant="body2" component="div">
                User Count: {manga.attributes.userCount}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default RedBox;
