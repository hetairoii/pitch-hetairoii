import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'
import Section, { Heading } from '../Section'
import RocketLaunch from '../RocketLaunch'
import Thing from '../Thing'
import { rise } from '../motion'
import { sections, value } from '../../data/pitch'
import business from '../../assets/icons/value-business.webp'
import tailored from '../../assets/icons/value-tailored.webp'
import generic from '../../assets/icons/value-generic.webp'
import training from '../../assets/icons/value-training.webp'
import people from '../../assets/icons/value-people.webp'

const meta = sections.find((s) => s.id === 'propuesta')

const ICONS = {
  business: { src: business, alt: 'Panadería: un negocio local en crecimiento' },
  tailored: { src: tailored, alt: 'Cinta de sastre: software a medida' },
  generic: { src: generic, alt: 'Caja genérica: los sistemas genéricos' },
  training: { src: training, alt: 'Birrete: formación en Ingeniería' },
  people: { src: people, alt: 'Apretón de manos: entender a las personas' },
}

// Frase corta + cuatro tarjetas de pocas palabras con icono (como las láminas de Por qué y Cómo).
// Móvil: tarjetas apiladas a todo el ancho (icono a la izquierda) para que la letra sea grande.
// Escritorio: cuatro columnas con letra más grande.
const Value = () => {
  // El icono del cohete termina justo encima de la primera fila de tarjetas
  const listRef = useRef(null)

  return (
    <Section id={meta.id} background={<RocketLaunch anchorRef={listRef} />} className="max-md:items-start">
      <div className="mb-2 md:mb-6">
        <Heading id={meta.id} label={meta.eyebrow} className="mx-auto max-w-[24ch] text-[clamp(1.5rem,2.8vw,2.8rem)]">
          {value.statement}
        </Heading>
      </div>

      <ul
        ref={listRef}
        className="mx-auto mt-[clamp(3.25rem,9dvh,4.5rem)] grid w-full max-w-6xl grid-cols-1 gap-2 md:grid-cols-4 md:gap-5 md:[@media(min-aspect-ratio:6/5)]:mt-8"
      >
        {value.blocks.map((block) => (
          <motion.li
            key={block.lead}
            variants={rise}
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 rounded-2xl border-2 border-ink/35 bg-paper px-4 py-[clamp(0.5rem,1.5dvh,0.9rem)] text-left transition-colors hover:border-ink md:flex-col md:gap-0 md:px-4 md:pb-6 md:pt-6 md:text-center"
          >
            <div className="relative flex h-14 w-24 shrink-0 items-end justify-center gap-1 md:h-[min(15dvh,120px)] md:w-auto">
              {block.icons.map((key, i) => (
                <Thing
                  key={key}
                  src={ICONS[key].src}
                  alt={ICONS[key].alt}
                  muted={block.muted}
                  float={block.muted ? 0 : 0.3 + i * 0.7}
                  className={block.icons.length > 1 ? 'h-9 w-auto md:h-[min(11dvh,88px)]' : 'h-12 w-auto md:h-[min(14dvh,112px)]'}
                />
              ))}
              {block.muted && (
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink bg-coral text-cream md:-right-3 md:-top-2"
                >
                  <FiX size={14} />
                </span>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="font-display text-[clamp(1.45rem,3.6dvh,1.9rem)] font-medium italic leading-tight text-ink md:mt-4 md:text-[clamp(1.4rem,2.2vw,2.4rem)]">
                {block.lead}
              </h3>
              <p className="mt-0.5 text-[clamp(1rem,2.3dvh,1.2rem)] font-medium leading-snug text-muted md:mt-2 md:text-[clamp(1.05rem,1.5vw,1.4rem)]">
                {block.text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  )
}

export default Value
