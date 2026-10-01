import { useEffect, useRef } from 'react'
import Portada from '../components/Portada.jsx'
import { useIdioma } from '../i18n/contexto.js'

// Ícono de línea de cada área; el color de acento está en .area-* (App.css) y el nombre en textos.js
const areas = {
  web: {
    icono: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
  },
  identidad: {
    icono: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </>
    ),
  },
  implementacion: {
    icono: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </>
    ),
  },
}

const integrantes = [
  { nombre: 'Yirlanya Vega Sibaja', area: 'web' },
  { nombre: 'Juan Morales Nuñez', area: 'identidad' },
  { nombre: 'Fabricio Montoya Rodriguez', area: 'implementacion' },
  { nombre: 'Dailyn Gamboa Azofeifa', area: 'implementacion' },
  { nombre: 'Ashly Rojas Durán', area: 'web' },
  { nombre: 'Hanie Rojas Alvarado', area: 'identidad' },
]

// Muestra con una animación cada elemento .revelar cuando entra en pantalla
function useRevelar() {
  const ref = useRef(null)

  useEffect(() => {
    const elementos = ref.current.querySelectorAll('.revelar')
    if (!('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.classList.add('visible'))
      return
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])

  return ref
}

function Equipo() {
  const { t } = useIdioma()
  const textos = t.equipo
  const grilla = useRevelar()

  return (
    <>
      <Portada imagen="/img/hero-equipo.png" titulo={textos.titulo} />

      <section className="seccion seccion-corta">
        <div className="contenedor">
          <p className="intro">{textos.intro}</p>
        </div>
      </section>

      <section className="banda banda-gris">
        <div className="contenedor">
          <h2>{textos.equipoTitulo}</h2>
        </div>
      </section>

      <section className="seccion">
        <ul className="contenedor grilla grilla-3 sin-margen lista-equipo" ref={grilla}>
          {integrantes.map((i, indice) => {
            const icono = areas[i.area].icono
            return (
              <li
                className={`tarjeta-equipo revelar area-${i.area}`}
                style={{ '--retraso': `${(indice % 3) * 90}ms` }}
                key={i.nombre}
              >
                <span className="equipo-icono" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icono}
                  </svg>
                </span>
                <h3>{i.nombre}</h3>
                <span className="equipo-rol">{textos.areas[i.area]}</span>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default Equipo
