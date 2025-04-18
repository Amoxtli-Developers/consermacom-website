import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
    createTheme,
    ThemeProvider,
    CircularProgress,
    Box,
    Fade,
    Grid,
} from "@mui/material";

import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import AboutGridCards from "../components/AboutGridCards/AboutGridCards";
//import TeamSection from "../components/TeamSection/TeamSection";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
});

function About() {
    const [isLoading, setLoading] = useState(true);

    const [refHeader, inViewHeader] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [refAboutGridCards, inViewAboutGridCards] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    // const [refTeamSection, inViewTeamSection] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // });

    useEffect(() => {
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
                <Fade in={inViewHeader} timeout={3000}>
                    <div>
                        <Grid container spacing={2} sx={{ padding: "20px" }}>
                            <Grid item xs={12} sm={6}>
                                <Header
                                    title="Nuestra Visión"
                                    text="Consolidarnos como la empresa mexicana más exitosa en nuestro ramo, con un enfoque estratégico y de excelencia, impulsando el crecimiento y desarrollo de México."
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Header
                                    title="Nuestra Misión"
                                    text="Comprender y satisfacer las necesidades de nuestros clientes, destacando la importancia del liderazgo estratégico en cada etapa del desarrollo de los proyectos. Nos esforzamos por marcar la diferencia a través de la calidad de nuestros servicios y nuestro compromiso constante."
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </div>
            <div ref={refAboutGridCards}>
                <Fade in={inViewAboutGridCards} timeout={3000}>
                    <div>
                        <AboutGridCards />
                    </div>
                </Fade>
            </div>
            {/* <div ref={refTeamSection}>
                <Slide direction="left" in={inViewTeamSection} timeout={1000}>
                    <div>
                        <TeamSection />
                    </div>
                </Slide>
            </div> */}
            <Footer />
        </ThemeProvider>
    );
}

export default About;
