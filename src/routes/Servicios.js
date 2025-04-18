import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    createTheme,
    ThemeProvider,
    CircularProgress,
    Box,
    Slide,
    Fade,
} from "@mui/material";

import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import ServiceGrid from "../components/ServiceGrid/ServiceGrid";
import WorkButton from "../components/WorkButton/WorkButton";
import Footer from "../components/Footer/Footer";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
});

function Servicios() {
    const [isLoading, setLoading] = useState(true);

    const [refHeader, inViewHeader] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [refServiceGrid, inViewServiceGrid] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refServiceBanner, inViewServiceBanner] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refWorkButton, inViewWorkButton] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        // Simulate a loading process
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress sx={{ color: "#c80000" }} />
            </Box>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <div ref={refHeader}>
                <Fade in={inViewHeader} timeout={1000}>
                    <div>
                        <Header
                            title="Nuestros Servicios"
                            text="En Consermacom ofrecemos soluciones integrales en mantenimiento, obra civil, arquitectura y más. Atendemos proyectos de distinta escala con enfoque estratégico, innovación y altos estándares de calidad, adaptándonos a las necesidades específicas de cada cliente."
                        />
                    </div>
                </Fade>
            </div>
            <div ref={refServiceGrid}>
                <Slide direction="left" in={inViewServiceGrid} timeout={1000}>
                    <div>
                        <ServiceGrid />
                    </div>
                </Slide>
            </div>
            <div ref={refServiceBanner}>
                <Fade in={inViewServiceBanner} timeout={1000}>
                    <div>
                        <ServiceBanner />
                    </div>
                </Fade>
            </div>
            <div ref={refWorkButton}>
                <Fade in={inViewWorkButton} timeout={1000}>
                    <div>
                        <WorkButton />
                    </div>
                </Fade>
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default Servicios;
