import Section, { Heading } from '../Section'
import QRContact from '../QRContact'
import ContactLinks from '../ContactLinks'
import { sections, cta } from '../../data/pitch'

const meta = sections.find((s) => s.id === 'cierre')

const Cta = () => (
  <Section id={meta.id}>
    <div className="grid w-full items-center gap-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
      <div className="flex flex-col gap-6 md:gap-10">
        <Heading id={meta.id} label={meta.eyebrow} align="left" className="text-[clamp(1.6rem,3.3vw,3.5rem)]">
          {cta.title}{' '}
          <span className="text-coral">{cta.highlight}</span>
        </Heading>
        <ContactLinks className="justify-center md:justify-start" />
      </div>
      <QRContact />
    </div>
  </Section>
)

export default Cta
