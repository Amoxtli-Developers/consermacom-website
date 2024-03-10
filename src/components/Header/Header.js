import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, text }) => {
  return (
    <Box
      sx={{
        paddingY: 7, // Vertical padding
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{ fontWeight: "bold", fontSize: "50px", marginBottom: 4 }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          paddingX: { xs: 2, sm: 10 }, // Horizontal padding, more on larger screens
          display: "inline-block", // Allows the padding to affect layout
          textAlign: "center", // Text aligned to the left
          maxWidth: "1000px", // Maximum width of the text box
          margin: "auto", // Center the box horizontally
        }}
      >
        <Typography variant="body1" sx={{ color: "#868686", fontSize: "20px" }}>
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
