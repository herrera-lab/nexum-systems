// Portada con imagen de fondo, como las de cada página del sitio original
function Portada({ imagen, titulo, subtitulo, grande = false }) {
  return (
    <section
      className={grande ? 'portada portada-grande' : 'portada'}
      style={{ backgroundImage: `url(${imagen})` }}
    >
      <div className="contenedor">
        <h1>{titulo}</h1>
        {subtitulo && <p>{subtitulo}</p>}
      </div>
    </section>
  )
}

export default Portada
