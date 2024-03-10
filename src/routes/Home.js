import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
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
    title: 'Project 1 Title',
    description: 'Description for Project 1',
  },
  {
    id: 2,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },
  {
    id: 3,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },
  {
    id: 4,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },
  {
    id: 5,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },
  {
    id: 6,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },
  {
    id: 7,
    category: 1,
    image: projectPlaceholder,
    title: 'Project 2 Title',
    description: 'Description for Project 2',
  },

];
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <MainCarousel />
      <ExperienceSection />
      <ProjectGrid projects={projectsData} />
    </ThemeProvider>
  );
}

export default Home;
