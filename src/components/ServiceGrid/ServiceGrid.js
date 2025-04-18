// ServicesGrid.js

import React from "react";
import { Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";
import ElevatorIcon from '@mui/icons-material/MoveUp';
import ConstructionIcon from '@mui/icons-material/Construction';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArchitectureIcon from '@mui/icons-material/Architecture';

const servicesData = [
  {
    id: 1,
    serviceName: "Mantenimiento a elevadores",
    serviceDescription: [
      "Instalación",
      "Mantenimiento Preventivo y Correctivo",
      "Reparación",
      "Desmantelamiento",
      "Modernización",
    ],
    icon: <ElevatorIcon sx={{ fontSize: 60, color: '#c80000' }} />,
  },
  {
    id: 2,
    serviceName: "Mantenimiento Comercial e Industrial a Inmuebles",
    serviceDescription: [
      "Mantenimiento e instalación de pisos",
      "Mantenimiento a muros",
      "Impermeabilización y control de humedades",
      "Instalaciones hidráulicas, sanitarias, eléctricas y de datos",
      "Cancelería y cubiertas ligeras",
      "Mantenimiento a herrería",
    ],
    icon: <ConstructionIcon sx={{ fontSize: 60, color: '#c80000' }} />,
  },
  {
    id: 3,
    serviceName: "Mantenimiento de equipos",
    serviceDescription: [
      "Equipo hidroneumático",
      "Subestaciones eléctricas",
      "Sistemas ininterrumpidos de energía",
      "Sistema contra incendio",
      "Plantas de emergencia",
      "Equipos odontológicos, médicos y de laboratorio",
      "Sistemas de enfriamiento y aire acondicionado",
    ],
    icon: <BuildCircleIcon sx={{ fontSize: 60, color: '#c80000' }} />,
  },
  {
    id: 4,
    serviceName: "Obra Civil",
    serviceDescription: [
      "Construcción y obra nueva",
      "Remodelaciones y ampliaciones conforme a la NOM",
      "Interiorismo y mobiliario a medida",
      "Restauración de bienes muebles (INAH/INBA)",
      "Herrería, cancelería y cubiertas ligeras",
      "Reforzamiento y restructuración por daños sísmicos",
    ],
    icon: <EngineeringIcon sx={{ fontSize: 60, color: '#c80000' }} />,
  },
  {
    id: 5,
    serviceName: "Arquitectura",
    serviceDescription: [
      "Desarrollo de proyectos personalizados",
      "Diseño y conceptualización",
      "Anteproyecto",
      "Proyecto ejecutivo",
      "Costos y catálogos de conceptos",
      "Actualización de planos",
      "Renders",
      "Certificaciones y Vo. Bo. por peritos y verificadores",
    ],
    icon: <ArchitectureIcon sx={{ fontSize: 60, color: '#c80000' }} />,
  },
];

const ServicesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        paddingBottom={3}
        alignItems="stretch"
      >
        {servicesData.map((service) => (
          <Grid
            item
            key={service.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            sx={{ display: "flex" }}
          >
            <Box sx={{ flex: 1, display: "flex" }}>
              <ServiceCard
                serviceName={service.serviceName}
                serviceDescription={service.serviceDescription}
                icon={service.icon}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;