import { motion } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { FaLinkedin } from 'react-icons/fa'
import { cta } from '../data/pitch'
import { rise } from './motion'

// QR grande hacia LinkedIn: módulos azul marino sobre papel crema (contraste alto, lectura fiable proyectado).
// En móvil quien lee ya tiene el teléfono en la mano: se muestra un botón en lugar del QR.
const QRContact = () => (
  <motion.div variants={rise} className="flex flex-col items-center gap-4">
    <a
      href={cta.qrUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir el perfil de LinkedIn de Matias Silveira"
      className="hidden md:block p-4 rounded-3xl bg-paper border-2 border-ink shadow-[7px_7px_0_rgba(27,42,82,0.25)] hover:-translate-y-1 transition-transform"
    >
      <QRCodeSVG
        value={cta.qrUrl}
        size={320}
        level="M"
        marginSize={1}
        bgColor="#f2efe3"
        fgColor="#1b2a52"
        title="Código QR hacia el LinkedIn de Matias Silveira"
        className="w-[min(34vh,320px)] h-auto 2xl:w-[min(38vh,400px)]"
      />
    </a>
    <a
      href={cta.qrUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden label !text-xs flex items-center gap-3 bg-ink text-cream px-6 py-3 rounded-full"
    >
      <FaLinkedin aria-hidden="true" /> Abrir LinkedIn
    </a>
    <p className="label !text-[0.65rem] md:!text-xs text-muted">{cta.qrCaption}</p>
  </motion.div>
)

export default QRContact
