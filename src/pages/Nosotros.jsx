import Portada from '../components/Portada.jsx'
import Imagen from '../components/Imagen.jsx'
import { useIdioma } from '../i18n/contexto.js'

function Nosotros() {
  const { t } = useIdioma()
  const textos = t.nosotros

  return (
    <>
      <Portada imagen="/img/hero-nosotros.png" titulo={textos.titulo} subtitulo={textos.lema} />

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <div>
            <h2>{textos.procesosTitulo}</h2>
            {textos.procesosTextos.map((texto) => (
              <p className="justificado" key={texto}>{texto}</p>
            ))}
          </div>
          <Imagen src="/img/nosotros-procesos.png" alt={textos.procesosImagenAlt} className="imagen-columna" />
        </div>
      </section>

      <section className="banda banda-gris">
        <div className="contenedor">
          <h2>{textos.misionVisionTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor grilla grilla-2 sin-margen">
          <article className="columna-imagen">
            <Imagen src="/img/mision.png" alt={textos.mision.titulo} className="imagen-ancha" />
            <h3>{textos.mision.titulo}</h3>
            <p>{textos.mision.texto}</p>
          </article>
          <article className="columna-imagen">
            <Imagen src="/img/vision.png" alt={textos.vision.titulo} className="imagen-ancha" />
            <h3>{textos.vision.titulo}</h3>
            <p>{textos.vision.texto}</p>
          </article>
        </div>
      </section>

      <section className="banda banda-imagen" style={{ backgroundImage: 'url(/img/fondo-propuesta-valor.jpg)' }}>
        <div className="contenedor">
          <h2>{textos.propuestaTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.propuestaIntro}</p>
          <div className="grilla grilla-4">
            {textos.pilares.map((p) => (
              <article className="paso" key={p.titulo}>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banda banda-oscura">
        <div className="contenedor">
          <h2>{textos.enfoqueTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor angosto">
          {textos.enfoqueTextos.map((texto) => (
            <p className="justificado" key={texto}>{texto}</p>
          ))}
        </div>
      </section>
    </>
  )
}

export default Nosotros
