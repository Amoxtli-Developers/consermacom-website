import React from "react";
import Grid from "@mui/material/Grid";
import AboutCard from "../AboutCard/AboutCard";
import GavelIcon from '@mui/icons-material/Gavel';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { useTheme, useMediaQuery, Box } from "@mui/material";

const AboutGridCards = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    
    const cardData = [
        {
            icon: <GavelIcon sx={{ fontSize: 40, color: '#c80000' }} />,  // Ética
            title: "Ética",
            description: "Actuamos con responsabilidad y principios sólidos en cada proyecto.",
        },
        {
            icon: <HandshakeIcon sx={{ fontSize: 40, color: '#c80000' }} />, // Compromiso
            title: "Compromiso",
            description: "Garantizamos dedicación total y entrega puntual a nuestros clientes.",
        },
        {
            icon: <SpeedIcon sx={{ fontSize: 40, color: '#c80000' }} />, // Eficiencia
            title: "Eficiencia",
            description: "Optimizamos recursos y procesos para lograr resultados efectivos.",
        },
        {
            icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#c80000' }} />, // Integridad
            title: "Integridad",
            description: "Fomentamos confianza y transparencia en todas nuestras acciones.",
        },
        {
            icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#c80000' }} />, // Innovación
            title: "Innovación",
            description: "Incorporamos ideas creativas y tecnología de vanguardia.",
        },
    ];

    return (
        <Box
            sx={{
                padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
                paddingBottom: 10,
            }}
        >
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                {cardData.map((card, index) => (
                    <Grid
                        item
                        key={index}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={2}
                        sx={{ display: 'flex' }}
                    >
                        <Box sx={{ flex: 1, display: 'flex' }}>
                            <AboutCard
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutGridCards;