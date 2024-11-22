import { Box, useMediaQuery, useTheme, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Bottompart() {
  const themes = useTheme();
  const isXs = useMediaQuery(themes.breakpoints.only("xs"));
  const isSm = useMediaQuery(themes.breakpoints.only("sm"));
  return (
    <Box>
      <Toolbar sx={{ display: "flex" }}>
        {isSm || isXs ? (
          <>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontSize: 20,
                    fontFamily: "monospace",
                    textAlign: "center",
                  }}
                >
                  Who strives to become a demo slayer after his
                  <br /> family was slaughtered and his younger sister turned
                  into a demon.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    <Typography sx={{ fontFamily: "monospace" }}>
                      Read Now
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: 20,
                fontFamily: "monospace",
              }}
            >
              Who strives to become a demo slayer after his
              <br /> family was slaughtered and his ounger sister turned into
              demon.
            </Typography>
            <Button
              sx={{
                backgroundColor: "red",
                color: "white",
                marginTop: 2,
              }}
            >
              <Typography sx={{ fontFamily: "monospace" }}>Read Now</Typography>
            </Button>
          </>
        )}
      </Toolbar>
    </Box>
  );
}
