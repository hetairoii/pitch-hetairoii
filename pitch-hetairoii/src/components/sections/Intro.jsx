import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import DotPattern from '../DotPattern'
import Wordmark from '../Wordmark'
import { profile } from '../../data/pitch'
import { useIsMobile, usePrefersReducedMotion } from '../../hooks/useMediaQuery'
import portrait from '../../assets/foto-ilustrada.webp'

// three.js se descarga solo si el globo realmente se va a mostrar
const Globe3D = lazy(() => import('../Globe3D'))

const fade = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: 'easeOut' },
})

const Intro = ({ active }) => {
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()
  const showGlobe = !isMobile && !reducedMotion

  return (
    <section
      id="intro"
      aria-labelledby="intro-title"
      className="relative h-dvh w-full snap-start snap-always overflow-hidden p-2 pt-12 md:p-5 md:pt-14"
    >
      {/* marco doble redondeado, como el póster de referencia */}
      <div className="relative flex h-full flex-col items-center overflow-hidden rounded-[1.75rem] border-2 border-ink px-4 pb-6 pt-3 md:rounded-[2.5rem] md:px-12 md:pb-8 md:pt-5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 rounded-[1.4rem] border border-ink/30 md:rounded-[2.1rem]"
        />
        <DotPattern color="#1b2a52" opacity={0.12} spacing={24} size={1.5} />

        {showGlobe && (
          <div className="pointer-events-none absolute left-1/2 top-[58%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-[0.16]">
            <Suspense fallback={null}>
              <Globe3D size={640} sphereSize={14} color={0x1b2a52} paused={!active} />
            </Suspense>
          </div>
        )}

        <motion.p {...fade(0.1)} className="label relative z-10 text-muted !text-[0.6rem] md:!text-xs">
          Silveira Productions presenta
        </motion.p>

        <motion.h1 id="intro-title" {...fade(0.2)} className="relative z-10 mt-1 w-full max-w-6xl">
          <span className="sr-only">{profile.name}</span>
          <Wordmark text="MATIAS SILVEIRA" className="h-auto w-full" />
        </motion.h1>

        <div className="relative z-10 mt-3 grid min-h-0 w-full max-w-6xl flex-1 grid-cols-1 items-end gap-3 md:mt-2 md:grid-cols-[1fr_auto_1fr] md:gap-10">
          <motion.div {...fade(0.5)} className="order-2 self-center text-center md:order-1 md:text-right">
            <p className="font-display text-[clamp(1.5rem,2.8vw,3rem)] font-medium italic leading-tight">
              {profile.greeting}
            </p>
            <p className="label mt-2 text-teal md:mt-3">{profile.role}</p>
          </motion.div>

          {/* portrait en arco tipo postal: la cabeza sobresale del marco */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.3 }}
            className="relative order-1 mt-10 justify-self-center md:order-2 md:mt-0"
            style={{ height: 'min(54dvh, 680px, 84vw)', aspectRatio: '5 / 6' }}
          >
            <div className="sky arch absolute inset-0 border-2 border-ink" aria-hidden="true" />
            <img
              src={portrait}
              alt={profile.photoAlt}
              className="absolute bottom-0 left-0 h-auto w-full"
              style={{ clipPath: 'inset(-60% 0 0 0)' }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-ink"
            />
          </motion.div>

          {/* mi mantra */}
          <motion.div {...fade(0.7)} className="order-3 self-center text-center md:text-left">
            <p className="font-display text-[clamp(1.05rem,1.75vw,1.9rem)] font-medium italic leading-snug">
              {profile.tagline}
            </p>
          </motion.div>
        </div>

        <div aria-hidden="true" className="checker absolute inset-x-0 bottom-0 h-4 md:h-6" />
      </div>
    </section>
  )
}

export default Intro
