import { motion } from 'framer-motion'
import Section, { Heading } from '../Section'
import { rise } from '../motion'
import { sections, value } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'propuesta')

const Value = () => (
  <Section id={meta.id}>
    <div className="mb-6 md:mb-10">
      <Heading id={meta.id} label={meta.eyebrow}>
        {value.title}
      </Heading>
    </div>

    <ul className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      {value.blocks.map((block, i) => (
        <motion.li
          key={block.question}
          variants={rise}
          whileHover={{ y: -5 }}
          className="relative rounded-2xl border-2 border-ink/35 bg-paper p-6 text-left transition-colors hover:border-ink md:p-9"
        >
          <span className="label !text-[0.65rem] mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink">
            0{i + 1}
          </span>
          <h3 className="mb-2 font-display text-2xl font-medium italic text-ink md:mb-4 md:text-4xl 2xl:text-5xl">
            {block.question}
          </h3>
          <p className="text-base leading-snug text-muted md:text-xl 2xl:text-2xl">{block.answer}</p>
        </motion.li>
      ))}
    </ul>

    <div aria-hidden="true" className="stripes pointer-events-none absolute inset-x-0 bottom-3 -z-10 hidden h-28 md:block" />
  </Section>
)

export default Value
