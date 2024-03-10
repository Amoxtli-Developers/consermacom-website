import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  createTheme,
  ThemeProvider,
  CircularProgress,
  Box,
  Fade,
  Slide,
} from "@mui/material";

import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function Proyectos() {
  const [isLoading, setLoading] = useState(true);

  const [refBanner, inViewBanner] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refGallery, inViewGallery] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    // Simulate fetching data with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
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
        <CircularProgress sx={{ color: "black" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div ref={refBanner}>
        <Slide deirection="up" in={inViewBanner} timeout={1000}>
          <div>
            <Banner
              title="Portafolio de Proyectos"
              description="Descripción del proyecto Descripción del proyecto Descripción"
              imageUrl="../../assets/images/home/main-slider1.png"
            />
          </div>
        </Slide>
      </div>
      <div ref={refGallery}>
        <Fade in={inViewGallery} timeout={1000}>
          <div>
            <Gallery />
          </div>
        </Fade>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Proyectos;
