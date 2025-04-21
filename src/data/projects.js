import banc from '../assets/images/home/banc.jpeg';
import dif from '../assets/images/home/dif.png';
import casa from '../assets/images/home/casa.png';

const projects = [
    {
        id: 1,
        category: 1,
        title: "Club de Banqueros de México A.C.",
        image: banc,
        description: "Desmantelamiento de elevador, preparación para instalación de nuevo elevador, mantenimiento a elevadores.",
    },
    {
        id: 2,
        category: 2,
        title: "Sistema para el Desarrollo Integral de la Familia DIF (CDMX)",
        image: dif,
        description: "Reconstrucción de edificio, remodelación de comedores y aulas, remodelación integral de sede, instalación de gimnasios al aire libre.",
    },
    {
        id: 3,
        category: 3,
        title: "Casa de la Amistad para Niños con Cáncer I.A.P.",
        image: casa,
        description: "Remodelación de habitaciones, proyecto electrónico, rampas de emergencia, mantenimiento integral, suministro de mobiliario, protección civil.",
    },
];

export default projects;
