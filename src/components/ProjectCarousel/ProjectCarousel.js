import React from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "../CarouselCard/CarouselCard";
import projects from "../../data/projects.js";

function ProjectCarousel({ projectId }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const project = projects.find((p) => p.id === parseInt(projectId));

  const slides = project
    ? [
        { imageUrl: project.image1 },
        { imageUrl: project.image2 },
      ]
    : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  };

  const slideHeight = isMobile ? "30vh" : "60vh";

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              height: slideHeight,
              padding: isMobile ? "0 25px" : "0 55px",
              boxSizing: "border-box",
            }}
          >
            <CarouselCard imageUrl={slide.imageUrl} />
          </Box>
        ))}
      </Slider>
      <style>
        {`
          .slick-dots {
            position: relative;
            bottom: -5px;
          }
          .slick-dots li button:before {
            font-size: 12px;
          }
        `}
      </style>
    </Box>
  );
}

export default ProjectCarousel;
