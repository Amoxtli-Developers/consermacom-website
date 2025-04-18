import React from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CarouselCard from "../CarouselCard/CarouselCard";
import project1 from "../../assets/images/home/banner/1.JPG";
import project2 from "../../assets/images/home/banner/2.jpg";
import project3 from "../../assets/images/home/banner/3.jpg";

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
            title: "Mantenimiento integral de propiedades y equipos",
            description:
                "Cuidado completo de bienes muebles e inmuebles para asegurar su funcionamiento y valor a largo plazo",
            imageUrl: project1,
        },
        {
            title: "Instalación y mantenimiento profesional de elevadores",
            description:
                "Soluciones seguras y eficientes para sistemas de elevación en todo tipo de edificaciones",
            imageUrl: project2,
        },
        {
            title: "Construcción y obra civil de alto estándar",
            description:
                "Ejecución de proyectos constructivos con calidad, cumplimiento y experiencia técnica",
            imageUrl: project3,
        },
    ];

    // Define the desired height for the slides dynamically
    const slideHeight = isMobile ? "50vh" : "80vh";

    return (
        <Box sx={{ width: "100%", overflow: "hidden" }}>
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
