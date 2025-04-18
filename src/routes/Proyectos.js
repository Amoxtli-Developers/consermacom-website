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
import projectPlaceholder from "../assets/images/home/experience.png";

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

function Proyectos() {
  const [isLoading, setLoading] = useState(true);
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
        <CircularProgress sx={{ color: "#c80000" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div ref={refGallery}>
        <Fade in={inViewGallery} timeout={1000}>
          <div>
            <ProjectGrid projects={projectsData} tabsAlignment="center" />
          </div>
        </Fade>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default Proyectos;
