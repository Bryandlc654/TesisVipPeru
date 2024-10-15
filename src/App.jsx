import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio/Inicio';
import Nosotros from './pages/SobreNosotros/Nosotros';
import Contacto from './pages/Contacto/Contacto';
import Servicios from './pages/Servicios/Servicios';
import Blog from './pages/Blog/Blog';
import Pagos from './pages/Pagos/Pagos';
import Carreras from './pages/Carreras/Carreras';
import Testimonios from './pages/Testomonios/Testimonios';
import ComoElegirTemaTesis from './pages/Blog/Post/Post1';
import MarcoTeorico from './pages/Blog/Post/Post2';
import TesisUniversitaria from './pages/Blog/Post/Post3';
import Conclusiones from './pages/Blog/Post/Post4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Pagos" element={<Pagos />} />
        <Route path="/Carreras" element={<Carreras />} />
        <Route path="/Testimonios" element={<Testimonios />} />
        <Route path="/ComoElegirTemaTesis" element={<ComoElegirTemaTesis />} />
        <Route path="/Marco-Teorico" element={<MarcoTeorico />} />
        <Route path="/Tesis-Universitaria" element={<TesisUniversitaria />} />
        <Route path="/Conclusiones" element={<Conclusiones />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
