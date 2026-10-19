import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Anillos de adentro hacia afuera: 0 = Por qué, 1 = Cómo, 2 = Qué.
// Los colores salen de variables CSS (--gc-*) para poder re-tematizarlo (p. ej. sobre la pantalla del monitor).
const RINGS = [
  { key: 'why', label: 'Por qué', r: 62, fill: 0.95, textY: 207, color: 'var(--gc-why, #c4472a)' },
  { key: 'how', label: 'Cómo', r: 126, fill: 0.35, textY: 100, color: 'var(--gc-how, #1f6f7e)' },
  { key: 'what', label: 'Qué', r: 190, fill: 0.3, textY: 30, color: 'var(--gc-what, #6aa6c8)' },
]

// level: cuántos anillos están llenos (se llenan del centro hacia afuera).
// reveal: 'view' espera a que el círculo sea visible; 'always' lo muestra de inmediato.
// onSelect(ringIndex): vuelve cada anillo un botón (minimapa de navegación).
const GoldenCircle = ({ level = 0, size = 360, reveal = 'view', onSelect, showLabels = true, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5 })
  const visible = reveal === 'always' || inView
  const filled = visible ? level : 0

  // Se dibuja de afuera hacia adentro para que los discos internos queden encima
  const ordered = RINGS.map((ring, index) => ({ ...ring, index })).reverse()

  return (
    <svg
      ref={ref}
      viewBox="0 0 400 400"
      width={size}
      height={size}
      className={className}
      role={onSelect ? 'group' : 'img'}
      aria-label={'Golden Circle: Por qué, Cómo y Qué' + (level ? ' (nivel ' + level + ' de 3)' : '')}
    >
      {ordered.map((ring) => {
        const isFilled = ring.index < filled
        const isCurrent = ring.index === filled - 1
        const buttonProps = onSelect
          ? {
              role: 'button',
              tabIndex: 0,
              'aria-label': 'Ir a ' + ring.label,
              onClick: () => onSelect(ring.index),
              onKeyDown: (e) => {
                if (e.key === 'Enter') onSelect(ring.index)
              },
              style: { cursor: 'pointer' },
            }
          : {}
        return (
          <g key={ring.key} {...buttonProps}>
            <motion.circle
              cx="200"
              cy="200"
              r={ring.r}
              strokeWidth={isCurrent ? 6 : 3}
              style={{ fill: ring.color, stroke: 'var(--gc-line, #1b2a52)' }}
              initial={{ fillOpacity: 0 }}
              animate={{
                fillOpacity: isFilled ? ring.fill : 0,
                strokeOpacity: isFilled ? 1 : 0.45,
              }}
              transition={{ duration: 0.6, delay: isFilled ? ring.index * 0.35 : 0 }}
            />
            {showLabels && (
              <text
                x="200"
                y={ring.textY}
                textAnchor="middle"
                fontWeight="700"
                fontSize={ring.key === 'why' ? 26 : 22}
                aria-hidden="true"
                style={{
                  pointerEvents: 'none',
                  fontFamily: "'Playfair Display Variable', Georgia, serif",
                  fontStyle: 'italic',
                  fill: isFilled && ring.key === 'why' ? '#f2efe3' : 'var(--gc-text, #1b2a52)',
                }}
              >
                {ring.label}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

export default GoldenCircle
