import { motion } from 'framer-motion'

const ProgressBar = ({ activeIndex, total }) => {
  const progress = total > 1 ? activeIndex / (total - 1) : 0
  return (
    <div
      role="progressbar"
      aria-label="Progreso de la presentación"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={activeIndex + 1}
      className="fixed top-0 left-0 w-full h-1.5 z-50 bg-ink/15"
    >
      <motion.div
        className="h-full w-full bg-gradient-to-r from-teal to-coral origin-left"
        animate={{ scaleX: progress }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
    </div>
  )
}

export default ProgressBar
