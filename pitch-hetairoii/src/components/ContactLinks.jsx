import { motion } from 'framer-motion'
import { SiGithub, SiGmail, SiWhatsapp, SiTelegram } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { contactLinks } from '../data/pitch'
import { rise } from './motion'

const ICONS = {
  gmail: SiGmail,
  whatsapp: SiWhatsapp,
  telegram: SiTelegram,
  github: SiGithub,
  linkedin: FaLinkedin,
}

// Íconos de contacto reutilizados de Contact.jsx del portafolio, en botones circulares azul marino.
const ContactLinks = ({ className = 'justify-center' }) => (
  <ul className={`flex gap-3 md:gap-5 flex-wrap ${className}`}>
    {contactLinks.map((link) => {
      const Icon = ICONS[link.icon]
      return (
        <motion.li key={link.name} variants={rise}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="group flex flex-col items-center gap-2"
          >
            <span className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 border-ink bg-paper text-ink transition-colors group-hover:bg-ink group-hover:text-cream">
              <Icon size={22} aria-hidden="true" />
            </span>
            <span className="label !text-[0.6rem] text-muted">{link.name}</span>
          </a>
        </motion.li>
      )
    })}
  </ul>
)

export default ContactLinks
