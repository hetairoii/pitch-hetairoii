// Todo el contenido del pitch vive aquí: edítalo sin tocar componentes.
// Los TODO marcan datos que faltan por confirmar. No se inventó nada.

export const profile = {
  name: 'Matias Silveira',
  firstName: 'Matias',
  username: 'hetairoii',
  greeting: 'Hola, soy Matias',
  role: 'Ingeniero en Informática',
  location: 'Caracas, Venezuela',
  // Mi mantra
  tagline: 'Transformo el caos en eficiencia sistematizada.',
  photoAlt: 'Retrato de Matias Silveira sonriendo, con camisa azul marino',
}

// circleLevel: cuántos anillos del Golden Circle están llenos en esa sección (0 = ninguno).
export const sections = [
  {
    id: 'intro',
    label: 'Intro',
    circleLevel: 0,
    script: 'Hola, soy Matias, estudiante de Ingeniería Informática en la UCAB.',
  },
  {
    id: 'sobre-mi',
    label: 'Sobre mí',
    eyebrow: '01 · Sobre mí',
    circleLevel: 0,
    // TODO: añade un guion para esta lámina si quieres leerlo en el modo presentador.
    script: '',
  },
  {
    id: 'por-que',
    label: 'Por qué',
    eyebrow: '02 · Por qué',
    circleLevel: 1,
    script:
      'Hay algo que me molesta mucho: ver a la gente perder horas en tareas que una máquina podría hacer en segundos.',
  },
  {
    id: 'como',
    label: 'Cómo',
    eyebrow: '03 · Cómo',
    circleLevel: 2,
    script:
      'Por eso primero entiendo el problema real y después construyo la solución más simple que lo resuelva, con automatizaciones, APIs, apps móviles e inteligencia artificial.',
  },
  {
    id: 'que',
    label: 'Qué',
    eyebrow: '04 · Qué',
    circleLevel: 3,
    // TODO: el guion no incluye texto para esta lámina; añade uno si quieres leerlo en el modo presentador.
    script: '',
  },
  {
    id: 'proyectos',
    label: 'Proyectos',
    eyebrow: '05 · Proyectos',
    circleLevel: 3,
    // TODO: este guion todavía menciona el trabajo de grado; actualízalo con Couchy.
    script:
      'Hoy estoy creando A los Pits, una app para que los clientes de talleres mecánicos en Venezuela sigan la reparación de su carro desde el teléfono, sin tener que llamar diez veces. En mi trabajo de grado desarrollo una app sobre un sistema de monitoreo eléctrico real, con un componente de ciberseguridad.',
  },
  {
    id: 'propuesta',
    label: 'Propuesta',
    eyebrow: '06 · Propuesta de valor',
    circleLevel: 3,
    // TODO: el guion no incluye texto para esta sección; añade uno si quieres leerlo en el modo presentador.
    script: '',
  },
  {
    id: 'cierre',
    label: 'Cierre',
    eyebrow: '07 · Hablemos',
    circleLevel: 0,
    script:
      'Si tienes un proceso que te roba tiempo, conversemos: probablemente se pueda automatizar.',
  },
]

// Golden Circle. En pantalla va la versión corta + imágenes; "full" guarda el texto completo (referencia).
export const why = {
  title: 'Por qué',
  statement: 'Libertad y tranquilidad, no caos ni vulnerabilidad.',
  full: 'Creo que la tecnología debe dar libertad y tranquilidad a las empresas, no caos ni vulnerabilidad. Ningún negocio debería ver frenado su potencial por sistemas frágiles o procesos obsoletos.',
}

export const how = {
  title: 'Cómo',
  statement: 'Estrategia clara antes de escribir una línea de código.',
  full: 'Traduzco la complejidad técnica y los dolores operativos en estrategia clara, alineando las necesidades reales del cliente con soluciones sólidas y seguras antes de escribir una sola línea de código.',
  // Complejidad → estrategia → solución (el icono se resuelve en sections/How.jsx)
  steps: [
    { icon: 'complexity', label: 'Complejidad' },
    { icon: 'strategy', label: 'Estrategia' },
    { icon: 'solution', label: 'Solución segura' },
  ],
}

export const what = {
  title: 'Qué',
  statement: 'Software que te entiende y no al revés.',
  full: 'Diseño e implemento software personalizado de ciberseguridad y automatización de procesos clave de negocio.',
}

// Lámina de proyectos (sections/Projects.jsx)
export const projectsSlide = {
  title: 'Proyectos',
  statement: 'Lo que estoy construyendo',
}

// Crédito obligatorio de los iconos 3D (licencia gratuita de Thiings: atribución + uso no comercial).
export const iconCredit = { label: 'Iconos 3D: Thiings.co', href: 'https://www.thiings.co' }

