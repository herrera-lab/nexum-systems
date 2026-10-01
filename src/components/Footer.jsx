import { Link } from 'react-router-dom'
import { useIdioma } from '../i18n/contexto.js'

const anio = new Date().getFullYear()
const rutas = ['/servicios', '/proyectos', '/contacto']

function Footer() {
  const { t } = useIdioma()

  return (
    <footer className="footer">
      <div className="contenedor footer-contenido">
        <div>
          <img src="/img/logo.png" alt="Nexum Systems" className="footer-logo" />
          <p className="footer-lema">{t.footer.lema}</p>
        </div>
        <div className="footer-datos">
          <p>
            <a href="mailto:contacto.nexumsystems@gmail.com">contacto.nexumsystems@gmail.com</a>
          </p>
          <p>{t.footer.ubicacion}</p>
        </div>
        <nav className="footer-enlaces">
          {rutas.map((ruta, i) => (
            <Link key={ruta} to={ruta}>
              {t.footer.enlaces[i]}
            </Link>
          ))}
        </nav>
      </div>
      <p className="footer-copy">© {anio} Nexum Systems</p>
    </footer>
  )
}

export default Footer
