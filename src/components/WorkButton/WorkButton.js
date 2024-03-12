import React from "react";
import { Button, Typography, Box } from "@mui/material";

const WorkButton = () => {
  const subtitle = "Ayudamos a construir tu futuro";
  const buttonText = "Trabajemos juntos";

  return (
    <Box textAlign="center" sx={{paddingBottom: 10}}>
      <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "50px", fontWeight: "bold", marginTop: "80px", marginBottom: "40px", color:"#164d8d"}}>{subtitle}</Typography>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#c80000",
          color: "white",
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
