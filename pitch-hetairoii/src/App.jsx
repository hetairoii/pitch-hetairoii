import { useCallback, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { FiMaximize, FiMinimize } from 'react-icons/fi'
import ProgressBar from './components/ProgressBar'
import TopBar from './components/TopBar'
import SlideNav from './components/SlideNav'
import PresenterOverlay from './components/PresenterOverlay'
import Intro from './components/sections/Intro'
import Why from './components/sections/Why'
import How from './components/sections/How'
import What from './components/sections/What'
import Value from './components/sections/Value'
import Cta from './components/sections/Cta'
import { useSlideNavigation } from './hooks/useSlideNavigation'
import { sections } from './data/pitch'

const IDS = sections.map((s) => s.id)

function App() {
  const { containerRef, activeIndex, goTo } = useSlideNavigation(IDS)
  const [presenterOn, setPresenterOn] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const canFullscreen = typeof document !== 'undefined' && document.fullscreenEnabled

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenEnabled) return
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen()
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return
      if (e.key === 'p' || e.key === 'P') setPresenterOn((on) => !on)
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen()
    }
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    window.addEventListener('keydown', onKey)
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [toggleFullscreen])

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative h-dvh bg-cream font-sans text-ink selection:bg-ink selection:text-cream">
        <ProgressBar activeIndex={activeIndex} total={sections.length} />
        <TopBar />
        <SlideNav activeIndex={activeIndex} goTo={goTo} />

        {canFullscreen && (
          <button
            type="button"
            onClick={toggleFullscreen}
            aria-label={isFullscreen ? 'Salir de pantalla completa (F)' : 'Pantalla completa (F)'}
            title="Pantalla completa (F)"
            className="hidden md:flex fixed top-3 right-4 z-50 items-center justify-center w-10 h-10 rounded-full bg-paper border-2 border-ink text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer"
          >
            {isFullscreen ? <FiMinimize aria-hidden="true" /> : <FiMaximize aria-hidden="true" />}
          </button>
        )}

        <main ref={containerRef} className="slides relative z-10 h-dvh overflow-y-auto snap-y snap-mandatory scroll-smooth">
          <Intro active={activeIndex === 0} />
          <Why />
          <How />
          <What />
          <Value />
          <Cta />
        </main>

        {presenterOn && <PresenterOverlay activeIndex={activeIndex} />}
      </div>
    </MotionConfig>
  )
}

export default App
