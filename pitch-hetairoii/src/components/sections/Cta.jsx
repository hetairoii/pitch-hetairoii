import Section, { Heading } from '../Section'
import QRContact from '../QRContact'
import ContactLinks from '../ContactLinks'
import { sections, cta, iconCredit } from '../../data/pitch'

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

    {/* atribución exigida por la licencia gratuita de los iconos */}
    <p className="label mt-6 text-center !text-[0.58rem] text-muted md:mt-8">
      <a href={iconCredit.href} target="_blank" rel="noopener noreferrer" className="underline decoration-ink/30 underline-offset-4 hover:text-ink">
        {iconCredit.label}
      </a>
    </p>
  </Section>
)

export default Cta
