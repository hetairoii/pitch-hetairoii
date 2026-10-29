import { motion } from 'framer-motion'
import Section, { Heading } from '../Section'
import GoldenCircle from '../GoldenCircle'
import RetroMonitor from '../RetroMonitor'
import Thing from '../Thing'
import { rise } from '../motion'
import { sections, what } from '../../data/pitch'
import laptop from '../../assets/icons/what-software.webp'
import shield from '../../assets/icons/shield.webp'
import robot from '../../assets/icons/what-automation.webp'

const meta = sections.find((s) => s.id === 'que')

// Software a medida → ciberseguridad + automatización (misma estructura que Por qué y Cómo)
const What = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-14">
      <motion.div variants={rise} className="order-2 w-[min(46vw,24dvh)] justify-self-center md:order-1 md:w-[min(100%,50dvh)]">
        <RetroMonitor>
          <GoldenCircle level={meta.circleLevel} size="100%" />
        </RetroMonitor>
      </motion.div>

      <div className="order-1 md:order-2">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.5rem,3vw,3rem)]">
          {what.statement}
        </Heading>

        <div className="mt-5 flex items-end justify-center gap-3 md:mt-9 md:justify-start md:gap-7">
          <Thing src={laptop} alt="Portátil: software a medida" float={0.1} className="h-14 w-auto md:h-[min(15dvh,120px)]" />
          <Thing src={shield} alt="Escudo: ciberseguridad" float={0.8} className="h-16 w-auto md:h-[min(18dvh,146px)]" />
          <Thing src={robot} alt="Robot: automatización" float={1.4} className="h-16 w-auto md:h-[min(18dvh,146px)]" />
        </div>
      </div>
    </div>
  </Section>
)

export default What
