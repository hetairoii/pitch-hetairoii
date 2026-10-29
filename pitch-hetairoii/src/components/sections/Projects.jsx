import Section, { Heading } from '../Section'
import ProjectCard from '../ProjectCard'
import { sections, projectsSlide, projects } from '../../data/pitch'
import universalAcademyImg from '../../assets/universal-academy-screenshot.png'
import alosPitsLogo from '../../assets/a-los-pits-logo.webp'
import couchyLogo from '../../assets/couchy-logo.webp'

const meta = sections.find((s) => s.id === 'proyectos')

// fit 'contain' = logo completo sobre su color de fondo; 'cover' = captura recortada.
// Sin entrada = silueta de ProjectCard (placeholder).
const IMAGES = {
  alosPits: { src: alosPitsLogo, fit: 'contain', bg: '#0d1930' },
  couchy: { src: couchyLogo, fit: 'contain', bg: '#f0eadb' },
  universalAcademy: { src: universalAcademyImg, fit: 'cover' },
}

// Lámina propia de proyectos (antes compartía espacio con la frase de Qué)
const Projects = () => (
  <Section id={meta.id}>
    <div className="mb-3 md:mb-6">
      <Heading id={meta.id} label={meta.eyebrow} className="text-[clamp(1.5rem,2.8vw,2.8rem)]">
        {projectsSlide.statement}
      </Heading>
    </div>

    <ul className="flex w-full flex-col gap-3 md:grid md:grid-cols-[1.25fr_1fr_1fr] md:gap-6">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectCard {...project} image={IMAGES[project.imageKey]?.src} imageFit={IMAGES[project.imageKey]?.fit} imageBg={IMAGES[project.imageKey]?.bg} />
        </li>
      ))}
    </ul>
  </Section>
)

export default Projects
