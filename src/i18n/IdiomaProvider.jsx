import { useEffect, useState } from 'react'
import { IdiomaContexto } from './contexto.js'
import textos from './textos.js'

const CLAVE = 'nexum-idioma'

function leerIdioma() {
  try {
    const guardado = localStorage.getItem(CLAVE)
    return guardado === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(leerIdioma)

  // Guarda la elección y avisa al navegador y lectores de pantalla del idioma de la página
  useEffect(() => {
    document.documentElement.lang = idioma
    try {
      localStorage.setItem(CLAVE, idioma)
    } catch {
      // Sin localStorage el idioma cambia igual, solo no se recuerda al recargar
    }
  }, [idioma])

  const cambiarIdioma = () => setIdioma((actual) => (actual === 'es' ? 'en' : 'es'))

  return (
    <IdiomaContexto.Provider value={{ idioma, cambiarIdioma, t: textos[idioma] }}>
      {children}
    </IdiomaContexto.Provider>
  )
}

export default IdiomaProvider
