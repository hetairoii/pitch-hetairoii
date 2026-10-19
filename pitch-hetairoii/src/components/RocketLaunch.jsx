import { useEffect, useMemo, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionValue } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

const INK = '#1b2a52'
const ANGLE = (-38 * Math.PI) / 180 // dirección final del cohete: diagonal hacia arriba a la derecha
const TAIL = 118 // largo de la llama (coordenadas locales del cohete)

// Trayectoria igual en escritorio y móvil: una curva que sube desde abajo en diagonal.
// Termina en el lado DERECHO, por encima de la primera fila de tarjetas, con solo la llama asomando
// sobre su borde superior. anchor = { right, top } de la lista, relativo a la capa.
function buildLayout(w, h, anchor) {
  const a = anchor ?? { right: 0.8 * w, top: 0.3 * h }
  const scale = Math.max(0.6, Math.min(1.15, w / 1560))
  const dx = Math.cos(ANGLE)
  const dy = Math.sin(ANGLE)
  // la punta de la llama cae 22 px dentro del borde superior de la tarjeta; el cuerpo queda junto al borde derecho
  const tipX = a.right - 16 - 155 * scale
  const tipY = a.top + 22
  const xe = tipX + TAIL * scale * dx
  const ye = tipY + TAIL * scale * dy

  const x0 = Math.max(20, xe - 0.2 * w)
  const y0 = h + 0.08 * h
  const reach = 0.22 * h
  return {
    d:
      'M ' + x0 + ' ' + y0 +
      ' C ' + x0 + ' ' + (ye + 0.62 * (y0 - ye)) + ', ' + (xe - reach * dx) + ' ' + (ye - reach * dy) + ', ' + xe + ' ' + ye,
    scale,
  }
}

// Cohete en coordenadas locales: apunta hacia +x, centrado en el origen.
const Rocket = () => (
  <g strokeLinejoin="round" strokeLinecap="round">
    {/* llama */}
    <motion.g
      style={{ transformBox: 'fill-box', transformOrigin: '100% 50%' }}
      animate={{ scaleX: [1, 1.3, 0.85, 1.2, 1] }}
      transition={{ duration: 0.55, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d="M-52 -10 C-80 -17 -96 -5 -118 0 C-96 5 -80 17 -52 10 Z" fill="#c4472a" stroke={INK} strokeWidth="3" />
      <path d="M-54 -5 C-70 -8 -80 -3 -92 0 C-80 3 -70 8 -54 5 Z" fill="#e8a33d" />
    </motion.g>
    {/* aletas */}
    <path d="M-34 -22 L-56 -46 L-18 -28 Z" fill="#c4472a" stroke={INK} strokeWidth="3.5" />
    <path d="M-34 22 L-56 46 L-18 28 Z" fill="#c4472a" stroke={INK} strokeWidth="3.5" />
    {/* tobera */}
    <rect x="-58" y="-11" width="14" height="22" rx="3" fill="#46557a" stroke={INK} strokeWidth="3" />
    {/* cuerpo */}
    <path d="M-46 -21 C-18 -32 32 -31 66 0 C32 31 -18 32 -46 21 Z" fill="#f2efe3" stroke={INK} strokeWidth="3.5" />
    {/* punta */}
    <path d="M36 -23 C46 -17 56 -9 66 0 C56 9 46 17 36 23 C42 10 42 -10 36 -23 Z" fill="#c4472a" stroke={INK} strokeWidth="3.5" />
    {/* franja y ventana */}
    <path d="M-22 -26 C-26 -10 -26 10 -22 26" fill="none" stroke={INK} strokeWidth="3" />
    <circle cx="8" cy="0" r="12" fill="#1f6f7e" stroke={INK} strokeWidth="3.5" />
    <circle cx="4" cy="-4" r="4" fill="#6aa6c8" stroke="none" />
  </g>
)

// Capa a pantalla completa por DELANTE del contenido (no bloquea clics), sin estela.
// anchorRef: lista de tarjetas; su borde superior y derecho marcan dónde termina el cohete.
const RocketLaunch = ({ anchorRef }) => {
  const reduced = usePrefersReducedMotion()
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const rocketRef = useRef(null)
  const progress = useMotionValue(0)
  const inView = useInView(svgRef, { amount: 0.5 })
  const [size, setSize] = useState({ w: 1600, h: 900, anchor: null })

  // Mide la capa y la posición de la primera tarjeta (se actualiza al cambiar el tamaño)
  useEffect(() => {
    const el = svgRef.current
    if (!el) return
    const measure = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (!w || !h) return
      const list = anchorRef && anchorRef.current
      let anchor = null
      if (list) {
        // se mide la lista (no la tarjeta): la tarjeta se desplaza al entrar y falsearía la posición
        const c = list.getBoundingClientRect()
        const l = el.getBoundingClientRect()
        anchor = { right: Math.round(c.right - l.left), top: Math.round(c.top - l.top) }
      }
      setSize((prev) => {
        const same =
          prev.w === w &&
          prev.h === h &&
          ((!prev.anchor && !anchor) ||
            (prev.anchor && anchor && prev.anchor.right === anchor.right && prev.anchor.top === anchor.top))
        return same ? prev : { w, h, anchor }
      })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    if (anchorRef && anchorRef.current) observer.observe(anchorRef.current)
    return () => observer.disconnect()
  }, [anchorRef])

  const layout = useMemo(() => buildLayout(size.w, size.h, size.anchor), [size])

  // Posiciona y orienta el cohete sobre la trayectoria según el progreso
  useEffect(() => {
    const path = pathRef.current
    const rocket = rocketRef.current
    if (!path || !rocket) return
    const total = path.getTotalLength()
    const place = (v) => {
      const len = Math.min(total, Math.max(0.5, v * total))
      const p = path.getPointAtLength(len)
      const before = path.getPointAtLength(Math.max(0, len - 1))
      const after = path.getPointAtLength(Math.min(total, len + 1))
      const angle = (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI
      rocket.setAttribute(
        'transform',
        'translate(' + p.x + ' ' + p.y + ') rotate(' + angle + ') scale(' + layout.scale + ')',
      )
      rocket.style.opacity = v > 0.005 ? 1 : 0
    }
    place(progress.get())
    return progress.on('change', place)
  }, [progress, layout])

  // Despegue al entrar en pantalla; se reinicia al salir para repetirse
  useEffect(() => {
    if (reduced) {
      progress.set(1)
      return
    }
    if (!inView) {
      progress.set(0)
      return
    }
    const controls = animate(progress, 1, { duration: 2.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] })
    return () => controls.stop()
  }, [inView, reduced, progress])

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      viewBox={'0 0 ' + size.w + ' ' + size.h}
      className="pointer-events-none absolute inset-0 z-30 h-full w-full"
    >
      {/* trayectoria de medición (invisible): no deja estela */}
      <path ref={pathRef} d={layout.d} fill="none" stroke="none" />
      <g ref={rocketRef} style={{ opacity: 0 }}>
        <Rocket />
      </g>
    </svg>
  )
}

export default RocketLaunch
