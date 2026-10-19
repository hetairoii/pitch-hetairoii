import Section, { Heading } from '../Section'
import ProjectCard from '../ProjectCard'
import { sections, what, projects } from '../../data/pitch'
import universalAcademyImg from '../../assets/universal-academy-screenshot.png'
import alosPitsLogo from '../../assets/a-los-pits-logo.webp'
import couchyLogo from '../../assets/couchy-logo.webp'

const meta = sections.find((s) => s.id === 'que')

// fit 'contain' = logo completo sobre su color de fondo; 'cover' = captura recortada.
// Sin entrada = silueta de ProjectCard (placeholder).
const IMAGES = {
  alosPits: { src: alosPitsLogo, fit: 'contain', bg: '#0d1930' },
  couchy: { src: couchyLogo, fit: 'contain', bg: '#f0eadb' },
  universalAcademy: { src: universalAcademyImg, fit: 'cover' },
}

const What = () => (
  <Section id={meta.id}>
    <div className="mb-3 md:mb-5">
      <Heading id={meta.id} label={meta.eyebrow} className="text-[clamp(1.5rem,2.6vw,2.6rem)]">
        {what.subtitle}
      </Heading>
    </div>

    <ul className="-mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:w-full md:grid-cols-[1.25fr_1fr_1fr] md:gap-6 md:overflow-visible md:px-0 md:pb-0">
      {projects.map((project) => (
        <li key={project.id} className="w-[82vw] flex-none snap-center md:w-auto">
          <ProjectCard {...project} image={IMAGES[project.imageKey]?.src} imageFit={IMAGES[project.imageKey]?.fit} imageBg={IMAGES[project.imageKey]?.bg} />
        </li>
      ))}
    </ul>
  </Section>
)

export default What
