import { createContext, useContext } from 'react'

export const IdiomaContexto = createContext(null)

// Devuelve { idioma, cambiarIdioma, t }, donde t son los textos del idioma actual
export function useIdioma() {
  return useContext(IdiomaContexto)
}
