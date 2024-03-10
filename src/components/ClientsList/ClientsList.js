import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import GitHubLogo from "../../assets/images/home/client.png"; // replace with actual path
import JQueryLogo from "../../assets/images/home/client.png"; // replace with actual path
import WordPressLogo from "../../assets/images/home/client.png"; // replace with actual path

const clientLogos = [
  { src: GitHubLogo, alt: "GitHub Logo" },
  { src: JQueryLogo, alt: "jQuery Logo" },
  { src: WordPressLogo, alt: "WordPress Logo" },
  { src: WordPressLogo, alt: "WordPress Logo" },
  { src: WordPressLogo, alt: "WordPress Logo" },
  { src: WordPressLogo, alt: "WordPress Logo" },
];

const ClientsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        overflow: "hidden",
        paddingBottom: 10,
        display: isMobile ? "none" : "block",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{ textAlign: "center" }}
      >
        {clientLogos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ maxWidth: "50%", height: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ClientsList;
