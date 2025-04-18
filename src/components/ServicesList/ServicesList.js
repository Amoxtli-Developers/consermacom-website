import React from "react";
import {
    Box,
    Grid,
    Typography,
    Card,
    CardActionArea,
    Button,
    useTheme,
    useMediaQuery,
    CardContent,
} from "@mui/material";

// Import a separate image for each service
import elevadoresImg from "../../assets/images/services/1.jpg";
import inmueblesImg from "../../assets/images/services/2.jpg";
import equiposImg from "../../assets/images/services/3.jpg";
import obraCivilImg from "../../assets/images/services/4.jpg";
import arquitecturaImg from "../../assets/images/services/5.jpg";

const services = [
    {
        id: 1,
        title: "Mantenimiento a elevadores",
        image: elevadoresImg,
    },
    {
        id: 2,
        title: "Mantenimiento Comercial e Industrial a Inmuebles",
        image: inmueblesImg,
    },
    {
        id: 3,
        title: "Mantenimiento de equipos",
        image: equiposImg,
    },
    {
        id: 4,
        title: "Obra Civil",
        image: obraCivilImg,
    },
    {
        id: 5,
        title: "Arquitectura",
        image: arquitecturaImg,
    },
];

const ServicesList = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    const buttonText = "Ver más servicios";

    return (
        <Box
            sx={{
                padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
                pt: 10,
                pb: 10,
            }}
        >
            <Typography
                variant="h2"
                gutterBottom
                sx={{ fontWeight: "bold", fontSize: "40px", color: "#164d8d" }}
            >
                Servicios Consermacom
            </Typography>

            <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ pt: 3, pb: 3 }}
            >
                {services.map((service) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={2}
                        key={service.id}
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Card
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: 200,
                                width: 200,
                                borderRadius: "20px",
                                backgroundImage: `url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                transition: "transform 0.3s",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <CardActionArea
                                sx={{
                                    height: "100%",
                                    width: "100%",
                                    cursor: "default",
                                }}
                            >
                                <CardContent
                                    sx={{
                                        p: 0,
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "rgba(200, 0, 0, 0.8)",
                                        color: "white",
                                        opacity: 0,
                                        transition: "opacity 0.3s",
                                        "&:hover": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {service.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#c80000",
                        color: "white",
                        borderRadius: "20px",
                        px: 4,
                        py: 1.5,
                        fontWeight: "bold",
                        fontFamily: "Barlow, sans-serif",
                        "&:hover": { backgroundColor: "#a30000" },
                    }}
                    onClick={() => (window.location.href = "/servicios")}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );
};

export default ServicesList;
