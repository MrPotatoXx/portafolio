export const translations = {
  sections: {
    hero: 'Inicio',
    about: 'Acerca de mí',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
    courses: 'Cursos',
    skills: 'Habilidades'
  },
  sectionIds: {
    hero: 'inicio',
    about: 'sobre-mi',
    experience: 'experiencia',
    education: 'educacion',
    projects: 'proyectos',
    courses: 'cursos',
    skills: 'habilidades'
  },
  meta: {
    title: 'Giovanni Salinas - Portafolio',
    description: 'Ingeniero en Informática en Santiago, Chile. Desarrollo web y ciberseguridad; integración de APIs, Astro y Tailwind CSS. Explora proyectos, experiencia, educación y certificaciones.',
    keywords: 'Giovanni Salinas, Ingeniería en Informática, Ciberseguridad, Desarrollo Web, Programación, Python, Ethical Hacker'
  },
  hero: {
    greeting: 'Hola, soy',
    profession: 'Ingeniero en Informática',
    location: 'Santiago, Chile',
    downloadCV: 'Descargar CV',
    emailLabel: 'Enviar un correo electrónico a',
    phoneLabel: 'Llamar por teléfono a',
    visitProfile: 'Visitar el perfil de',
    emailTitle: 'Enviar un correo a {name} al correo {email}',
    phoneTitle: 'Llamar por teléfono a {name} al número {phone}',
    visitProfileTitle: 'Visitar el perfil de {name} en {network}',
    downloadCVAria: 'Descargar el CV de {name}'
  },
  experience: {
    current: 'Actual',
    years: 'años'
  },
  education: {
    current: 'Actual',
    average: 'Promedio'
  },
  projects: {
    liveDemo: 'Demo en vivo',
    sourceCode: 'Código fuente',
    technologies: 'Tecnologías',
    active: 'Activo',
    inactive: 'Inactivo',
    inDevelopment: 'En desarrollo',
    viewProject: 'Ver el proyecto',
    viewCertificate: 'Ver certificado'
  },
  courses: {
    certificate: 'Certificado',
    completed: 'Completado',
    showBadges: 'Ver {count} insignias más de {issuer}',
    hideBadges: 'Ocultar insignias de {issuer}'
  },
  skillCategories: {
    security: 'Ciberseguridad',
    cloud: 'Cloud & Infraestructura',
    dev: 'Desarrollo & Datos',
    soft: 'Metodologías & Soft Skills'
  },
  notFound: {
    seoTitle: '404 - Página no encontrada',
    title: 'Página no encontrada',
    description: 'Lo sentimos, no pudimos encontrar la página que estás buscando.',
    backHome: 'Volver al inicio'
  }
} as const;
