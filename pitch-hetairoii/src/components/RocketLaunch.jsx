import { useEffect, useMemo, useRef, useState } from 'react'
import { animate, motion, useInView, useMotionValue } from 'framer-motion'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import rocketIcon from '../assets/icons/rocket.webp'

const ANGLE = (-38 * Math.PI) / 180 // dirección final del cohete: diagonal hacia arriba a la derecha
const ASPECT = 269 / 492 // ancho / alto del icono (ya recortado)
const BASE_ROTATION = 90 // el icono apunta hacia arriba (−90°): se suma para alinearlo con la tangente

// Trayectoria igual en escritorio y móvil: una curva que sube desde abajo en diagonal.
// Termina en el lado DERECHO, por encima de la primera fila de tarjetas, con solo la llama (base del icono)
// asomando sobre su borde superior. anchor = { right, top } de la lista, relativo a la capa.
function buildLayout(w, h, anchor) {
  const a = anchor ?? { right: 0.8 * w, top: 0.3 * h }
  const scale = Math.max(0.6, Math.min(1.15, w / 1560))
  const iconH = 130 * scale
  const dx = Math.cos(ANGLE)
  const dy = Math.sin(ANGLE)
  // la base del icono (la llama) cae 8 px dentro del borde superior de las tarjetas; el cuerpo queda junto al borde derecho
  const tipX = a.right - 16 - 1.124 * iconH
  const tipY = a.top + 8
  const xe = tipX + (iconH / 2) * dx
  const ye = tipY + (iconH / 2) * dy

  const x0 = Math.max(20, xe - 0.2 * w)
  const y0 = h + 0.08 * h
  const reach = 0.22 * h
  return {
    d:
      'M ' + x0 + ' ' + y0 +
      ' C ' + x0 + ' ' + (ye + 0.62 * (y0 - ye)) + ', ' + (xe - reach * dx) + ' ' + (ye - reach * dy) + ', ' + xe + ' ' + ye,
    iconH,
    iconW: iconH * ASPECT,
  }
}

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

  // Mide la capa y la posición de la lista (se actualiza al cambiar el tamaño)
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

  // Posiciona y orienta el icono sobre la trayectoria según el progreso
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
      rocket.setAttribute('transform', 'translate(' + p.x + ' ' + p.y + ') rotate(' + (angle + BASE_ROTATION) + ')')
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
        {/* vibración leve de propulsión una vez en su sitio */}
        <motion.g
          animate={{ y: [0, -4, 0, -2, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <image
            href={rocketIcon}
            x={-layout.iconW / 2}
            y={-layout.iconH / 2}
            width={layout.iconW}
            height={layout.iconH}
            style={{ filter: 'drop-shadow(0 8px 8px rgba(27,42,82,0.28))' }}
          />
        </motion.g>
      </g>
    </svg>
  )
}

export default RocketLaunch
