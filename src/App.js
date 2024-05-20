import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Acordeones from "./Componentes/Acordeones/Acordeones";
import Encabezado from "./Componentes/Encabezado/Encabezado";
import PiePagina from "./Componentes/PiePagina/PiePagina";
import { HashRouter as Router,Routes, Route } from 'react-router-dom';
import EstandarHardware from "./Componentes/Acordeones/PaginasEstandares/EstandarHardware/EstandarHardware";
import EstandarSoftware from "./Componentes/Acordeones/PaginasEstandares/EstandarSoftware/EstandarSoftware";
import EstandarEquiposElectricos
    from "./Componentes/Acordeones/PaginasEstandares/EstandarEquiposElectricos/EstandarEquiposElectricos";
import EstandarRedesInformaticas
    from "./Componentes/Acordeones/PaginasEstandares/EstandarRedesInformaticas/EstandarRedesInformaticas";
import EstandarAccesorios from "./Componentes/Acordeones/PaginasEstandares/EstandarAccesorios/EstandarAccesorios";
import EstandarPerifericos from "./Componentes/Acordeones/PaginasEstandares/EstandarPerifericos/EstandarPerifericos";
import EstandarConsumibles from "./Componentes/Acordeones/PaginasEstandares/EstandarConsumibles/EstandarConsumibles";
import EstandarComponentes from "./Componentes/Acordeones/PaginasEstandares/EstandarComponentes/EstandarComponentes";
import Ducteria from "./Componentes/Acordeones/PaginasEstandares/Ducteria/Ducteria";
import PreguntasFrecuentes from "./Componentes/Acordeones/PaginaPreguntasFrecuentes/PreguntasFrecuentes";
import TramitesDigitales from "./Home/TramitesDigitales/TramitesDigitales";
import jsonData from './tramites.json';
import Contacto from "./Home/Contacto/Contacto";
import Web from "./Componentes/Acordeones/PaginasEstandares/Web/Web";
import Movil from "./Componentes/Acordeones/PaginasEstandares/Movil/Movil";




function App() {
  return (
      <div style={{ backgroundColor: '#eeeeee', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Encabezado/>


          <div style={{ flex: 1 }}>
          <Router>
              <Routes>
                  <Route path="/" element={<Acordeones />} />
                  <Route path="/contacto" element={<Contacto />} />
                  <Route path="/tramites-digitales" element={<TramitesDigitales jsonData={jsonData} />} />
                  <Route path="/dictamenes" element={<Acordeones />} />
                  <Route path="/hardware" element={<EstandarHardware />} />
                  <Route path="/software" element={<EstandarSoftware />} />
                  <Route path="/equipos-electricos" element={<EstandarEquiposElectricos />} />
                  <Route path="/redes-informaticas" element={<EstandarRedesInformaticas />} />
                  <Route path="/accesorios" element={<EstandarAccesorios />} />
                  <Route path="/perifericos" element={<EstandarPerifericos />} />
                  <Route path="/consumibles" element={<EstandarConsumibles />} />
                  <Route path="/componentes" element={<EstandarComponentes />} />
                  <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
                  <Route path="/ducteria" element={<Ducteria />} />
                  <Route path="/web" element={<Web />} />
                  <Route path="/movil" element={<Movil />} />
              </Routes>
          </Router>
          </div>


         <PiePagina/>
      </div>
  );
}

export default App;
