import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'
import { rise } from './motion'

const linkClass =
  'label !text-[0.65rem] bg-ink text-cream px-4 py-2 rounded-full hover:bg-teal transition-colors flex items-center gap-2'

// Silueta sobre verde azulado: guiño a los espacios vacíos de la landing de referencia.
const Placeholder = () => (
  <div className="relative h-full w-full bg-teal">
    <svg viewBox="0 0 100 80" className="absolute inset-x-0 bottom-0 h-[88%] w-full" aria-hidden="true">
      <circle cx="50" cy="32" r="14" fill="#164f5c" />
      <path d="M16 80 C16 56 32 50 50 50 C68 50 84 56 84 80Z" fill="#164f5c" />
    </svg>
    <span className="label !text-[0.55rem] absolute bottom-2 left-0 right-0 text-center text-cream">
      Imagen próximamente
    </span>
  </div>
)

// Tarjeta de proyecto con la estructura de ProjectCard del portafolio y el estilo del póster:
// marco redondeado, imagen enmarcada, pills en versalitas y botón azul marino.
const ProjectCard = ({ name, image, imageFit = 'cover', imageBg, description, tech = [], repos = [], liveUrl, featured = false, badge }) => (
  <motion.article
    variants={rise}
    whileHover={{ y: -4 }}
    className={
      'group relative bg-paper rounded-2xl border-2 overflow-hidden flex flex-col text-left h-full transition-colors ' +
      (featured
        ? 'border-ink shadow-[6px_6px_0_rgba(27,42,82,0.25)]'
        : 'border-ink/35 hover:border-ink')
    }
  >
    <div className="p-3 pb-0">
      <div
        className="relative h-[16dvh] min-h-24 max-h-48 w-full overflow-hidden rounded-xl border border-ink/25"
        style={imageBg ? { backgroundColor: imageBg } : undefined}
      >
        {image ? (
          <img
            src={image}
            alt={'Captura de ' + name}
            className={'w-full h-full transition-transform duration-500 group-hover:scale-105 ' + (imageFit === 'contain' ? 'object-contain' : 'object-cover object-top')}
          />
        ) : (
          <Placeholder />
        )}
        {badge && (
          <span className="label !text-[0.6rem] absolute top-2 left-2 rounded-full bg-ink px-3 py-1 text-cream">
            {badge}
          </span>
        )}
      </div>
    </div>

    <div className="p-4 md:p-5 flex flex-col flex-1 gap-2">
      <h3 className="font-display italic font-medium text-2xl md:text-3xl text-ink leading-tight">{name}</h3>
      <p className="text-muted text-sm md:text-[0.95rem] leading-snug line-clamp-4">{description}</p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="label !text-[0.6rem] px-2.5 py-1 rounded-full border border-ink/40 text-ink"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {(liveUrl || repos.length > 0) && (
        <div className="flex flex-wrap gap-2 pt-1">
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
