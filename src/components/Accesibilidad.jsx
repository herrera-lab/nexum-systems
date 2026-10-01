import { useEffect, useRef, useState } from 'react'
import { useIdioma } from '../i18n/contexto.js'

const CLAVE = 'nexum-accesibilidad'
const TAMANOS = [100, 115, 130, 145] // porcentaje del tamaño de letra base
const FUENTE_LEGIBLE =
  'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap'

// Cada opción de encendido/apagado agrega una clase en <html> (ver .a11y-* en App.css); sus nombres están en textos.js
const OPCIONES = [
  { clave: 'contraste', clase: 'a11y-contraste' },
  { clave: 'grises', clase: 'a11y-grises' },
  { clave: 'subrayar', clase: 'a11y-subrayar' },
  { clave: 'legible', clase: 'a11y-legible' },
  { clave: 'pausar', clase: 'a11y-pausar' },
]

const INICIAL = { tamano: 0, contraste: false, grises: false, subrayar: false, legible: false, pausar: false }

function leerPreferencias() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE))
    return { ...INICIAL, ...guardado }
  } catch {
    return INICIAL
  }
}

// La fuente para dislexia solo se descarga la primera vez que alguien la activa
function cargarFuenteLegible() {
  if (document.getElementById('fuente-legible')) return
  const link = document.createElement('link')
  link.id = 'fuente-legible'
  link.rel = 'stylesheet'
  link.href = FUENTE_LEGIBLE
  document.head.appendChild(link)
}

function Accesibilidad() {
  const { t } = useIdioma()
  const textos = t.accesibilidad
  const [prefs, setPrefs] = useState(leerPreferencias)
  const [abierto, setAbierto] = useState(false)
  const boton = useRef(null)
  const panel = useRef(null)

  // Aplica las preferencias a toda la página y las guarda
  useEffect(() => {
    const html = document.documentElement
    html.style.fontSize = prefs.tamano ? `${TAMANOS[prefs.tamano]}%` : ''
    OPCIONES.forEach((o) => html.classList.toggle(o.clase, prefs[o.clave]))
    if (prefs.legible) cargarFuenteLegible()
    try {
      localStorage.setItem(CLAVE, JSON.stringify(prefs))
    } catch {
      // Sin acceso a localStorage (modo privado, etc.): las opciones funcionan igual, solo no se recuerdan
    }
  }, [prefs])

  // Al abrir, el foco pasa al panel; Escape o un clic afuera lo cierran
  useEffect(() => {
    if (!abierto) return
    panel.current.querySelector('button').focus()

    const alTeclear = (e) => {
      if (e.key === 'Escape') {
        setAbierto(false)
        boton.current.focus()
      }
    }
    const alClic = (e) => {
      if (!panel.current.contains(e.target) && !boton.current.contains(e.target)) setAbierto(false)
    }
    document.addEventListener('keydown', alTeclear)
    document.addEventListener('mousedown', alClic)
    return () => {
      document.removeEventListener('keydown', alTeclear)
      document.removeEventListener('mousedown', alClic)
    }
  }, [abierto])

  const cambiarTamano = (paso) =>
    setPrefs((p) => ({ ...p, tamano: Math.min(TAMANOS.length - 1, Math.max(0, p.tamano + paso)) }))
  const alternar = (clave) => setPrefs((p) => ({ ...p, [clave]: !p[clave] }))

  return (
    <div className="a11y">
      <button
        ref={boton}
        type="button"
        className="a11y-boton"
        aria-label={textos.abrir}
        aria-expanded={abierto}
        aria-controls="a11y-panel"
        onClick={() => setAbierto(!abierto)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="6.6" r="1.6" fill="currentColor" />
          <path
            d="M6.8 9.4 12 10.4l5.2-1M12 10.4v3.8m0 0-2.6 4.6m2.6-4.6 2.6 4.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        ref={panel}
        id="a11y-panel"
        className="a11y-panel"
        role="dialog"
        aria-labelledby="a11y-titulo"
        hidden={!abierto}
      >
        <div className="a11y-encabezado">
          <h2 id="a11y-titulo">{textos.titulo}</h2>
          <button
            type="button"
            className="a11y-cerrar"
            aria-label={textos.cerrar}
            onClick={() => {
              setAbierto(false)
              boton.current.focus()
            }}
          >
            ✕
          </button>
        </div>

        <div className="a11y-grupo" role="group" aria-labelledby="a11y-tamano">
          <span id="a11y-tamano">{textos.tamano}</span>
          <div className="a11y-tamanos">
            <button
              type="button"
              aria-label={textos.disminuir}
              onClick={() => cambiarTamano(-1)}
              disabled={prefs.tamano === 0}
            >
              A−
            </button>
            <span className="a11y-nivel" aria-live="polite">
              {textos.nivel(prefs.tamano + 1, TAMANOS.length)}
            </span>
            <button
              type="button"
              aria-label={textos.aumentar}
              onClick={() => cambiarTamano(1)}
              disabled={prefs.tamano === TAMANOS.length - 1}
            >
              A+
            </button>
          </div>
        </div>

        <ul className="a11y-opciones">
          {OPCIONES.map((o) => (
            <li key={o.clave}>
              <button
                type="button"
                className="a11y-opcion"
                aria-pressed={prefs[o.clave]}
                onClick={() => alternar(o.clave)}
              >
                <span>{textos.opciones[o.clave]}</span>
                <span className="a11y-interruptor" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>

        <button type="button" className="a11y-restablecer" onClick={() => setPrefs(INICIAL)}>
          {textos.restablecer}
        </button>
      </div>
    </div>
  )
}

export default Accesibilidad
