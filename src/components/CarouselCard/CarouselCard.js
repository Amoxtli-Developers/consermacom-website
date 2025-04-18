import React from "react";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

const CarouselCard = (props) => {
    const { title, description, imageUrl } = props;
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm")); // For small devices
    const matchesMD = useMediaQuery(theme.breakpoints.down("md")); // For medium devices

    const cardStyles = {
        position: "relative", // Ensure proper positioning for the overlay
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        height: "100%", // Set to the desired height
        borderRadius: "20px",
        overflow: "hidden", // Clip the overlay to the card's border radius
    };

    const overlayStyles = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Low-opacity black layer
        zIndex: 1, // Ensure it sits below the text
    };

    const titleFontSize = matchesSM ? "40px" : matchesMD ? "50px" : "60px";
    const descriptionFontSize = matchesSM ? "18px" : "25px";

    return (
        <Card sx={cardStyles}>
            {/* Overlay layer */}
            <div style={overlayStyles}></div>

            <CardContent
                sx={{
                    position: "relative", // Ensure content is above the overlay
                    zIndex: 2, // Place content above the overlay
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: { xs: "2rem", md: "5rem" },
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
                <Typography
                    variant="body2"
                    sx={{ fontSize: descriptionFontSize }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CarouselCard;
