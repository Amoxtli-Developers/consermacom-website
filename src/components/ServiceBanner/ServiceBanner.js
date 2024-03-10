import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import StepIcon1 from "@mui/icons-material/DesignServices"; // Example icon, replace with your own


const steps = [
  {
    id: 1,
    title: "Diseño esquemático",
    description:
      "Para cada proyecto establecemos relaciones con socios que sabemos que nos ayudarán.",
    icon: <StepIcon1 />,
  },
  {
    id: 2,
    title: "Diseño esquemático",
    description:
      "Para cada proyecto establecemos relaciones con socios que sabemos que nos ayudarán.",
    icon: <StepIcon1 />,
  },
  {
    id: 3,
    title: "Diseño esquemático",
    description:
      "Para cada proyecto establecemos relaciones con socios que sabemos que nos ayudarán.",
    icon: <StepIcon1 />,
  },
  {
    id: 4,
    title: "Diseño esquemático",
    description:
      "Para cada proyecto establecemos relaciones con socios que sabemos que nos ayudarán.",
    icon: <StepIcon1 />,
  },
];

const ServiceBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "rgba(0, 0, 0, 0.7)", // Dark overlay
        color: "white",
        borderRadius: "20px",
        margin: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        marginBottom: 10,

      }}
    >
      <Box
        component="img"
        src="/path-to-your-background-image.jpg" // Replace with your actual background image path
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5, // Dim the image a bit
        }}
      />
      <Grid container spacing={2} sx={{padding:15}}>
        {steps.map((step) => (
          <Grid item xs={12} sm={6} md={3} key={step.id} sx={{textAlign: "center"}}>
            <Box sx={{ display: "block", alignItems: "center" }}>
              <Box sx={{ marginRight: 2 }}>{step.icon}</Box>
              <Box>
                <Typography variant="h6">{step.title}</Typography>
                <Typography>{step.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceBanner;
