import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { rise } from './motion'

const linkClass =
  'label !text-[0.6rem] md:!text-[0.65rem] bg-ink text-cream px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-teal transition-colors flex items-center gap-2'

// Silueta sobre verde azulado: guiño a los espacios vacíos de la landing de referencia.
const Placeholder = () => (
  <div className="relative h-full w-full bg-teal">
    <svg viewBox="0 0 100 80" className="absolute inset-x-0 bottom-0 h-[88%] w-full" aria-hidden="true">
      <circle cx="50" cy="32" r="14" fill="#164f5c" />
      <path d="M16 80 C16 56 32 50 50 50 C68 50 84 56 84 80Z" fill="#164f5c" />
    </svg>
    <span className="label !text-[0.55rem] absolute bottom-2 left-0 right-0 hidden text-center text-cream md:block">
      Imagen próximamente
    </span>
  </div>
)

// Tarjeta de proyecto con la estructura de ProjectCard del portafolio y el estilo del póster.
// Móvil: tarjeta horizontal compacta (imagen a la izquierda, texto a la derecha) para ver los tres proyectos apilados.
// Escritorio: tarjeta vertical (imagen arriba).
const ProjectCard = ({ name, image, imageFit = 'cover', imageBg, description, tech = [], repos = [], liveUrl, featured = false, badge }) => (
  <motion.article
    variants={rise}
    whileHover={{ y: -4 }}
    className={
      'group relative flex h-full flex-row overflow-hidden rounded-2xl border-2 bg-paper text-left transition-colors md:flex-col ' +
      (featured ? 'border-ink shadow-[6px_6px_0_rgba(27,42,82,0.25)]' : 'border-ink/35 hover:border-ink')
    }
  >
    <div className="w-[32%] shrink-0 p-2 md:w-auto md:p-3 md:pb-0">
      <div
        className="relative h-full min-h-[6.5rem] w-full overflow-hidden rounded-xl border border-ink/25 md:h-[16dvh] md:min-h-24 md:max-h-48"
        style={imageBg ? { backgroundColor: imageBg } : undefined}
      >
        {image ? (
          <img
            src={image}
            alt={'Captura de ' + name}
            className={'h-full w-full transition-transform duration-500 group-hover:scale-105 ' + (imageFit === 'contain' ? 'object-contain' : 'object-cover object-left-top md:object-top')}
          />
        ) : (
          <Placeholder />
        )}
        {badge && (
          <span className="label !text-[0.6rem] absolute left-2 top-2 hidden rounded-full bg-ink px-3 py-1 text-cream md:block">
            {badge}
          </span>
        )}
      </div>
    </div>

    <div className="flex min-w-0 flex-1 flex-col gap-1.5 p-3 pl-1 md:gap-2 md:p-5">
      {badge && (
        <span className="label !text-[0.55rem] w-fit rounded-full bg-ink px-2.5 py-0.5 text-cream md:hidden">{badge}</span>
      )}
      <h3 className="font-display text-xl font-medium italic leading-tight text-ink md:text-3xl">{name}</h3>
      <p className="line-clamp-3 text-[0.85rem] leading-snug text-muted md:line-clamp-4 md:text-[0.95rem] [@media(max-height:700px)]:line-clamp-2">
        {description}
      </p>

      {tech.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1 md:gap-2">
          {tech.map((t, i) => (
            <span
              key={t}
              className={
                'label !text-[0.55rem] rounded-full border border-ink/40 px-2 py-0.5 text-ink md:!text-[0.6rem] md:px-2.5 md:py-1 ' +
                (i > 2 ? 'hidden md:inline-block' : '')
              }
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {(liveUrl || repos.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-0.5 md:pt-1">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FiExternalLink aria-hidden="true" /> Ver en vivo
            </a>
          )}
          {repos.map((repo) => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <SiGithub aria-hidden="true" /> {repo.label}
            </a>
          ))}
        </div>
      )}
    </div>
  </motion.article>
)

export default ProjectCard
