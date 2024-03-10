import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";


const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
  });
function Proyectos() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Banner 
        title="Portafolio de Proyectos"
        description="Descripción del proyecto Descripción del proyecto Descripción"
        imageUrl= "../../assets/images/home/main-slider1.png"
      />
      <Gallery />
      <Footer />
    </ThemeProvider>
  );
}

export default Proyectos;
