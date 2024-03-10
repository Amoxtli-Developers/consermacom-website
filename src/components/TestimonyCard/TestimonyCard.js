import React from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import QuoteIcon from "@mui/icons-material/FormatQuote";
import testimonyBackgroundImage from "../../assets/images/home/experience.png"; // Path to your background image

function TestimonyCard({ testimonial, name }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        padding: isMobile ? "0 20px" : isTablet ? "0 50px" : "0 100px",
      }}
    >
      <Card
        sx={{
          backgroundImage: `url(${testimonyBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "20px",
          minHeight: isMobile ? 300 : 434, // Smaller minHeight for mobile
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "inherit",
          }}
        />
        <CardContent
          sx={{
            textAlign: "center",
            position: "relative",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.common.white,
              fontSize: isMobile ? "2.5rem" : isTablet ? "3.5rem" : "4rem", // Adjusted fontSize
            }}
          >
            Testimonios
          </Typography>
          <QuoteIcon
            sx={{
              color: theme.palette.common.white,
              fontSize: isMobile ? "30px" : "40px",
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.white,
              mb: 10,
              fontSize: isMobile ? "1rem" : isTablet ? "1.5rem" : "2rem", // Adjusted fontSize for text
            }}
          >
            {testimonial}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.common.white,
              fontSize: isMobile ? "1rem" : "1.25rem", // Adjusted fontSize for name
            }}
          >
            - {name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default TestimonyCard;
