import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Counters from "../components/Counter/Counter";
import TeamSection from "../components/TeamSection/TeamSection";
import AboutGridCards from "../components/AboutGridCards/AboutGridCards";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
function Nosotros() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Banner
        title="Nosotros"
        text="Somos una empresa con 25 años de experiencia en el mercado, ofreciendo servicios de calidad y confianza."
      />
      <Header
        title="Nuestra historia"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in nunc id sem ultrices tincidunt. Nulla facilisi. Proin nec nisl auctor, suscipit nunc ac, fermentum purus. Nulla facilisi. Proin nec nisl auctor, suscipit nunc ac, fermentum purus. Nulla facilisi. Proin nec nisl auctor, suscipit nunc ac, fermentum purus. Nulla facilisi. Proin nec nisl auctor, suscipit nunc ac, fermentum purus. Nulla facilisi. Proin nec nisl auctor, suscipit nunc ac, fermentum purus."
      />
      <AboutGridCards />
      <Counters />

      <TeamSection />

      <Footer />
    </ThemeProvider>
  );
}

export default Nosotros;
