// src/components/ServicePhoto/ServicePhoto.jsx
import React from "react";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import e1 from "../../assets/images/services/grid/e1.jpeg";
import e2 from "../../assets/images/services/grid/e2.jpeg";
import e3 from "../../assets/images/services/grid/e3.jpeg";
import m1 from "../../assets/images/services/grid/m1.jpeg";
import m2 from "../../assets/images/services/grid/m2.jpeg";
import m3 from "../../assets/images/services/grid/m3.jpeg";

const images = [e1, e2, e3, m1, m2, m3];

const ServicePhoto = React.forwardRef((props, ref) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
        <Box
            ref={ref}
            sx={{
                position: "relative",
                color: "white",
                borderRadius: "20px",
                mx: isMobile ? 2 : isTablet ? 5 : 10,
                mb: 10,
                overflow: "hidden",
            }}
        >
            <Grid container spacing={2}>
                {images.map((src, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                pt: "100%",
                                borderRadius: 2,
                                boxShadow: 1,
                                overflow: "hidden",
                            }}
                        >
                            <Box
                                component="img"
                                src={src}
                                alt={`Service ${idx + 1}`}
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
});

export default ServicePhoto;
