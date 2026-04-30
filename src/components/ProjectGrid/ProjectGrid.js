import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

import projects, { categoryTabs } from '../../data/projects.js';

function ProjectGrid({ tabsAlignment, titleActive }) {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          {categoryTabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>
      <Grid container spacing={2}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <CardActionArea onClick={() => handleCardClick(project.id)}>
              <Card
                sx={{
                  aspectRatio: "4 / 3",
                  borderRadius: "20px",
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "#f5f5f5",
                  '&:hover .cardContent': { opacity: 1 },
                  '&:hover .cardMedia': { transform: 'scale(1.03)' },
                }}
              >
                <CardMedia
                  className="cardMedia"
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    transition: "transform .5s",
                    imageRendering: "auto",
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
                  <Typography gutterBottom variant="h5" component="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ textAlign: "center" }}>
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
