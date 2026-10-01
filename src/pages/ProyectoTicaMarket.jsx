import Portada from '../components/Portada.jsx'
import Imagen from '../components/Imagen.jsx'
import { useIdioma } from '../i18n/contexto.js'

const imagenesFases = [
  '/img/ticamarket-fase1.png',
  '/img/ticamarket-fase2.png',
  '/img/ticamarket-fase3.png',
  '/img/ticamarket-fase4.png',
]

function ProyectoTicaMarket() {
  const { t } = useIdioma()
  const textos = t.ticamarket

  return (
    <>
      <Portada imagen="/img/hero-ticamarket.png" titulo="TicaMarket" grande />

      <section className="seccion seccion-corta">
        <div className="contenedor texto-centrado">
          <h3 className="subtitulo-proyecto">{textos.subtitulo}</h3>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <Imagen src="/img/ticamarket-desafio.png" alt={textos.desafioImagenAlt} className="imagen-columna" />
          <div>
            <h2>{textos.desafioTitulo}</h2>
            <p className="justificado">{textos.desafioTexto}</p>
          </div>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor dos-columnas">
          <div>
            <h2>{textos.solucionTitulo}</h2>
            {textos.solucionTextos.map((texto) => (
              <p className="justificado" key={texto}>{texto}</p>
            ))}
          </div>
          <Imagen src="/img/ticamarket-solucion.png" alt={textos.solucionImagenAlt} className="imagen-columna" />
        </div>
      </section>

      <section className="banda banda-gris">
        <div className="contenedor">
          <h2>{textos.desarrolloTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.desarrolloIntro}</p>
          <div className="grilla grilla-4">
            {textos.fases.map((f, i) => (
              <article className="columna-imagen" key={imagenesFases[i]}>
                <Imagen src={imagenesFases[i]} alt={f.titulo} className="imagen-cuadrada" />
                <h3>{f.titulo}</h3>
                <p>{f.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banda banda-imagen" style={{ backgroundImage: 'url(/img/fondo-entregables.png)' }}>
        <div className="contenedor">
          <h2>{textos.entregablesTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor">
          <p className="intro">{textos.entregablesIntro}</p>
          <div className="grilla grilla-2 entregables">
            {textos.entregables.map((e) => (
              <article className="entregable" key={e.titulo}>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProyectoTicaMarket
