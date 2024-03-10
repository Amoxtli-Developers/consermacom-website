import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import ServiceGrid from "../components/ServiceGrid/ServiceGrid";
import WorkButton from "../components/WorkButton/WorkButton";
import Footer from "../components/Footer/Footer";
import ServiceBanner from "../components/ServiceBanner/ServiceBanner";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
function Servicios() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Banner
        title="Servicios"
        description="Descripción del servicio Descripción del servicio Descripción"
        imageUrl="../../assets/images/home/main-slider1.png"
      />
      <Header
        title="Your Custom Title"
        text="Your custom text goes here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
      />
      <ServiceGrid />
      <ServiceBanner />
      <WorkButton />
      <Footer />
    </ThemeProvider>
  );
}

export default Servicios;
