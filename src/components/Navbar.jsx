import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useIdioma } from '../i18n/contexto.js'

const rutas = ['/', '/nosotros', '/servicios', '/proyectos', '/equipo', '/contacto']

function Navbar() {
  const { t, cambiarIdioma } = useIdioma()
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <header className="navbar">
      <div className="contenedor navbar-contenido">
        <Link to="/" className="logo" onClick={cerrar}>
          <img src="/img/logo.png" alt={t.navbar.logoAlt} className="logo-imagen" />
          <span>Nexum Systems</span>
        </Link>

        <nav className={abierto ? 'menu abierto' : 'menu'}>
          {rutas.map((ruta, i) => (
            <NavLink key={ruta} to={ruta} end={ruta === '/'} onClick={cerrar}>
              {t.navbar.enlaces[i]}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-acciones">
          <button
            type="button"
            className="idioma-boton"
            aria-label={t.navbar.cambiarIdioma}
            title={t.navbar.cambiarIdioma}
            onClick={cambiarIdioma}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            {t.navbar.otroIdioma}
          </button>

          <button
            type="button"
            className={abierto ? 'menu-boton abierto' : 'menu-boton'}
            aria-label={abierto ? t.navbar.cerrarMenu : t.navbar.abrirMenu}
            aria-expanded={abierto}
            onClick={() => setAbierto(!abierto)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
