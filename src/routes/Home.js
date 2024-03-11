import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import CircularProgress from "@mui/material/CircularProgress";
import projectPlaceholder from "../assets/images/home/experience.png";
import TestimonyCarousel from "../components/TestimonyCarousel/TestimonyCarousel";
import ClientsList from "../components/ClientsList/ClientsList";
import ServicesList from "../components/ServicesList/ServicesList";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

const projectsData = [
  {
    id: 1,
    category: 0,
    image: projectPlaceholder,
    title: "Project 1 Title",
    description: "Description for Project 1",
  },
  {
    id: 2,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
  {
    id: 3,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
  {
    id: 4,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
  {
    id: 5,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
  {
    id: 6,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
  {
    id: 7,
    category: 1,
    image: projectPlaceholder,
    title: "Project 2 Title",
    description: "Description for Project 2",
  },
];

const testimonials = [
  {
    text: "This is an example testimonial.",
    name: "John Doe",
  },
  {
    text: "This is an example testimonial.",
    name: "Rita Smith",
  },
];
function Home() {
  const [isLoading, setLoading] = useState(true);

  const [refMainCarousel, inViewMainCarousel] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refExperienceSection, inViewExperienceSection] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refProjectGrid, inViewProjectGrid] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refTestimonyCarousel, inViewTestimonyCarousel] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refClientsList, inViewClientsList] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refServicesList, inViewServicesList] = useInView({
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
      <div ref={refMainCarousel}>
        <Slide direction="up" in={inViewMainCarousel} timeout={1000}>
          <div>
            <MainCarousel />
          </div>
        </Slide>
      </div>
      <div ref={refExperienceSection}>
        <Slide direction="right" in={inViewExperienceSection} timeout={1000}>
          <div>
            <ExperienceSection />
          </div>
        </Slide>
      </div>
      <div ref={refProjectGrid}>
        <Fade in={inViewProjectGrid} timeout={1000}>
          <div>
            <ProjectGrid projects={projectsData} />
          </div>
        </Fade>
      </div>
      <div ref={refTestimonyCarousel}>
        <Fade in={inViewTestimonyCarousel} timeout={1000}>
          <div>
            <TestimonyCarousel testimonials={testimonials} />
          </div>
        </Fade>
      </div>
      <div ref={refClientsList}>
        <Fade in={inViewClientsList} timeout={1000}>
          <div>
            <ClientsList />
          </div>
        </Fade>
      </div>
      <div ref={refServicesList}>
        <Fade in={inViewServicesList} timeout={1000}>
          <div>
            <ServicesList />
          </div>
        </Fade>
      </div>
      {/* Footer remains unchanged */}
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
