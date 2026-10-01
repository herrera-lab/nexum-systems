import { Link } from 'react-router-dom'
import Portada from '../components/Portada.jsx'
import Imagen from '../components/Imagen.jsx'
import { useIdioma } from '../i18n/contexto.js'

const imagenesSoluciones = [
  '/img/solucion-arquitectura.png',
  '/img/solucion-automatizacion.png',
  '/img/solucion-analitica.png',
]

function Inicio() {
  const { t } = useIdioma()
  const textos = t.inicio

  return (
    <>
      <Portada imagen="/img/hero-inicio.png" titulo="Nexum Systems" grande />

      <section className="seccion seccion-corta">
        <div className="contenedor texto-centrado">
          <h2 className="lema">{textos.lema}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <Imagen src="/img/inicio-transformacion.jpg" alt={textos.transformacion.imagenAlt} className="imagen-columna" />
          <div>
            <h2>{textos.transformacion.titulo}</h2>
            <p className="justificado">{textos.transformacion.texto}</p>
          </div>
        </div>
      </section>

      <section className="banda banda-oscura">
        <div className="contenedor">
          <h2>{textos.solucionesTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.solucionesIntro}</p>
          <div className="grilla grilla-3">
            {textos.soluciones.map((s, i) => (
              <article className="columna-imagen" key={imagenesSoluciones[i]}>
                <Imagen src={imagenesSoluciones[i]} alt={s.titulo} className="imagen-cuadrada" />
                <h3>{s.titulo}</h3>
                <p>{s.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banda banda-clara">
        <div className="contenedor">
          <h2>{textos.pasosTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.pasosIntro}</p>
          <div className="grilla grilla-4">
            {textos.pasos.map((p, i) => {
              const numero = String(i + 1).padStart(2, '0')
              return (
                <article className="paso" key={numero}>
                  <span className="paso-numero">{numero}</span>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="banda banda-gris">
        <div className="contenedor">
          <h2>{textos.ctaTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor texto-centrado">
          <p className="intro">{textos.ctaTexto}</p>
          <Link to="/servicios" className="boton">{textos.ctaBoton}</Link>
        </div>
      </section>
    </>
  )
}

export default Inicio
