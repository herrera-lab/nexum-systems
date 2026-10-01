import { useState } from 'react'

// Muestra la imagen; si no se puede cargar, deja un espacio gris reservado
function Imagen({ src, alt, className = '' }) {
  const [fallo, setFallo] = useState(false)

  if (fallo) {
    return <div className={`imagen-vacia ${className}`} role="img" aria-label={alt} />
  }

  return <img src={src} alt={alt} className={className} loading="lazy" onError={() => setFallo(true)} />
}

export default Imagen
