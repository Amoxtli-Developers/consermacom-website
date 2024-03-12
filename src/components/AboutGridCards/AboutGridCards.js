import React from "react";
import Grid from "@mui/material/Grid";
import AboutCard from "../AboutCard/AboutCard";
import StarIcon from "@mui/icons-material/Star"; // Replace with actual icons you want to use
import { useTheme, useMediaQuery, Box } from "@mui/material";

const AboutGridCards = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const cardData = [
    {
      icon: <StarIcon />,
      title: "Title 1",
      description: "Description for card 1",
    },
    {
      icon: <StarIcon />,
      title: "Title 2",
      description: "Description for card 2",
    },
    {
      icon: <StarIcon />,
      title: "Title 3",
      description: "Description for card 3",
    },
  ];

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <AboutCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutGridCards;
