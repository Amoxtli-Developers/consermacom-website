import React from "react";
import { Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import experiencePlaceholder from "../../assets/images/home/logo.jpg";

const ExperienceSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{
                padding: isMobile ? "0 20px" : "0 100px",
                paddingTop: 10,
                paddingBottom: 10,
            }}
        >
            <Grid
                item
                xs={12}
                md={6}
                sx={{ textAlign: isMobile ? "center" : "left" }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontSize: "50px",
                        fontWeight: "bold",
                        color: "#164d8d",
                    }}
                >
                    18 años de <br />
                    experiencia
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontSize: "20px", color: "#868686" }}
                >
                    Somos una empresa mexicana con más de 18 años de
                    experiencia, especializada en soluciones integrales para la
                    construcción, remodelación y mantenimiento de inmuebles.
                    <br />
                    <br />
                    Contamos con un equipo de expertos en obra civil,
                    instalación, modernización y desmantelamiento de elevadores,
                    escaleras eléctricas, plataformas y montacargas. También
                    ofrecemos servicios de mantenimiento preventivo y correctivo
                    en sistemas de aire acondicionado, así como en bienes
                    muebles e inmuebles. Nuestro compromiso es brindar calidad,
                    seguridad y eficiencia en cada proyecto.
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                }}
            >
                <img
                    src={experiencePlaceholder}
                    alt="Experience Placeholder"
                    style={{ maxWidth: "100%", height: "auto" }}
                />
            </Grid>
        </Grid>
    );
};

export default ExperienceSection;
