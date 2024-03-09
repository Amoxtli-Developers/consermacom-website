import React from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "../CarouselCard/CarouselCard";
import carouselPlaceholder from "../../assets/images/home/main-slider1.png";

function MainCarousel() {
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
      title: "NOMBRE DE PROYECTO",
      description:
        "Descripción del proyecto Descripción del proyecto Descripción",
      imageUrl: carouselPlaceholder,
    },
    {
      title: "NOMBRE DE PROYECTO2",
      description:
        "Descripción del proyecto Descripción del proyecto Descripción",
      imageUrl: carouselPlaceholder,
    },
    {
      title: "NOMBRE DE PROYECTO3",
      description:
        "Descripción del proyecto Descripción del proyecto Descripción",
      imageUrl: carouselPlaceholder,
    },
  ];

  // Define the desired height for the slides dynamically
  const slideHeight = isMobile ? "50vh" : "80vh";

  return (
    <Box
      sx={{ width: "100%", overflow: "hidden", paddingTop: 2 }}
    >
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <Box
            key={index}
            sx={{
              height: slideHeight,
              // Adjust padding or other properties for responsiveness
              padding: isMobile ? "0 20px" : "0 50px",
              boxSizing: "border-box",
            }}
          >
            <CarouselCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default MainCarousel;
