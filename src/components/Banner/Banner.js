import React from "react";
import { Box,Card, CardContent, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";


const Banner = (props) => {
  const { title, description, imageUrl } = props;
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); // For small devices
  const matchesMD = useMediaQuery(theme.breakpoints.down("md")); // For medium devices
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const cardStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    height: "100%", 
    borderRadius: "20px",
  };

  const titleFontSize = matchesSM ? "40px" : matchesMD ? "50px" : "60px";
  const descriptionFontSize = matchesSM ? "18px" : "25px";
  const slideHeight = isMobile ? "30vh" : "45vh";


  return (
    <Box
            sx={{
                padding: isMobile ? "0 20px" : "0 50px",
                boxSizing: "border-box",
            }}
            >
        <Card sx={{ ...cardStyles, height: slideHeight }}>
            <CardContent    
                sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                }}
            >
                <Typography
                gutterBottom
                variant="h1"
                component="h1"
                sx={{ fontSize: titleFontSize, fontWeight: "bold" }}
                >
                {title}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: descriptionFontSize }}>
                {description}
                </Typography>
            </CardContent>
            
        </Card>
    </Box>
  );
};

export default Banner;
