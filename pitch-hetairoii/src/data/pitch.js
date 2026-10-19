// Todo el contenido del pitch vive aquí: edítalo sin tocar componentes.
// Los TODO marcan datos que faltan por confirmar. No se inventó nada.

export const profile = {
  name: 'Matias Silveira',
  firstName: 'Matias',
  username: 'hetairoii',
  greeting: 'Hola, soy Matias',
  role: 'Ingeniero en Informática',
  location: 'Caracas, Venezuela',
  tagline: 'Convierto tareas repetitivas en software',
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
    id: 'por-que',
    label: 'Por qué',
    eyebrow: '01 · Por qué',
    circleLevel: 1,
    script:
      'Hay algo que me molesta mucho: ver a la gente perder horas en tareas que una máquina podría hacer en segundos.',
  },
  {
    id: 'como',
    label: 'Cómo',
    eyebrow: '02 · Cómo',
    circleLevel: 2,
    script:
      'Por eso primero entiendo el problema real y después construyo la solución más simple que lo resuelva, con automatizaciones, APIs, apps móviles e inteligencia artificial.',
  },
  {
    id: 'que',
    label: 'Qué',
    eyebrow: '03 · Qué',
    circleLevel: 3,
    script:
      'Hoy estoy creando A los Pits, una app para que los clientes de talleres mecánicos en Venezuela sigan la reparación de su carro desde el teléfono, sin tener que llamar diez veces. En mi trabajo de grado desarrollo una app sobre un sistema de monitoreo eléctrico real, con un componente de ciberseguridad.',
  },
  {
    id: 'propuesta',
    label: 'Propuesta',
    eyebrow: '04 · Propuesta de valor',
    circleLevel: 3,
    // TODO: el guion no incluye texto para esta sección; añade uno si quieres leerlo en el modo presentador.
    script: '',
  },
  {
    id: 'cierre',
    label: 'Cierre',
    eyebrow: '05 · Hablemos',
    circleLevel: 0,
    script:
      'Si tienes un proceso que te roba tiempo, conversemos: probablemente se pueda automatizar.',
  },
]

export const why = {
  title: 'Por qué',
  statement:
    'Me molesta ver a la gente perder horas en tareas que una máquina podría hacer en segundos.',
}

export const how = {
  title: 'Cómo',
  statement:
    'Primero entiendo el problema real; después construyo la solución más simple que lo resuelva.',
  chips: [
    { label: 'Automatización', detail: 'n8n, REST APIs, webhooks' },
    { label: 'Apps móviles', detail: 'Expo + Supabase' },
    { label: 'Web', detail: 'React, FastAPI' },
    { label: 'Inteligencia Artificial', detail: '' },
  ],
}

export const what = {
  title: 'Qué',
  subtitle: 'Lo que estoy construyendo',
}

// imageKey se resuelve en sections/What.jsx (las imágenes se importan como módulos).
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

// Propuesta de valor: texto base del usuario dividido en cuatro bloques.
// highlight = frase (contenida en text) que se resalta en coral.
export const value = {
  title: 'Mi propuesta de valor',
  blocks: [
    {
      lead: 'Para',
      text: 'negocios en crecimiento que pierden tiempo y dinero en procesos manuales o herramientas que no encajan,',
      highlight: 'tiempo y dinero',
    },
    {
      lead: 'Yo',
      text: 'diseño soluciones de software a medida con automatización e IA que los hacen despegar en su nicho,',
      highlight: 'despegar en su nicho',
    },
    {
      lead: 'A diferencia de',
      text: 'los sistemas genéricos que obligan a cambiar tu forma de trabajar,',
      highlight: 'obligan a cambiar tu forma de trabajar',
    },
    {
      lead: 'Porque',
      text: 'combino formación en Ingeniería Informática con experiencia real en proyectos desplegados y una forma de entender a las personas que desarrollé en voluntariado, representación estudiantil y en debate.',
      highlight: 'experiencia real en proyectos desplegados',
    },
  ],
}

export const cta = {
  title: 'Si tienes un proceso que te roba tiempo, conversemos:',
  highlight: 'probablemente se pueda automatizar.',
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
