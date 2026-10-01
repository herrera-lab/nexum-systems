import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Accesibilidad from './components/Accesibilidad.jsx'
import Inicio from './pages/Inicio.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx'
import Proyectos from './pages/Proyectos.jsx'
import ProyectoTicaMarket from './pages/ProyectoTicaMarket.jsx'
import Equipo from './pages/Equipo.jsx'
import Contacto from './pages/Contacto.jsx'
import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/proyectos/ticamarket" element={<ProyectoTicaMarket />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
      <Accesibilidad />
    </>
  )
}

export default App
