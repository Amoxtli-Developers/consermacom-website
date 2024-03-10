import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import ContactForm from "../components/ContactForm/ContactForm";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
function Contacto() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Banner
        title="Contacto"
        imageUrl="../../assets/images/home/main-slider1.png"
      />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default Contacto;
