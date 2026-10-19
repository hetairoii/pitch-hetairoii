import { motion } from 'framer-motion'
import DotPattern from './DotPattern'
import { stagger, rise } from './motion'

// Una diapositiva: ocupa 100vh, se ancla con scroll-snap y lleva la franja de damero abajo.
// El título se pone con <Heading> para que aria-labelledby apunte a él.
const Section = ({ id, children, background, className = '' }) => (
  <section
    id={id}
    aria-labelledby={id + '-title'}
    className={`relative h-dvh w-full snap-start snap-always flex items-center justify-center overflow-hidden px-6 md:px-24 pt-16 pb-10 ${className}`}
  >
    <DotPattern color="#1b2a52" opacity={0.1} spacing={22} size={1.4} />
    {background}
    <motion.div
      className="relative z-10 w-full max-w-7xl"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5 }}
    >
      {children}
    </motion.div>
    <div aria-hidden="true" className="checker absolute bottom-0 inset-x-0 h-3 md:h-4" />
  </section>
)

// Etiqueta en versalitas + titular en serif itálica (como los titulares del póster de referencia).
export const Heading = ({ id, label, children, align = 'center', className = '' }) => (
  <div className={align === 'center' ? 'text-center' : 'text-center md:text-left'}>
    {label && (
      <motion.p
        variants={rise}
        className={`label text-teal mb-3 md:mb-4 inline-flex items-center gap-3 ${align === 'center' ? '' : 'md:justify-start'}`}
      >
        <span aria-hidden="true" className="h-px w-8 bg-teal/60" />
        {label}
        <span aria-hidden="true" className={`h-px w-8 bg-teal/60 ${align === 'center' ? '' : 'md:hidden'}`} />
      </motion.p>
    )}
    <motion.h2
      id={id + '-title'}
      variants={rise}
      className={`font-display italic font-medium text-ink leading-[1.12] text-[clamp(1.75rem,3.6vw,3.6rem)] ${className}`}
    >
      {children}
    </motion.h2>
  </div>
)

export default Section
