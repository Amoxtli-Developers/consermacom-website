import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  Button,
  useTheme,
  useMediaQuery,
  CardContent,
} from "@mui/material";

import cardBackgroundImage from "../../assets/images/home/experience.png";

const services = [
  { id: 1, title: "Service 1" },
  { id: 2, title: "Service 2" },
  { id: 3, title: "Service 3" },
  { id: 4, title: "Service 4" },
  { id: 5, title: "Service 5" },
  { id: 6, title: "Service 6" },
];

const ServicesList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const buttonText = "Ver más servicios";

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
        paddingBottom: 10,
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: "40px", color: "#164d8d" }}
      >
        Servicios Consermacom
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        sx={{ paddingTop: 3, paddingBottom: 3 }}
      >
        {services.map((service) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2}
            key={service.id}
            sx={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
                width: 200,
                borderRadius: "20px",
                backgroundImage: `url(${cardBackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardActionArea
                sx={{ height: "100%", width: "100%", cursor: "default" }}
              >
                <CardContent
                  sx={{
                    padding: 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#c80000", // Adjust values as needed
                    color: "white",
                    opacity: 0,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {service.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#c80000",
            color: "white",
            borderRadius: "20px",
            padding: "10px 40px" /* Ajusta el padding horizontal aquí */,
            fontWeight: "bold",
            fontFamily: "Barlow, sans-serif",
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesList;
