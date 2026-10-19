import { useId } from 'react'

const DotPattern = ({
  color = '#404040', // Color de los puntos
  opacity = 0.3, // Opacidad general
  size = 1, // Radio de los puntos
  spacing = 20, // Espacio entre puntos
  className = '', // Clases extra para posicionamiento
}) => {
  // ids únicos: con varias instancias en la página los ids fijos chocarían
  const uid = useId().replace(/:/g, '')
  const patternId = 'dots-' + uid
  const maskId = 'mask-' + uid
  const gradientId = 'grad-' + uid

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            <circle cx={size} cy={size} r={size} fill={color} />
          </pattern>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id={maskId}>
            <rect width="100%" height="100%" fill={'url(#' + gradientId + ')'} />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={'url(#' + patternId + ')'}
          mask={'url(#' + maskId + ')'}
          style={{ opacity }}
        />
      </svg>
    </div>
  )
}

export default DotPattern
