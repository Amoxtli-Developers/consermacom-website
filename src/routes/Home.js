import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <MainCarousel />
      <ExperienceSection />
    </ThemeProvider>
  );
}

export default Home;
