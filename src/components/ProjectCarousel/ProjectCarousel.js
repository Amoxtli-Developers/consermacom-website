import React from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "../CarouselCard/CarouselCard";
import carouselPlaceholder from "../../assets/images/home/main-slider1.png";

function ProjectCarousel() {
  const theme = useTheme();
  // Adjust breakpoints as needed
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true, // Note: Corrected typo from 'autolay' to 'autoplay'
    // Additional responsive settings can be applied here if needed
  };

  const cardsData = [
    {
      imageUrl: carouselPlaceholder,
    },
    {
      imageUrl: carouselPlaceholder,
    },
    {
      imageUrl: carouselPlaceholder,
    },
  ];

  // Define the desired height for the slides dynamically
  const slideHeight = isMobile ? "30vh" : "60vh";

  return (
    <Box
      sx={{ width: "100%", overflow: "hidden"}}
    >
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <Box
            key={index}
            sx={{
              height: slideHeight,
              // Adjust padding or other properties for responsiveness
              padding: isMobile ? "0 25px" : "0 55px",
              boxSizing: "border-box",
            }}
          >
            <CarouselCard
              imageUrl={card.imageUrl}
            />
          </Box>
        ))}
      </Slider>
      <style>
        {`
          .slick-dots {
            position: relative;
            bottom: -5px; /* Ajusta la posición vertical de los puntos indicadores */
          }

          .slick-dots li button:before {
            font-size: 12px; /* Ajusta el tamaño de los puntos indicadores */
          }
        `}
      </style>
    </Box>
  );
}

export default ProjectCarousel;
