// components/ClientsCarousel.jsx
import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";

// logo imports (adjust paths as needed)
import AbastecimientosGolfoPacifico from "../../assets/images/home/clients/1.jpg";
import AsociacionBancosMexico from "../../assets/images/home/clients/2.jpg";
import CamaraDiputados from "../../assets/images/home/clients/3.jpg";
import Capufe from "../../assets/images/home/clients/4.jpg";
import Cardiologia from "../../assets/images/home/clients/5.jpg";
import CasaDeLaAmistad from "../../assets/images/home/clients/6.jpg";
import Cdch from "../../assets/images/home/clients/7.jpg";
import Cinepolis from "../../assets/images/home/clients/8.jpg";
import ClubDeBanqueMexico from "../../assets/images/home/clients/9.jpg";
import Conagua from "../../assets/images/home/clients/10.jpg";
import Conavi from "../../assets/images/home/clients/11.jpg";
import Dif from "../../assets/images/home/clients/12.jpg";
import EscuelaPerrosGuia from "../../assets/images/home/clients/13.jpg";
import Indaabin from "../../assets/images/home/clients/14.jpg";
import Inmegen from "../../assets/images/home/clients/15.jpg";
import Ipn from "../../assets/images/home/clients/16.jpg";
import Profeco from "../../assets/images/home/clients/17.jpg";
import Sedatu from "../../assets/images/home/clients/18.jpg";
import Sep from "../../assets/images/home/clients/19.jpg";
import Inai from "../../assets/images/home/clients/20.jpeg";

const clientLogos = [
    {
        src: AbastecimientosGolfoPacifico,
        alt: "Abastecimientos Golfo Pacífico",
    },
    { src: AsociacionBancosMexico, alt: "Asociación de Bancos de México" },
    { src: CamaraDiputados, alt: "Cámara de Diputados" },
    { src: Capufe, alt: "CAPUFE" },
    { src: Cardiologia, alt: "Instituto de Cardiología" },
    { src: CasaDeLaAmistad, alt: "Casa de la Amistad" },
    { src: Cdch, alt: "CDCH" },
    { src: Cinepolis, alt: "Cinépolis" },
    { src: ClubDeBanqueMexico, alt: "Club de Banqueros de México" },
    { src: Conagua, alt: "CONAGUA" },
    { src: Conavi, alt: "CONAVI" },
    { src: Dif, alt: "DIF" },
    {
        src: EscuelaPerrosGuia,
        alt: "Escuela para Entrenamiento de Perros Guía",
    },
    { src: Indaabin, alt: "INDAABIN" },
    { src: Inmegen, alt: "INMEGEN" },
    { src: Ipn, alt: "IPN" },
    { src: Profeco, alt: "PROFECO" },
    { src: Sedatu, alt: "SEDATU" },
    { src: Sep, alt: "SEP" },
    {src:Inai, alt: "INAI"},
];

export function ClientsCarousel() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box sx={{ overflow: "visible", py: { xs: 2, sm: 4, md: 6 } }}>
            <Swiper
                modules={[Autoplay]}
                loop
                speed={600}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={5}
                spaceBetween={24}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    600: { slidesPerView: 3 },
                    960: { slidesPerView: 5 },
                }}
            >
                {clientLogos.map((logo, idx) => (
                    <SwiperSlide key={idx}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: isMobile ? 40 : 80,
                            }}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                style={{
                                    maxHeight: "100%",
                                    maxWidth: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default ClientsCarousel;
