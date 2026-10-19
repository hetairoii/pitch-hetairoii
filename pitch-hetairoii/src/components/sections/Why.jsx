import { motion } from 'framer-motion'
import Section, { Heading } from '../Section'
import GoldenCircle from '../GoldenCircle'
import RetroMonitor from '../RetroMonitor'
import { rise } from '../motion'
import { sections, why } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'por-que')

const Why = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-16">
      <motion.div variants={rise} className="order-2 w-[min(64vw,34dvh)] justify-self-center md:order-1 md:w-[min(100%,54dvh)]">
        <RetroMonitor>
          <GoldenCircle level={meta.circleLevel} size="100%" />
        </RetroMonitor>
      </motion.div>

      <div className="order-1 md:order-2">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.6rem,3.4vw,3.6rem)]">
          {why.statement}
        </Heading>
      </div>
    </div>
  </Section>
)

export default Why
