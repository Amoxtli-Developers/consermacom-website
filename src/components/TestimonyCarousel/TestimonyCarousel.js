// components/TestimonyCarousel.jsx
import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { TestimonyCard } from "../TestimonyCard/TestimonyCard";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export function TestimonyCarousel({ testimonials }) {
    return (
        <Box sx={{ overflow: "visible", py: { xs: 2, sm: 4, md: 6 } }}>
            <Swiper
                modules={[Autoplay, Pagination]}
                loop
                speed={600}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                slidesPerView={3}
                spaceBetween={24}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 2 },
                    960: { slidesPerView: 3 },
                }}
            >
                {testimonials.map((t, idx) => (
                    <SwiperSlide key={idx}>
                        {/* Ensure each slide stretches to full height */}
                        <Box sx={{ height: "100%" }}>
                            <TestimonyCard
                                title={t.title}
                                text={t.text}
                                author={t.author}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default TestimonyCarousel;
