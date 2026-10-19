import { useEffect, useState } from 'react'
import { sections, presenter } from '../data/pitch'

const format = (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0')

// Modo presentador (tecla P): guion de la sección activa + cronómetro de 60 s.
// Se monta solo cuando está activo, así el cronómetro arranca al abrirlo.
const PresenterOverlay = ({ activeIndex }) => {
  const [elapsed, setElapsed] = useState(0)
  const section = sections[activeIndex]
  const over = elapsed > presenter.durationSeconds

  useEffect(() => {
    const id = setInterval(() => setElapsed((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (e.key === 'r' || e.key === 'R') setElapsed(0)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <aside
      aria-label="Modo presentador"
      className="fixed bottom-0 left-0 right-0 z-50 bg-ink text-cream border-t-4 border-coral px-4 md:px-8 py-3 flex flex-col md:flex-row md:items-start gap-3 md:gap-6"
    >
      <div className="flex-1 min-w-0">
        <p className="label !text-[0.65rem] text-sky mb-1">
          Guion · {section.label} ({activeIndex + 1}/{sections.length})
        </p>
        <p className="text-sm md:text-base leading-snug">
          {section.script || '(sin guion para esta sección)'}
        </p>
      </div>
      <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 flex-shrink-0">
        <span
          role="timer"
          aria-label="Cronómetro"
          className={'font-mono text-2xl md:text-3xl font-bold tabular-nums ' + (over ? 'text-red-400' : 'text-cream')}
        >
          {format(elapsed)}
        </span>
        <span className="label !text-[0.6rem] text-sky">
          / {format(presenter.durationSeconds)} · P ocultar · R reiniciar · F pantalla completa
        </span>
      </div>
    </aside>
  )
}

export default PresenterOverlay
