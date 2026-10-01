import { Link } from 'react-router-dom'
import Portada from '../components/Portada.jsx'
import Imagen from '../components/Imagen.jsx'
import { useIdioma } from '../i18n/contexto.js'

const imagenesServicios = [
  '/img/servicio-sistemas.jpg',
  '/img/servicio-automatizacion.jpg',
  '/img/servicio-calidad-datos.jpg',
  '/img/servicio-analitica.jpg',
]

function Servicios() {
  const { t } = useIdioma()
  const textos = t.servicios

  return (
    <>
      <Portada imagen="/img/hero-servicios.jpg" titulo={textos.titulo} />

      <section className="seccion seccion-corta">
        <div className="contenedor">
          <p className="intro">{textos.intro}</p>
        </div>
      </section>

      <section className="banda banda-clara">
        <div className="contenedor">
          <h2>{textos.serviciosTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor grilla grilla-4 sin-margen">
          {textos.servicios.map((s, i) => (
            <article className="columna-imagen" key={imagenesServicios[i]}>
              <Imagen src={imagenesServicios[i]} alt={s.titulo} className="icono-servicio" />
              <h3>{s.titulo}</h3>
              <p>{s.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="banda banda-gris">
        <div className="contenedor">
          <h2>{textos.propuestasTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.propuestasIntro}</p>
          <div className="grilla grilla-3">
            {textos.etapas.map((e) => (
              <article className="paso" key={e.titulo}>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banda banda-imagen" style={{ backgroundImage: 'url(/img/fondo-cta-servicios.jpg)' }}>
        <div className="contenedor">
          <h2>{textos.ctaTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor texto-centrado">
          <p className="intro">{textos.ctaTexto}</p>
          <Link to="/contacto" className="boton">{textos.ctaBoton}</Link>
        </div>
      </section>
    </>
  )
}

export default Servicios
