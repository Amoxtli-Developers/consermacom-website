import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  createTheme,
  ThemeProvider,
  CircularProgress,
  Box,
  Fade,
} from "@mui/material";

import Nav from "../components/Nav/Nav";
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
  const [isLoading, setLoading] = useState(true);

  const [refDescription, inViewDescription] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refWorkButton, inViewWorkButton] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress sx={{ color: "#c80000" }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div ref={refDescription}>
        <Fade in={inViewDescription} timeout={1000}>
          <div>
            <ProjectDescription projectId={id} />
          </div>
        </Fade>
      </div>
      <div ref={refWorkButton}>
        <Fade in={inViewWorkButton} timeout={1000}>
          <div>
            <WorkButton />
          </div>
        </Fade>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default DetallesProyecto;
