import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Nosotros from "./routes/Nosotros";
import Proyectos from "./routes/Proyectos";
import DetallesProyecto from "./routes/DetallesProyecto";
import Contacto from "./routes/Contacto";
import Servicios from "./routes/Servicios";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/detalles-proyecto/:id" element={<DetallesProyecto />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
