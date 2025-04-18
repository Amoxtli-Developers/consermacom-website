import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import InsightsIcon from "@mui/icons-material/Insights";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

const features = [
    {
        id: 1,
        title: "Experiencia comprobada en el sector",
        description:
            "Más de 18 años respaldan nuestro trabajo en construcción, remodelación y mantenimiento integral, con resultados sólidos y clientes satisfechos.",
        icon: <VerifiedUserIcon sx={{ fontSize: 50, color: "#fff" }} />,
    },
    {
        id: 2,
        title: "Soluciones integrales multimarca",
        description:
            "Atendemos desde sistemas de elevación hasta bienes muebles e inmuebles, ofreciendo mantenimiento preventivo y correctivo a todo tipo de instalación.",
        icon: <BuildIcon sx={{ fontSize: 50, color: "#fff" }} />,
    },
    {
        id: 3,
        title: "Enfoque estratégico en cada proyecto",
        description:
            "Aplicamos liderazgo técnico y planificación eficiente en todas las etapas, asegurando calidad, cumplimiento y sostenibilidad a largo plazo.",
        icon: <InsightsIcon sx={{ fontSize: 50, color: "#fff" }} />,
    },
    {
        id: 4,
        title: "Compromiso con la innovación y la mejora continua",
        description:
            "Integramos procesos modernos, tecnología actualizada y buenas prácticas para ofrecer servicios de alto nivel, adaptados a cada cliente.",
        icon: <LightbulbIcon sx={{ fontSize: 50, color: "#fff" }} />,
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
                bgcolor: "rgba(0, 0, 0, 0.7)",
                color: "white",
                borderRadius: "20px",
                mx: isMobile ? 2 : isTablet ? 5 : 10,
                mb: 10,
                overflow: "hidden",
            }}
        >
            {/* If you want to keep the background image, uncomment and update the path: */}
            {/* 
      <Box
        component="img"
        src="/images/your-bg.jpg"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      /> 
      */}
            <Box sx={{ p: isMobile ? 3 : 6 }}>
                <Grid container spacing={4}>
                    {features.map((f) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={f.id}
                            sx={{ textAlign: "center" }}
                        >
                            <Box sx={{ mb: 2 }}>{f.icon}</Box>
                            <Typography variant="h6" gutterBottom>
                                {f.title}
                            </Typography>
                            <Typography variant="body2">
                                {f.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default ServiceBanner;
