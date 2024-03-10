import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import ProjectCarousel from "../components/ProjectCarousel/ProjectCarousel";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import WorkButton from "../components/WorkButton/WorkButton";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
  });
function DetallesProyecto() {
  const { id } = useParams();
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <ProjectCarousel />
      <ProjectDescription projectId={id}/>
      <WorkButton />
      <Footer />
    </ThemeProvider>
  );
}

export default DetallesProyecto;
