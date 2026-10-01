import { Link } from 'react-router-dom'
import Portada from '../components/Portada.jsx'
import Imagen from '../components/Imagen.jsx'
import { useIdioma } from '../i18n/contexto.js'

// Imagen y enlace de cada proyecto, en el mismo orden que t.proyectos.lista
const proyectos = [{ imagen: '/img/proyecto-ticamarket.png', enlace: '/proyectos/ticamarket' }]

function Proyectos() {
  const { t } = useIdioma()
  const textos = t.proyectos

  return (
    <>
      <Portada imagen="/img/hero-proyectos.jpg" titulo={textos.titulo} />

      <section className="seccion seccion-corta">
        <div className="contenedor">
          <p className="intro">{textos.intro}</p>
        </div>
      </section>

      <section className="seccion">
        {textos.lista.map((p, i) => (
          <div className="contenedor dos-columnas" key={proyectos[i].enlace}>
            <Imagen src={proyectos[i].imagen} alt={p.titulo} className="imagen-columna" />
            <div className="proyecto-info">
              <span className="proyecto-numero">{p.numero}</span>
              <h2>{p.titulo}</h2>
              <p className="justificado">{p.texto}</p>
              <p className="etiquetas">{p.etiquetas.join(' · ')}</p>
              <p className="proyecto-estado">
                <strong>{textos.estado}</strong> {p.estado}
              </p>
              <Link to={proyectos[i].enlace} className="boton">{textos.boton}</Link>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Proyectos
