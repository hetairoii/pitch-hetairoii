import { motion } from 'framer-motion'
import { FiCamera } from 'react-icons/fi'
import Section, { Heading } from '../Section'
import { rise } from '../motion'
import { sections, about } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'sobre-mi')

// Las fotos se guardan en src/assets/about/ y en pitch.js se anota cada una (archivo, proporción y texto alternativo).
// Se cargan con glob para que una foto que aún no existe no rompa el build: si falta, se ve el marco vacío.
const PHOTOS = import.meta.glob('../../assets/about/*.{webp,jpg,jpeg,png,avif}', { eager: true, import: 'default' })
const photoUrl = (name) => {
  const key = Object.keys(PHOTOS).find((k) => k.endsWith('/' + name))
  return key ? PHOTOS[key] : null
}

// Acepta 'archivo.webp' o { file, ratio, alt }
const normalize = (p) => (typeof p === 'string' ? { file: p } : p)

// Marco tipo polaroid cuya forma sigue la proporción de la foto (ratio = ancho / alto).
// El 0.86 compensa el borde y el pie del marco, para que la foto no se recorte.
const Polaroid = ({ src, alt, ratio = 0.93, className = '' }) => (
  <figure
    style={{ aspectRatio: ratio * 0.86 }}
    className={`absolute border border-ink/15 bg-paper p-1 pb-3 shadow-[3px_4px_0_rgba(27,42,82,0.22)] md:p-1.5 md:pb-6 ${className}`}
  >
    <div className="relative h-full w-full overflow-hidden bg-sky/30">
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <div aria-hidden="true" className="flex h-full w-full flex-col items-center justify-center gap-1 text-ink/40">
          <FiCamera size={22} />
          <span className="label !text-[0.5rem] md:!text-[0.6rem]">Foto</span>
        </div>
      )}
    </div>
  </figure>
)

// Dos marcos por ámbito (o uno, si solo hay una foto), inclinados y casi lado a lado.
const PhotoStack = ({ item }) => {
  const photos = item.photos
    .map(normalize)
    .map((p) => ({ ...p, src: photoUrl(p.file) }))
    .filter((p) => p.src)
    .slice(0, 2)

  // Las fotos verticales se miden por altura (si no, se saldrían del espacio); las demás, por ancho.
  const isPortrait = (p) => (Number(p?.ratio) || 1) < 0.95
  const slots =
    photos.length === 1
      ? [
          {
            photo: photos[0],
            className:
              'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2 ' +
              (isPortrait(photos[0]) ? 'h-[88%]' : 'w-[70%] md:w-[66%]'),
          },
        ]
      : [
          { photo: photos[0], className: 'left-0 top-0 z-10 -rotate-5 ' + (isPortrait(photos[0]) ? 'h-[88%]' : 'w-[62%] md:w-[58%]') },
          { photo: photos[1], className: 'right-0 bottom-0 rotate-4 ' + (isPortrait(photos[1]) ? 'h-[80%]' : 'w-[56%] md:w-[50%]') },
        ]

  return (
    <div className="relative h-28 w-36 shrink-0 md:h-[min(30dvh,250px)] md:w-full">
      {slots.map((slot, i) => (
        <Polaroid
          key={i}
          src={slot.photo?.src ?? null}
          alt={slot.photo?.alt ?? item.title}
          ratio={slot.photo ? Number(slot.photo.ratio) || 1 : 0.93}
          className={slot.className}
        />
      ))}
    </div>
  )
}

const About = () => (
  <Section id={meta.id}>
    <div className="mb-5 md:mb-8">
      <Heading id={meta.id} label={meta.eyebrow} className="text-[clamp(1.6rem,3vw,3rem)]">
        {about.statement}
      </Heading>
    </div>

    <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-3 md:grid-cols-3 md:gap-8">
      {about.items.map((item) => (
        <motion.li
          key={item.id}
          variants={rise}
          className="flex items-center gap-4 rounded-2xl border-2 border-ink/35 bg-paper/70 px-3 py-2.5 text-left md:flex-col md:gap-5 md:px-6 md:pb-7 md:pt-6 md:text-center"
        >
          <PhotoStack item={item} />
          <div className="min-w-0">
            <p className="label !text-[0.6rem] text-teal md:!text-[0.7rem]">{item.kicker}</p>
            <h3 className="mt-1 font-display hyphens-auto text-[clamp(1.2rem,2.9dvh,1.55rem)] font-medium italic leading-tight text-ink md:text-[clamp(1.5rem,2.2vw,2.4rem)]">
              {item.title}
            </h3>
            <p className="mt-1 text-[clamp(0.95rem,2dvh,1.1rem)] font-medium leading-snug text-muted md:text-[clamp(1.05rem,1.4vw,1.3rem)]">
              {item.text}
            </p>
          </div>
        </motion.li>
      ))}
    </ul>
  </Section>
)

export default About
