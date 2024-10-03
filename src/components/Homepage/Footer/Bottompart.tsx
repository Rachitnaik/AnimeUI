import AppBar from "@mui/material/AppBar";
import { Box, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Bottompart() {
  return (
    <Box>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontSize: 30, fontFamily: "fantasy" }}
        >
          <Typography
            variant="body1"
            paragraph
            sx={{ fontFamily: "monospace" }}
          >
            Who strives to become a demo slayer after his
            <br /> family was slaughtered and his ounger sister turned into
            demon.
          </Typography>
        </Typography>
        <Button sx={{ backgroundColor: "red", color: "white" }}>
          <Typography sx={{ fontFamily: "monospace" }}>Read Now</Typography>
        </Button>
      </Toolbar>
    </Box>
  );
}