// imageKey se resuelve en sections/Projects.jsx (las imágenes se importan como módulos).
export const projects = [
  {
    id: 'a-los-pits',
    name: 'A los Pits',
    featured: true,
    badge: 'En desarrollo',
    description:
      'App móvil para talleres mecánicos en Venezuela: el cliente sigue la reparación de su carro desde el teléfono, sin tener que llamar al taller.',
    tech: ['Expo', 'Supabase'],
    imageKey: 'alosPits',
    // TODO: añadir enlace (repo / demo) si existe y se puede compartir.
    liveUrl: null,
    repos: [],
  },
  {
    id: 'universal-academy',
    name: 'Universal Academy',
    description:
      'Plataforma de formación online (LMS) con un sitio público y un campus virtual por roles: estudiantes, tutores y administradores. Incluye cursos con módulos y contenido, evaluaciones con tiempo e intentos, certificados en PDF, foros, conferencias en vivo y reportes. Monorepo con SPA en React y API REST en FastAPI. Más de 185 commits.',
    tech: ['React 19', 'TypeScript', 'Vite', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    imageKey: 'universalAcademy',
    liveUrl: 'https://www.universalacademygroup.com/',
    repos: [],
  },
  {
    id: 'couchy',
    name: 'Couchy',
    description:
      'Compañero con IA que ayuda a una persona mayor a recordar sus pastillas y mantiene a su familia al tanto. Su voz suena como una alarma real en el teléfono y avisa a los familiares por Telegram. Creado para el Hacktoberfest 2026 de DEV.',
    tech: ['Expo', 'FastAPI', 'Gemma', 'ElevenLabs', 'Telegram'],
    imageKey: 'couchy',
    liveUrl: 'https://t.me/youfriendcouchy_bot',
    repos: [{ label: 'Repositorio', url: 'https://github.com/hetairoii/couchy' }],
  },

]

// Propuesta de valor: en pantalla solo frases cortas + iconos; `full` guarda el texto completo (referencia).
// icons se resuelven en sections/Value.jsx; muted = se deja atrás (apagado y tachado).
export const value = {
  title: 'Mi propuesta de valor',
  statement: 'Software a medida que hace despegar tu negocio.',
  full: 'Para negocios en crecimiento que pierden tiempo y dinero en procesos manuales o herramientas que no encajan, yo diseño soluciones de software a medida con automatización e IA que los hacen despegar en su nicho, a diferencia de los sistemas genéricos que obligan a cambiar tu forma de trabajar, porque combino formación en Ingeniería Informática con experiencia real en proyectos desplegados y una forma de entender a las personas que desarrollé en voluntariado, representación estudiantil y en debate.',
  blocks: [
    { lead: 'Para', text: 'Negocios en crecimiento', icons: ['business'] },
    { lead: 'Yo', text: 'Software a medida, con IA', icons: ['tailored'] },
    { lead: 'A diferencia de', text: 'Sistemas genéricos', icons: ['generic'], muted: true },
    { lead: 'Porque', text: 'Ingeniería, proyectos reales y empatía', icons: ['training', 'people'] },
  ],
}

// Sobre mí: tres ámbitos con fotos. Las fotos se guardan en src/assets/about/ y aquí se anota cada una como
// { file: 'nombre.webp', ratio: ancho/alto (1.244 = horizontal, 1 = cuadrada, 0.8 = vertical), alt: 'descripción' }.
// Mientras no haya fotos se muestran marcos vacíos (máx. 2 por ámbito).
// TODO: las frases son genéricas (no hay datos reales). Cámbialas por tus roles, años y logros.
export const about = {
  title: 'Sobre mí',
  statement: 'Más allá del ingeniero',
  items: [
    {
      id: 'mun',
      kicker: 'Modelo de Naciones Unidas',
      title: 'MUN',
      text: 'Debate, diplomacia y negociación.',
      photos: [
        { file: 'mun-1.webp', ratio: '1.244', alt: 'Grupo de delegados de MUN posando frente a un mural con estrellas' },
        { file: 'mun-2.webp', ratio: '1', alt: 'Participante de pie interviniendo durante una sesión de MUN' },
      ],
    },
    {
      id: 'activismo',
      kicker: 'Participación',
      title: 'Activismo',
      text: 'Convicción y trabajo con personas.',
      photos: [
        { file: 'activismo-1.webp', ratio: '1.179', alt: 'Grupo de estudiantes con franelas rojas de la UCAB posando al aire libre' },
        { file: 'activismo-2.webp', ratio: '1.164', alt: 'Estudiantes levantando franelas rojas frente a un mural' },
      ],
    },
    {
      id: 'competencias',
      kicker: 'Código en competencia',
      title: 'Competencias de programación',
      text: 'Resolver problemas bajo presión.',
      photos: [
        { file: 'programacion-1.webp', ratio: '1.199', alt: 'Participante sonriendo junto a un letrero amarillo que dice HACKING' },
        { file: 'programacion-2.webp', ratio: '1.199', alt: 'Pantalla táctil conectada a una computadora mostrando el mensaje Esperando cédula' },
      ],
    },
  ],
}

export const cta = {
  title: 'Estrategia clara y software a medida, sin caos:',
  highlight: 'conversemos.',
  qrUrl: 'https://linkedin.com/in/matias-silveira-1840b329a',
  qrCaption: 'Escanea y conectemos en LinkedIn',
}

// `icon` se resuelve en components/ContactLinks.jsx. Datos copiados de Contact.jsx del portafolio.
export const contactLinks = [
  { icon: 'gmail', name: 'Gmail', href: 'mailto:joserafaelmatiast@gmail.com' },
  { icon: 'whatsapp', name: 'WhatsApp', href: 'https://wa.me/584142696062' },
  { icon: 'telegram', name: 'Telegram', href: 'https://t.me/matiasito' },
  { icon: 'github', name: 'GitHub', href: 'https://github.com/hetairoii' },
  { icon: 'linkedin', name: 'LinkedIn', href: 'https://linkedin.com/in/matias-silveira-1840b329a' },
]

export const presenter = {
  durationSeconds: 60,
}
