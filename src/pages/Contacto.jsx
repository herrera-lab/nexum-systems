import Portada from '../components/Portada.jsx'
import { useIdioma } from '../i18n/contexto.js'

const FORMULARIO =
  'https://docs.google.com/forms/d/e/1FAIpQLScTsW6SYRN8mV4_3-qN-NKAcqLNLXwcch-5-s5zWTuDE6Rpxw/viewform?embedded=true'

function Contacto() {
  const { t } = useIdioma()
  const textos = t.contacto

  return (
    <>
      <Portada imagen="/img/hero-contacto.png" titulo={textos.titulo} />

      <section className="seccion seccion-corta">
        <div className="contenedor">
          <p className="intro">{textos.intro}</p>
        </div>
      </section>

      <section className="banda banda-clara">
        <div className="contenedor">
          <h2>{textos.hablemos}</h2>
        </div>
      </section>

      <section className="seccion">
        <div className="contenedor contacto">
          <aside className="contacto-info">
            <h2>Nexum Systems</h2>
            <h3>{textos.descripcion}</h3>
            <p>
              <strong>{textos.correo}</strong>{' '}
              <a href="mailto:contacto.nexumsystems@gmail.com">contacto.nexumsystems@gmail.com</a>
            </p>
            <p>
              <strong>{textos.ubicacionTitulo}</strong> {textos.ubicacion}
            </p>
          </aside>

          <div className="contacto-formulario">
            <h3>{textos.ayudarte}</h3>
            {textos.formularioAviso && <p className="formulario-aviso">{textos.formularioAviso}</p>}
            <iframe src={FORMULARIO} title={textos.formularioTitulo} loading="lazy">
              {textos.cargando}
            </iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
