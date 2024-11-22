// import {
//   // Box,
//   ThemeProvider,
//   createTheme,
//   // useMediaQuery,
//   // useTheme,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Typography,
// } from "@mui/material";
// import React, { useEffect, useState } from "react";

// interface Manga {
//   id: string;
//   attributes: {
//     canonicalTitle: string;
//     posterImage: {
//       large: string;
//     };
//   };
//   genres: string[];
// }

// const genres = [
//   "Action",
//   "Adventure",
//   "Comedy",
//   "Drama",
//   "Fantasy",
//   "Horror",
//   "Romance",
//   "Slice of Life",
// ];
// const Interest: React.FC = () => {
//   const [mangas, setMangas] = useState<Manga[]>([]);

//   useEffect(() => {
//     // Fetch manga data from API
//     const fetchMangas = async () => {
//       try {
//         const response = await fetch("https://kitsu.io/api/edge/manga");
//         const data = await response.json();
//         const mangasData = data.data;

//         // Filter and store one manga per genre
//         const filteredMangas: Manga[] = [];
//         for (const genre of genres) {
//           const manga = mangasData.find((mangaData: any) =>
//             mangaData.attributes.genres.includes(genre)
//           );
//           if (manga) {
//             filteredMangas.push({
//               id: manga.id,
//               attributes: manga.attributes,
//               genres: manga.attributes.genres,
//             });
//           }
//         }

//         setMangas(filteredMangas);
//       } catch (error) {
//         console.error("Error fetching manga data:", error);
//       }
//     };

//     fetchMangas();
//   }, []);
//   //   const themes = useTheme();
//   //   const isXs = useMediaQuery(themes.breakpoints.only("xs"));
//   //   const isSm = useMediaQuery(themes.breakpoints.only("sm"));

//   const theme = createTheme({
//     typography: {
//       h2: {
//         display: "flex",
//         justifyContent: "center",
//         marginBottom: "6rem",
//         fontStyle: "italic",
//         fontWeight: 800,
//         letterSpacing: "5px",
//         "@media (max-width:600px)": {
//           fontSize: "28px",
//         },
//       },
//     },
//   });

//   return (
//     <>
//       <div className="mainInterest">
//         <ThemeProvider theme={theme}>
//           <Typography variant="h2">Explore By Interest</Typography>
//         </ThemeProvider>

//         <Grid
//           container
//           spacing={6}
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             marginBottom: "6rem",
//           }}
//         >
//           <Grid item xs={12} sm={6} md={2}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/path/to/image1.jpg"
//                 alt="Image 1"
//               />
//               <CardContent></CardContent>
//             </Card>
//             <Typography variant="body2">Card 1</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/path/to/image2.jpg"
//                 alt="Image 2"
//               />
//               <CardContent></CardContent>
//             </Card>
//             <Typography variant="body2">Card 2</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/path/to/image3.jpg"
//                 alt="Image 3"
//               />
//               <CardContent></CardContent>
//             </Card>
//             <Typography variant="body2">Card 3</Typography>
//           </Grid>
//           <Grid item xs={12} sm={6} md={2}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/path/to/image4.jpg"
//                 alt="Image 4"
//               />
//               <CardContent></CardContent>
//             </Card>
//             <Typography variant="body2">Card 4</Typography>
//           </Grid>
//         </Grid>
//       </div>
//     </>
//   );
// };

// export default Interest;
