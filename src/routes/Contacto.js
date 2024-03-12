import React, { useState, useEffect } from "react";
import {
  createTheme,
  ThemeProvider,
  CircularProgress,
  Box,
  Fade,
  Slide,
} from "@mui/material";
import { useInView } from "react-intersection-observer";

import Nav from "../components/Nav/Nav";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function Contacto() {
  const [isLoading, setLoading] = useState(true);

  // Animation triggers with nodeRef
  const { ref: refBanner, inView: inViewBanner } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: refContactForm, inView: inViewContactForm } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate fetching delay
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
      <div ref={refBanner}>
        <Fade in={inViewBanner} timeout={1000}>
          <div>
          <Banner
            title="Contacto"
            imageUrl="../../assets/images/home/main-slider1.png"
          />
          </div>
        </Fade>
      </div>
      <div ref={refContactForm}>
        <Slide direction="right" in={inViewContactForm} timeout={1000}>
          <div><ContactForm /></div>
        </Slide>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Contacto;
