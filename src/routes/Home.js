import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainCarousel from "../components/MainCarousel/MainCarousel";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import ProjectGrid from "../components/ProjectGrid/ProjectGrid";
import CircularProgress from "@mui/material/CircularProgress";
import projectPlaceholder from "../assets/images/home/experience.png";
import ClientsList from "../components/ClientsList/ClientsList";
import ServicesList from "../components/ServicesList/ServicesList";
//import TestimonyCarousel from "../components/TestimonyCarousel/TestimonyCarousel";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { Fade, Slide } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: ["Barlow", "sans-serif"].join(","),
    },
});

const projectsData = [
    {
        id: 1,
        category: 0,
        image: projectPlaceholder,
        title: "Project 1 Title",
        description: "Description for Project 1",
    },
    {
        id: 2,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
    {
        id: 3,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
    {
        id: 4,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
    {
        id: 5,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
    {
        id: 6,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
    {
        id: 7,
        category: 1,
        image: projectPlaceholder,
        title: "Project 2 Title",
        description: "Description for Project 2",
    },
];

// const testimonials = [
//     {
//         title: "Casa de la Amistad",
//         text: `CONSERMACOM es una empresa que ha colaborado con nuestra institución por más de 15 años. A lo largo de este tiempo, los proyectos asignados se han destacado por su responsabilidad, alta calidad y excelente servicio, sumando siempre su compromiso con nuestra causa.
//   El liderazgo del Ing. Jiménez y su equipo se refleja claramente en el trabajo que desempeñan.
//   Les agradezco, en nombre de las niñas, niños y jóvenes con cáncer, el apoyo que nos brindan.
//   "La vida, en respuesta a lo que damos y compartimos, siempre nos retribuye en abundancia."`,
//         author: "Mónica Peimbert, directora Operativa de Casa de la Amistad para Niños con Cáncer",
//     },
//     {
//         title: "Centro Deportivo Chapultepec",
//         text: `En mi experiencia trabajando con CONSERMACOM, puedo destacar su compromiso inquebrantable con la calidad y la seguridad en cada uno de los proyectos que realizamos. A lo largo de los años, hemos confiado en su expertise para el mantenimiento de nuestros elevadores, siempre con resultados excelentes. Su equipo se caracteriza por su alto nivel de profesionalismo, puntualidad y atención a los detalles, lo que garantiza un funcionamiento óptimo y seguro de nuestros sistemas.`,
//         author: "Ricardo A. Jaimes Betanzos, gerente de inmuebles para Centro Deportivo Chapultepec",
//     },
//     {
//         title: "Abastecimientos Golfo Pacífico",
//         text: `Hemos encontrado en CONSERMACOM un equipo comprometido, flexible y siempre dispuesto a aportar soluciones. Han demostrado ser un proveedor confiable, con soluciones técnicas bien ejecutadas y adaptadas a nuestras necesidades. Cada proyecto ha sido abordado con profesionalismo, cumplimiento en los plazos y una atención clara a los detalles.`,
//         author: "Lic. Homero Torreblanca, director de recursos materiales de Abastecimientos Golfo Pacífico",
//     },
// ];

function Home() {
    const [isLoading, setLoading] = useState(true);

    const [refMainCarousel, inViewMainCarousel] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refExperienceSection, inViewExperienceSection] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [refProjectGrid, inViewProjectGrid] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    // const [refTestimonyCarousel, inViewTestimonyCarousel] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.1,
    // });
    const [refClientsList, inViewClientsList] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refServicesList, inViewServicesList] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <CircularProgress sx={{ color: "#c80000" }} />
            </Box>
        );
    }

    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <div ref={refMainCarousel}>
                <Slide direction="up" in={inViewMainCarousel} timeout={1000}>
                    <div>
                        <MainCarousel />
                    </div>
                </Slide>
            </div>
            <div ref={refExperienceSection}>
                <Slide
                    direction="right"
                    in={inViewExperienceSection}
                    timeout={1000}
                >
                    <div>
                        <ExperienceSection />
                    </div>
                </Slide>
            </div>
            <div ref={refProjectGrid}>
                <Fade in={inViewProjectGrid} timeout={1000}>
                    <div>
                        <ProjectGrid
                            projects={projectsData}
                            tabsAlignment="left"
                        />
                    </div>
                </Fade>
            </div>
            {/* <div ref={refTestimonyCarousel}>
                <Fade in={inViewTestimonyCarousel} timeout={1000}>
                    <div>
                        <TestimonyCarousel testimonials={testimonials} />
                    </div>
                </Fade>
            </div> */}
            <div ref={refClientsList}>
                <Fade in={inViewClientsList} timeout={1000}>
                    <div>
                        <ClientsList />
                    </div>
                </Fade>
            </div>
            <div ref={refServicesList}>
                <Fade in={inViewServicesList} timeout={1000}>
                    <div>
                        <ServicesList />
                    </div>
                </Fade>
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default Home;
