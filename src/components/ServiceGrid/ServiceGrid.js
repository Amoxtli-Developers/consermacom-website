// ServicesGrid.js

import React from "react";
import { Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import ServiceCard from "../ServiceCard/ServiceCard";

const servicesData = [
  {
    id: 1,
    serviceName: "Servicio1",
    serviceDescription: ["Lorem ipsum", "Lorem ipsum"],
  },
  {
    id: 2,
    serviceName: "Servicio2",
    serviceDescription: ["Lorem ipsum", "Lorem ipsum"],
  },
  {
    id: 3,
    serviceName: "Servicio3",
    serviceDescription: ["Lorem ipsum", "Lorem ipsum"],
  },
  {
    id: 4,
    serviceName: "Servicio4",
    serviceDescription: ["Lorem ipsum", "Lorem ipsum"],
  },
  
];

const ServicesGrid = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Box
      sx={{ padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px", paddingBottom: 10}}
    >
      <Grid container spacing={2} justifyContent="center" paddingBottom={3}>
        {servicesData.map((service) => (
          <Grid item key={service.id} xs={12} sm={6} md={3} lg={3}>
            <ServiceCard
              serviceName={service.serviceName}
              serviceDescription={service.serviceDescription}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesGrid;
