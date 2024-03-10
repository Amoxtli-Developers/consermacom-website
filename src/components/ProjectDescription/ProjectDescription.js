import React from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import galleryPlaceholder from "../../assets/images/home/experience.png";

const projectsData = [
  {
    id: 1,
    title: "Titulo del Proyecto",
    description: "Nulla porttitor accumsan tincidunt praesent sapien massa convallis pellen tesque necp egestas non nisi vivamus suscipite nulla porttitor accumsan tincidunt praesent sapien massa convallisa pellentesque.",
    description2: "Nulla porttitor accumsan tincidunt praesent sapien massa convallis pellen tesque necp egestas non nisi vivamus suscipite nulla porttitor accumsan tincidunt praesent sapien massa convallisa pellentesque. Lorem ipsum dolor sit met, consectetur adipiscing elit. Integer imperdiet iaculis ipsum aliquet ultricies. Sed a tincidunt enim. Mecenas ultraces viverra ligula, vel lobortis ante pulvinar sed. Doce erat magna, aliquot vitae semper vitae, accusant vel nis. Vivamus pellentesque orci sit met odio dictum eget kommod nulla consequent.",
    objectives: "Lorem ipsum dolor sit met, consectetur adipiscing elit. Integer imperdiet iaculis ipsum aliquet ultricies. Sed a tincidunt enim. Mecenas ultraces viverra ligula, vel lobortis ante pulvinar sed. Doce erat magna, aliquot vitae semper vitae, accusant vel nis. Vivamus pellentesque orci sit met odio dictum eget kommod nulla consequent.",
    image1: galleryPlaceholder,
    image2: galleryPlaceholder,
    approach: "Lorem ipsum dolor sit met, consectetur adipiscing elit. Integer imperdiet iaculis ipsum aliquet ultricies. Sed a tincidunt enim. Mecenas ultraces viverra ligula, vel lobortis ante pulvinar sed. Doce erat magna, aliquot vitae semper vitae, accusant vel nis. Vivamus pellentesque orci sit met odio dictum eget kommod nulla consequent.",
    client: "Nombre del Cliente",
    date: "6 Marzo 2024",
    category: "Residencial",
    ubication: "México, CDMX",
  },
  // Otros proyectos
];

// Suponiendo que projectsData es una lista de objetos con detalles de proyectos
const findProjectById = (projectId) => {
  const id = parseInt(projectId);
  if (!isNaN(id)) {
    return projectsData.find(project => project.id === id);
  } else {
    return null; // Si el ID no es un número válido, retorna null
  }
}


const ProjectDetails = ({ projectId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const project = findProjectById(projectId);

  if (!project) {
    return <Typography variant="body1">Proyecto no encontrado</Typography>;
  }

  const { title, description, description2, objectives, image1, image2, approach, client, date, ubication, category } = project;
  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : "0 120px",
        boxSizing: "border-box",
        
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} md={8} sx={{ marginRight: isMobile ? 0 : "40px" }}>
            <Box sx={{ pr: { md: 4 }, borderRight: { md: '1px solid #000', paddingRight: isMobile ? 0 : '20px' } }}>
              <Typography variant="h4" gutterBottom sx={{ fontSize: isMobile ? "32px" : "40px", fontWeight: "bold", marginTop: isMobile ? "20px" : "30px", marginBottom: isMobile ? "20px" : "30px" }}>{title}</Typography>
              <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? "16px" : "20px", color: "#868686", marginBottom: "20px" }}>{description}</Typography>
              <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? "16px" : "20px", color: "#868686", marginBottom: "40px" }}>{description2}</Typography>
              <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? "24px" : "30px", fontWeight: "bold", marginTop: isMobile ? "30px" : "40px", marginBottom: "20px" }}>Objetivos:</Typography>
              <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? "16px" : "20px", color: "#868686", marginBottom: "40px" }}>{objectives}</Typography>
              <Grid container spacing={isMobile ? 2 : 4}>
                <Grid item xs={12} md={6}>
                  <img src={image1} alt="Imagen 1" style={{ width: '100%', maxHeight: '280px', marginBottom: '30px', marginTop: '20px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <img src={image2} alt="Imagen 2" style={{ width: '100%', maxHeight: '280px', marginBottom: '30px', marginTop: '20px' }} />
                </Grid>
              </Grid>
              <Typography variant="h6" gutterBottom sx={{ fontSize: isMobile ? "24px" : "30px", fontWeight: "bold", marginTop: "20px", marginBottom: "20px" }}>Acercamiento Consermacon:</Typography>
              <Typography variant="body1" gutterBottom sx={{ fontSize: isMobile ? "16px" : "20px", color: "#868686", marginBottom:"40px"}}>{approach}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginLeft: isMobile ? 0 : '-40px' }}>
            <Box sx={{ pl: { md: 4 }, marginLeft: isMobile ? 0 : '-20px' }}>
              <Typography variant="h6" gutterBottom sx={{marginTop: isMobile ? "30px" : "50px"}}>Cliente:</Typography>
              <Typography variant="body1" gutterBottom sx={{marginBottom: isMobile ? "30px" : "50px"}}>{client}</Typography>
              <Typography variant="h6" gutterBottom>Fecha:</Typography>
              <Typography variant="body1" gutterBottom sx={{marginBottom: isMobile ? "30px" : "50px"}}>{date}</Typography>
              <Typography variant="h6" gutterBottom>Categoría:</Typography>
              <Typography variant="body1" gutterBottom sx={{marginBottom: isMobile ? "30px" : "50px"}}>{category}</Typography>
              <Typography variant="h6" gutterBottom>Ubicación:</Typography>
              <Typography variant="body1" gutterBottom sx={{marginBottom: isMobile ? "30px" : "50px"}}>{ubication}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectDetails;
