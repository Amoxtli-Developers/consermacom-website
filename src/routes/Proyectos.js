import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
  });
function Proyectos() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <h1>Proyectos</h1>
    </ThemeProvider>
  );
}

export default Proyectos;
