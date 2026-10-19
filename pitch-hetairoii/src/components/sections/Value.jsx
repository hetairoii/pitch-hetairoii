import { useRef } from 'react'
import { motion } from 'framer-motion'
import Section, { Heading } from '../Section'
import RocketLaunch from '../RocketLaunch'
import { rise } from '../motion'
import { sections, value } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'propuesta')

// Resalta en coral la frase clave dentro del texto del bloque
const Highlighted = ({ text, phrase }) => {
  const i = phrase ? text.indexOf(phrase) : -1
  if (i < 0) return text
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-coral">{phrase}</strong>
      {text.slice(i + phrase.length)}
    </>
  )
}

const Value = () => {
  // El cohete termina justo encima de la primera tarjeta de esta lista
  const listRef = useRef(null)

  return (
    <Section id={meta.id} background={<RocketLaunch anchorRef={listRef} />} className="max-md:items-start">
      <div className="mb-2 md:mb-6">
        <Heading id={meta.id} label={meta.eyebrow} className="text-[clamp(1.5rem,2.8vw,2.8rem)]">
          {value.title}
        </Heading>
      </div>

      {/* cuadrícula 2×2 con tarjetas del mismo tamaño por fila; en móvil, una columna con espacio arriba para el cohete */}
      <ul
        ref={listRef}
        className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-1.5 mt-[clamp(3.25rem,9dvh,4.5rem)] md:grid-cols-2 md:gap-5 md:[@media(min-aspect-ratio:6/5)]:mt-0"
      >
        {value.blocks.map((block, i) => (
          <motion.li
            key={block.lead}
            variants={rise}
            whileHover={{ y: -4 }}
            className="flex flex-col rounded-2xl border-2 border-ink/35 bg-paper p-2.5 text-left transition-colors hover:border-ink md:p-5"
          >
            <div className="mb-1 flex items-baseline justify-between md:mb-2">
              <h3 className="font-display text-lg font-medium italic leading-tight text-ink md:text-3xl">{block.lead}</h3>
              <span className="label !text-[0.6rem] text-teal">0{i + 1}</span>
            </div>
            <p className="text-[0.78rem] leading-snug text-muted md:text-base">
              <Highlighted text={block.text} phrase={block.highlight} />
            </p>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}

export default Value
