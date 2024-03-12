import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import TeamCarousel from "../TeamCarousel/TeamCarousel";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const teamMembers = [
    {
      id: 1,
      name: "Jane Doe",
      title: "CEO",
      imageUrl: "path-to-image.jpg", // Replace with the actual image path
    },
    {
      id: 2,
      name: "John Smith",
      title: "CTO",
      imageUrl: "path-to-image.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      title: "Lead Designer",
      imageUrl: "path-to-image.jpg",
    },
    // ...more team members
  ];

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={3}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontSize: "40px", color: "#164d8d", fontWeight: "bold" }}
          >
            Nuestro equipo
          </Typography>
          <Typography variant="body1" gutterBottom>
            Set ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <TeamCarousel teamMembers={teamMembers} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TeamSection;
