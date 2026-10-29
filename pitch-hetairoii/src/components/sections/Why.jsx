import { motion } from 'framer-motion'
import { FiArrowRight, FiX } from 'react-icons/fi'
import Section, { Heading } from '../Section'
import GoldenCircle from '../GoldenCircle'
import RetroMonitor from '../RetroMonitor'
import Thing from '../Thing'
import { rise } from '../motion'
import { sections, why } from '../../data/pitch'
import chaos from '../../assets/icons/why-chaos.webp'
import vulnerable from '../../assets/icons/why-vulnerable.webp'
import freedom from '../../assets/icons/why-freedom.webp'
import calm from '../../assets/icons/why-calm.webp'

const meta = sections.find((s) => s.id === 'por-que')

// Lo que se deja atrás (apagado y tachado) → lo que se busca (a color y flotando)
const Why = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14">
      <motion.div variants={rise} className="order-2 w-[min(54vw,28dvh)] justify-self-center md:order-1 md:w-[min(100%,52dvh)]">
        <RetroMonitor>
          <GoldenCircle level={meta.circleLevel} size="100%" />
        </RetroMonitor>
      </motion.div>

      <div className="order-1 md:order-2">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.5rem,3vw,3rem)]">
          {why.statement}
        </Heading>

        <div className="mt-5 flex items-center justify-center gap-3 md:mt-9 md:justify-start md:gap-7">
          <div className="relative flex items-end gap-1 md:gap-2">
            <Thing src={chaos} alt="Cables enredados: el caos" muted className="h-11 w-auto md:h-[min(13dvh,104px)]" />
            <Thing src={vulnerable} alt="Candado abierto: la vulnerabilidad" muted className="h-14 w-auto md:h-[min(16dvh,130px)]" />
            <span
              aria-hidden="true"
              className="absolute -right-2 -top-3 flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink bg-coral text-cream"
            >
              <FiX size={16} />
            </span>
          </div>

          <FiArrowRight aria-hidden="true" className="shrink-0 text-ink/50" size={26} />

          <div className="flex items-end gap-1 md:gap-3">
            <Thing src={freedom} alt="Paloma: la libertad" float={0.2} className="h-16 w-auto md:h-[min(20dvh,168px)]" />
            <Thing src={calm} alt="Hamaca: la tranquilidad" float={1} className="h-14 w-auto md:h-[min(17dvh,142px)]" />
          </div>
        </div>
      </div>
    </div>
  </Section>
)

export default Why
