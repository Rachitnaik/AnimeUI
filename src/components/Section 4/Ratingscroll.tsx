import React, { useEffect, useState } from "react";
import axios from "axios";
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

const Ratingscroll: React.FC = () => {
  const [mangaData, setMangaData] = useState<Manga[]>([]);

  const theme = createTheme({
    typography: {
      h2: {
        display: "flex",
        fontStyle: "italic",
        fontWeight: 800,
        marginBottom: "6rem",
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
    const fetchMangaData = async () => {
      try {
        const response = await axios.get(
          "https://kitsu.io/api/edge/manga?sort=-averageRating&page[limit]=5"
        );
        const mangaList: Manga[] = response.data.data.slice(0, 5);

        setMangaData(mangaList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMangaData();
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">Top 5 Most Rated!</Typography>
      </ThemeProvider>
      <Grid
        container
        spacing={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "6rem",
        }}
      >
        {mangaData.map((manga) => (
          <Grid key={manga.id} item xs={12} sm={6} md={2}>
            <Card>
              <CardMedia
                component="img"
                height="auto"
                image={manga.attributes.posterImage.large}
                alt={manga.attributes.canonicalTitle}
              />
            </Card>
            <Typography variant="body2">
              Title: {manga.attributes.canonicalTitle}
              Average Rating: {manga.attributes.averageRating}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Ratingscroll;
