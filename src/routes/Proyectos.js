import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  createTheme,
  ThemeProvider,
  CircularProgress,
  Box,
  Fade,
} from "@mui/material";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import Header from "../components/Header/Header";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function Proyectos() {
  const [isLoading, setLoading] = useState(true);
  const [refGallery, inViewGallery] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <Header
        title="Nuestros Proyectos"
        text="Más de 18 años de experiencia respaldan nuestro trabajo. Conoce algunos de los proyectos que hemos realizado para instituciones públicas y privadas en la Ciudad de México."
      />
      <div ref={refGallery}>
        <Fade in={inViewGallery} timeout={1000}>
          <div>
            <ProjectGrid tabsAlignment="flex-start" titleActive={false} />
          </div>
        </Fade>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Proyectos;
