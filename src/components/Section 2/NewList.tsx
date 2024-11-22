import { useEffect, useState } from "react";
import axios from "axios";
// import React from "react";
import {
  Typography,
  Card,
  // CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  createTheme,
  // useMediaQuery,
  // useTheme,
} from "@mui/material";

interface Anime {
  id: string;
  attributes: {
    canonicalTitle: string;
    favoritesCount: number;
    createdAt: string;
    posterImage: {
      small: string;
    };
  };
}

const NewList = () => {
  const [animeData, setAnimeData] = useState<Anime[]>([]);

  const theme = createTheme({
    typography: {
      h2: {
        display: "flex",
        fontStyle: "italic",
        marginBottom: "5rem",
        fontWeight: 800,
        color: "whitesmoke",
        marginLeft: "3rem",
        letterSpacing: "5px",
        "@media (max-width:600px)": {
          fontSize: "28px",
        },
      },
    },
  });
  useEffect(() => {
    // Fetch anime data from the Kitsu API
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get(
          " https://kitsu.io/api/edge/manga?sort=createdAt&page[limit]=5"
        );
        const animeList: Anime[] = response.data.data.slice(0, 5); // Get the first 4 anime

        setAnimeData(animeList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAnimeData();
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">New List Here</Typography>
      </ThemeProvider>
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "8rem",
        }}
      >
        {animeData.map((anime) => (
          <Grid key={anime.id} item xs={12} sm={6} md={2}>
            <Card>
              <CardMedia
                component="img"
                image={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
            </Card>
            <Typography variant="body1">
              Title: {anime.attributes.canonicalTitle}
            </Typography>
            {/* <Typography variant="body2">
              Created on : {anime.attributes.createdAt}
            </Typography> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NewList;
