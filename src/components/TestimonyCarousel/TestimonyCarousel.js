import React from "react";
import Slider from "react-slick";
import TestimonyCard from "../TestimonyCard/TestimonyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

function TestimonyCarousel({ testimonials }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Adjust for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust for smaller devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ overflow: "hidden", paddingBottom: 5}}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonyCard
            key={index}
            testimonial={testimonial.text}
            name={testimonial.name}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default TestimonyCarousel;
