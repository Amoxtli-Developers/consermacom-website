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
import projects from "../data/projects.js";

const theme = createTheme({
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});

function DetallesProyecto() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);

  const [refImage, inViewImage] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refDescription, inViewDescription] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refWorkButton, inViewWorkButton] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [id]);

  const project = projects.find((p) => p.id === parseInt(id));

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
      {project && (
        <div ref={refImage}>
          <Fade in={inViewImage} timeout={1000}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: { xs: "30vh", sm: "50vh", md: "60vh" },
                objectFit: "cover",
                display: "block",
              }}
            />
          </Fade>
        </div>
      )}
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
