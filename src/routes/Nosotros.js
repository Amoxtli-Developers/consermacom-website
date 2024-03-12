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
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import AboutGridCards from "../components/AboutGridCards/AboutGridCards";
import TeamSection from "../components/TeamSection/TeamSection";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function About() {
  const [isLoading, setLoading] = useState(true);

  const [refBanner, inViewBanner] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refAboutGridCards, inViewAboutGridCards] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refTeamSection, inViewTeamSection] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <div ref={refBanner}>
        <Slide direction="up" in={inViewBanner} timeout={1000}>
          <div>
            <Banner
              title="About Us"
              description="Learn more about our team, history, and values."
              imageUrl="../../assets/images/about/banner.jpg" // Adjust path as necessary
            />
          </div>
        </Slide>
      </div>
      <div ref={refHeader}>
        <Fade  in={inViewHeader} timeout={3000}>
          <div>
            <Header
              title="Our Mission"
              text="Dedicated to delivering the best service and value to our clients and communities."
            />
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
      <div ref={refTeamSection}>
        <Slide direction="left" in={inViewTeamSection} timeout={1000}>
          <div>
            <TeamSection />
          </div>
        </Slide>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default About;
