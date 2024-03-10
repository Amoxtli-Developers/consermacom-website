import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";

import projectPlaceholder from "../assets/images/home/experience.png";
import TestimonyCarousel from "../components/TestimonyCarousel/TestimonyCarousel";
import ClientsList from "../components/ClientsList/ClientsList";
import ServicesList from "../components/ServicesList/ServicesList";
import Footer from "../components/Footer/Footer";

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
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <MainCarousel />
      <ExperienceSection />
      <ProjectGrid projects={projectsData} />
      <TestimonyCarousel testimonials={testimonials} />
      <ClientsList />
      <ServicesList />
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
