import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import projects from "../../data/projects.js";

const ProjectDescription = ({ projectId }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const project = projects.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <Typography variant="body1" sx={{ p: 4, textAlign: "center" }}>
        Proyecto no encontrado
      </Typography>
    );
  }

  const {
    title,
    fullDescription,
    fullDescription2,
    objectives,
    approach,
    client,
    date,
    categoryLabel,
    ubication,
  } = project;

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : "0 120px",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Grid container spacing={isMobile ? 2 : 4}>
          <Grid item xs={12} md={8} sx={{ marginRight: isMobile ? 0 : "40px" }}>
            <Box
              sx={{
                pr: { md: 4 },
                borderRight: { md: "1px solid #e0e0e0" },
                paddingRight: isMobile ? 0 : "20px",
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "28px" : "40px",
                  fontWeight: "bold",
                  color: "#164d8d",
                  marginTop: isMobile ? "20px" : "30px",
                  marginBottom: isMobile ? "20px" : "30px",
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#868686",
                  marginBottom: "20px",
                  lineHeight: 1.8,
                }}
              >
                {fullDescription}
              </Typography>
              {fullDescription2 && (
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    fontSize: isMobile ? "16px" : "18px",
                    color: "#868686",
                    marginBottom: "40px",
                    lineHeight: 1.8,
                  }}
                >
                  {fullDescription2}
                </Typography>
              )}
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "22px" : "28px",
                  fontWeight: "bold",
                  color: "#164d8d",
                  marginTop: isMobile ? "30px" : "40px",
                  marginBottom: "20px",
                }}
              >
                Objetivos
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#868686",
                  marginBottom: "40px",
                  lineHeight: 1.8,
                }}
              >
                {objectives}
              </Typography>
<Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "22px" : "28px",
                  fontWeight: "bold",
                  color: "#164d8d",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Acercamiento Consermacom
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{
                  fontSize: isMobile ? "16px" : "18px",
                  color: "#868686",
                  marginBottom: "40px",
                  lineHeight: 1.8,
                }}
              >
                {approach}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginLeft: isMobile ? 0 : "-40px" }}>
            <Box sx={{ pl: { md: 4 }, marginLeft: isMobile ? 0 : "-20px" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  marginTop: isMobile ? "10px" : "50px",
                  fontWeight: "bold",
                  color: "#164d8d",
                }}
              >
                Cliente
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: isMobile ? "20px" : "40px", color: "#868686" }}
              >
                {client}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#164d8d" }}>
                Fecha
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: isMobile ? "20px" : "40px", color: "#868686" }}
              >
                {date}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#164d8d" }}>
                Categoría
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: isMobile ? "20px" : "40px", color: "#868686" }}
              >
                {categoryLabel}
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#164d8d" }}>
                Ubicación
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ marginBottom: isMobile ? "20px" : "40px", color: "#868686" }}
              >
                {ubication}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProjectDescription;
