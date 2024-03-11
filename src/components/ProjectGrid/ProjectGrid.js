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

function ProjectGrid({ projects }) {
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
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
        overflowX: "hidden",
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        paddingBottom={3}
        sx={{
          fontSize: isMobile ? "1.5rem" : "2.5rem",
          fontWeight: "bold",
          color: "#164d8d",
        }}
      >
        Descubre nuestros proyectos
      </Typography>
      <Box
        sx={{ borderBottom: 1, borderColor: "transparent", paddingBottom: 3 }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="project categories"
          TabIndicatorProps={{
            sx: {
              backgroundColor: "#c80000",
            },
          }}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#c80000",
            },
            "& .Mui-selected": {
              color: "#c80000 !important", 
              fontWeight: "bold", 
            },
          }}
        >
          <Tab label="Todos" />
          <Tab label="Categoría1" />
          <Tab label="Categoría2" />
          <Tab label="Categoría3" />
          <Tab label="Categoría4" />
        </Tabs>
      </Box>
      <Grid container spacing={2}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project.id}>
            <CardActionArea onClick={() => handleCardClick(project.id)}>
              <Card
                sx={{
                  height: 300, // Set a fixed height
                  borderRadius: "20px",
                  position: "relative", // Needed for absolute positioning of the content
                  overflow: "hidden", // Ensure the content doesn't spill out
                  "&:hover .cardContent": {
                    opacity: 1, // Show the content on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src={project.image}
                  alt={`Project ${project.title}`}
                  sx={{
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform .5s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)", // Optional: zoom effect on hover
                    },
                  }}
                />
                <CardContent
                  className="cardContent"
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // Center content vertically
                    alignItems: "center", // Center content horizontally
                    backgroundColor: "#c80000", // Semi-transparent overlay
                    color: "white", // Text color
                    transition: "opacity 0.3s ease-in-out", // Smooth transition
                    opacity: 0, // Transparent by default
                    padding: theme.spacing(2), // Use theme spacing for padding
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h5"
                    sx={{ fontWeight: "bold", fontSize: "30px" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body2">{project.description}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProjectGrid;
