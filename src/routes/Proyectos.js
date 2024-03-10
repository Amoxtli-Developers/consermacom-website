import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";


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
        title="NOMBRE DE PROYECTO"
        description="Descripción del proyecto Descripción del proyecto Descripción"
        imageUrl= "../../assets/images/home/main-slider1.png"
      />
      <Gallery />
    </ThemeProvider>
  );
}

export default Proyectos;
