import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import footerLogo from "../../assets/images/logo/footer_white.png";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const boxPaddingX = isMobile ? 2 : 10;
  const boxMarginX = isMobile ? 2 : 10;
  const boxPaddingY = isMobile ? 2 : 10;
  const iconSize = isMobile ? "small" : "medium";

  return (
    <Box
      sx={{
        marginX: boxMarginX,
        paddingX: boxPaddingX,
        paddingY: boxPaddingY,
        color: "white",
        bgcolor: "#164d8d",
        borderRadius: "20px",
        marginBottom: 3,
      }}
    >
      <Grid
        container
        spacing={isMobile ? 2 : 3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: isMobile ? "24px" : "40px", justifyContent: isMobile ? "center" : "start", display: isMobile ? 'flex' : 'inline' }}
          >
            <img
              src={footerLogo}
              style={{ maxWidth: "30%", height: "auto", display: isMobile ? 'block' : 'inline' }}
              alt="Footer Logo"
            />
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: isMobile ? "12px" : "15px" }}
          >
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui rationev
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: isMobile ? "center" : "start",
            marginTop: isMobile ? 2 : 0,
          }}
        >
          <Typography variant="body2"></Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            textAlign: isMobile ? "center" : "end",
            marginTop: isMobile ? 2 : 0,
          }}
        >
          <IconButton color="inherit" size={iconSize}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" size={iconSize}>
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" size={iconSize}>
            <LinkedInIcon />
          </IconButton>
          <Typography
            variant="body2"
            sx={{ mt: isMobile ? 2 : 10, fontSize: isMobile ? "12px" : "15px" }}
          >
            © 2024 Consermacom{" "}
            <span style={{ marginRight: "5px", marginLeft: "5px" }}>|</span>{" "}
            Desarrollado por Amoxtil Web Developers
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
