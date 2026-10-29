import { motion } from 'framer-motion'
import { rise } from './motion'

// Icono 3D (Thiings) con sombra suave.
// - Normal: entra con la animación común de la sección y flota levemente (float = desfase; 0 = quieto).
// - inline: va dentro de un titular, a la altura del texto.
// - muted: versión apagada, para lo que se deja atrás (caos, vulnerabilidad).
const Thing = ({ src, alt, className = '', float = 0, muted = false, inline = false }) => {
  if (inline) {
    return <img src={src} alt={alt} draggable={false} className={`inline-block h-[1.35em] w-auto align-[-0.3em] ${className}`} />
  }
  return (
    // el contenedor hereda la variante de entrada; la imagen flota por su cuenta
    <motion.span variants={rise} className="inline-flex">
      <motion.img
        src={src}
        alt={alt}
        draggable={false}
        animate={float ? { y: [0, -7, 0] } : undefined}
        transition={float ? { duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: float } : undefined}
        className={
          'select-none drop-shadow-[0_10px_10px_rgba(27,42,82,0.22)] ' + (muted ? 'opacity-60 saturate-50 ' : '') + className
        }
      />
    </motion.span>
  )
}

export default Thing
