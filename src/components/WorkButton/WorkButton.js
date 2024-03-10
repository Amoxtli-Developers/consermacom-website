import React from "react";
import { Button, Typography, Box } from "@mui/material";

const WorkButton = () => {
  const subtitle = "Ayudamos a construir tu futuro";
  const buttonText = "Trabajemos juntos";

  return (
    <Box textAlign="center">
      <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "30px", fontWeight: "bold", marginTop: "80px", marginBottom: "40px"}}>{subtitle}</Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#D9D9D9",
          color: "#000",
          borderRadius: "20px",
          padding: "10px 40px", /* Ajusta el padding horizontal aquí */
          fontWeight: "bold",
          fontFamily: "Barlow, sans-serif",
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default WorkButton;
