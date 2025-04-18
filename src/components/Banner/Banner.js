import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Banner = ({ title, description, imageUrl }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    // Responsive font sizes
    const titleFontSize = isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem";
    const descriptionFontSize = isMobile ? "1rem" : "1.25rem";

    // Layout direction: column on mobile, row otherwise
    const flexDirection = isMobile ? "column" : "row";

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection,
                borderRadius: "20px",
                overflow: "hidden",
                height: isMobile ? "auto" : "45vh",
            }}
        >
            {/* Text Section */}
            <Box
                sx={{
                    flex: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                }}
            >
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        fontSize: titleFontSize,
                        fontWeight: "bold",
                        mb: 2,
                        color: "#164d8d",
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        fontSize: descriptionFontSize,
                        color: theme.palette.text.secondary,
                    }}
                >
                    {description}
                </Typography>
            </Box>

            {/* Smaller Image Section */}
            <Box
                sx={{
                    flex: 1,
                    width: isMobile ? "100%" : "40%",
                    height: isMobile ? "200px" : "100%",
                    overflow: "hidden",
                }}
            >
                <Box
                    component="img"
                    src={imageUrl}
                    alt={title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>
        </Box>
    );
};

export default Banner;
