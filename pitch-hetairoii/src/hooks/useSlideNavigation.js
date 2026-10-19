import { useCallback, useEffect, useRef, useState } from 'react'

const NEXT_KEYS = ['ArrowDown', 'PageDown']
const PREV_KEYS = ['ArrowUp', 'PageUp']

// Navegación tipo presentación sobre un contenedor con scroll-snap vertical.
// ids: ids de cada <section> (array estable, definido fuera del componente).
export function useSlideNavigation(ids) {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const goTo = useCallback(
    (index) => {
      const i = Math.max(0, Math.min(ids.length - 1, index))
      document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    [ids],
  )

  // Índice activo según la sección visible
  useEffect(() => {
    const root = containerRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = ids.indexOf(entry.target.id)
            if (i >= 0) setActiveIndex(i)
          }
        })
      },
      { root, threshold: 0.6 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])

  // Si la URL trae un hash, abrir en esa diapositiva
  useEffect(() => {
    const initial = ids.indexOf(window.location.hash.slice(1))
    if (initial > 0) document.getElementById(ids[initial])?.scrollIntoView({ block: 'start' })
  }, [ids])

  // Mantener el hash sincronizado con la diapositiva activa
  useEffect(() => {
    const hash = '#' + ids[activeIndex]
    if (window.location.hash !== hash) window.history.replaceState(null, '', hash)
  }, [activeIndex, ids])

  // Teclado (compatible con presentadores inalámbricos: PageUp / PageDown)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      const tag = e.target && e.target.tagName
      const onControl = tag === 'A' || tag === 'BUTTON' || tag === 'INPUT'
      let target = null
      if (NEXT_KEYS.includes(e.key)) target = activeIndex + 1
      else if (PREV_KEYS.includes(e.key)) target = activeIndex - 1
      else if (e.key === ' ' && !onControl) target = activeIndex + (e.shiftKey ? -1 : 1)
      else if (e.key === 'Home') target = 0
      else if (e.key === 'End') target = ids.length - 1
      if (target === null) return
      e.preventDefault()
      goTo(target)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex, goTo, ids])

  return { containerRef, activeIndex, goTo }
}
