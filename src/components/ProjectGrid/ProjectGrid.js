// components/ProjectGrid.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  CardMedia,
} from "@mui/material";
import PropTypes from 'prop-types';

// Import your projects data
import projects from '../../data/projects.js';

function ProjectGrid({ tabsAlignment, titleActive }) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // filter: 0 = All, 1 = Club, 2 = DIF, 3 = Amistad
  const filteredProjects = projects.filter(
    (project) => project.category === value || value === 0
  );

  const handleCardClick = (projectId) => {
    navigate(`/detalles-proyecto/${projectId}`);
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "auto",
        p: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        pb: 10,
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        pb={3}
        sx={{
          fontSize: isMobile ? "1.5rem" : "2.5rem",
          fontWeight: "bold",
          color: "#164d8d",
          display: titleActive ? "block" : "none",
        }}
      >
        Descubre nuestros proyectos
      </Typography>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "transparent",
          pb: 3,
          justifyContent: tabsAlignment,
          display: "flex",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="project categories"
          TabIndicatorProps={{ sx: { backgroundColor: "#c80000" } }}
          sx={{
            '& .Mui-selected': { color: '#c80000 !important', fontWeight: 'bold' }
          }}
        >
          <Tab label="Todos" />
          <Tab label="Club de Banqueros" />
          <Tab label="DIF CDMX" />
          <Tab label="Casa de la Amistad" />
        </Tabs>
      </Box>
      <Grid container spacing={2}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <CardActionArea onClick={() => handleCardClick(project.id)}>
              <Card
                sx={{
                  height: 300,
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  '&:hover .cardContent': { opacity: 1 }
                }}
              >
                <CardMedia
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .5s",
                    '&:hover': { transform: 'scale(1.05)' }
                  }}
                />
                <CardContent
                  className="cardContent"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#c80000",
                    color: "white",
                    opacity: 0,
                    transition: "opacity 0.3s",
                    p: 2,
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h5" sx={{ fontWeight: "bold" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

ProjectGrid.propTypes = {
  tabsAlignment: PropTypes.oneOf([
    'center','flex-start','flex-end','space-between','space-around','space-evenly',
  ]),
  titleActive: PropTypes.bool,
};

ProjectGrid.defaultProps = {
  tabsAlignment: 'center',
  titleActive: true,
};

export default ProjectGrid;
