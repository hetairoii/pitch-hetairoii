import { motion } from 'framer-motion'
import Section, { Heading } from '../Section'
import GoldenCircle from '../GoldenCircle'
import RetroMonitor from '../RetroMonitor'
import { rise } from '../motion'
import { sections, how } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'como')

const How = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] md:gap-14">
      <motion.div variants={rise} className="order-2 w-[min(46vw,24dvh)] justify-self-center md:order-1 md:w-[min(100%,48dvh)]">
        <RetroMonitor>
          <GoldenCircle level={meta.circleLevel} size="100%" />
        </RetroMonitor>
      </motion.div>

      <div className="order-1 flex flex-col gap-5 md:order-2 md:gap-8">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.5rem,2.9vw,3rem)]">
          {how.statement}
        </Heading>

        <ul className="grid grid-cols-2 gap-3 md:gap-4">
          {how.chips.map((chip) => (
            <motion.li
              key={chip.label}
              variants={rise}
              whileHover={{ y: -3 }}
              className="rounded-2xl border-2 border-ink/35 bg-paper px-4 py-3 text-left transition-colors hover:border-ink md:px-5 md:py-4"
            >
              <p className="font-display text-base font-medium italic leading-tight text-ink md:text-2xl 2xl:text-3xl">
                {chip.label}
              </p>
              {chip.detail && (
                <p className="label mt-1.5 !text-[0.55rem] text-muted md:!text-[0.65rem] 2xl:!text-xs">{chip.detail}</p>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
)

export default How
