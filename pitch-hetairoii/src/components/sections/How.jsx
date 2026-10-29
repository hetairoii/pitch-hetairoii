import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import Section, { Heading } from '../Section'
import GoldenCircle from '../GoldenCircle'
import RetroMonitor from '../RetroMonitor'
import Thing from '../Thing'
import { rise } from '../motion'
import { sections, how } from '../../data/pitch'
import complexity from '../../assets/icons/how-complexity.webp'
import strategy from '../../assets/icons/how-strategy.webp'
import shield from '../../assets/icons/shield.webp'

const meta = sections.find((s) => s.id === 'como')

const ICONS = {
  complexity: { src: complexity, alt: 'Laberinto: la complejidad técnica', size: 'h-14 md:h-[min(15dvh,120px)]' },
  strategy: { src: strategy, alt: 'Mapa de ruta: una estrategia clara', size: 'h-14 md:h-[min(15dvh,120px)]' },
  solution: { src: shield, alt: 'Escudo: una solución sólida y segura', size: 'h-16 md:h-[min(18dvh,146px)]' },
}

// Complejidad → estrategia → solución segura
const How = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:gap-14">
      <motion.div variants={rise} className="order-2 w-[min(46vw,24dvh)] justify-self-center md:order-1 md:w-[min(100%,48dvh)]">
        <RetroMonitor>
          <GoldenCircle level={meta.circleLevel} size="100%" />
        </RetroMonitor>
      </motion.div>

      <div className="order-1 md:order-2">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.5rem,3vw,3rem)]">
          {how.statement}
        </Heading>

        <ol className="mt-5 flex items-end justify-center gap-2 md:mt-9 md:justify-start md:gap-5">
          {how.steps.map((step, i) => {
            const icon = ICONS[step.icon]
            return (
              <li key={step.icon} className="flex items-end gap-2 md:gap-5">
                <div className="flex flex-col items-center gap-2">
                  <Thing src={icon.src} alt={icon.alt} float={i * 0.6} className={icon.size + ' w-auto'} />
                  <motion.span variants={rise} className="label !text-[0.6rem] text-muted md:!text-[0.7rem]">
                    {step.label}
                  </motion.span>
                </div>
                {i < how.steps.length - 1 && (
                  <FiArrowRight aria-hidden="true" className="mb-8 shrink-0 text-ink/50" size={24} />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  </Section>
)

export default How
