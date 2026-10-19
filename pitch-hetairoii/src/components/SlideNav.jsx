import GoldenCircle from './GoldenCircle'
import { sections } from '../data/pitch'

// Sección a la que lleva cada anillo del minimapa (0 Por qué, 1 Cómo, 2 Qué)
const RING_TARGET = ['por-que', 'como', 'que']

const SlideNav = ({ activeIndex, goTo }) => {
  const level = sections[activeIndex].circleLevel

  return (
    <nav
      aria-label="Navegación de la presentación"
      className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4"
    >
      <GoldenCircle
        level={level}
        size={64}
        reveal="always"
        showLabels={false}
        className="hidden md:block"
        onSelect={(ring) => goTo(sections.findIndex((s) => s.id === RING_TARGET[ring]))}
      />
      <ul className="flex flex-col gap-3">
        {sections.map((section, i) => (
          <li key={section.id}>
            <button
              type="button"
              onClick={() => goTo(i)}
              aria-label={'Ir a ' + section.label}
              aria-current={i === activeIndex ? 'step' : undefined}
              title={section.label}
              className="group flex items-center justify-center w-6 h-6 cursor-pointer"
            >
              <span
                className={
                  'block rounded-full border-2 border-ink transition-all duration-300 ' +
                  (i === activeIndex ? 'w-3.5 h-3.5 bg-coral' : 'w-2.5 h-2.5 bg-paper group-hover:bg-ink')
                }
              />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SlideNav
