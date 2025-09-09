export const messages = {
  lang: 'es' as const,
  site: {
    title: 'Giovanni Salinas - Portafolio',
    description:
      'Ingeniero en Informática en Santiago, Chile. Desarrollo web y ciberseguridad; integración de APIs, Astro y Tailwind CSS. Explora proyectos, experiencia, educación y certificaciones.',
    applicationName: 'Portafolio de Giovanni Salinas',
  },
  sections: {
    about: 'Acerca de mí',
    experience: 'Experiencia',
    education: 'Educación',
    projects: 'Proyectos',
    certificates: 'Certificaciones',
    skills: 'Habilidades',
  },
  hero: {
    emailTitle: (name: string, email: string) =>
      `Enviar un correo electrónico a ${name} al correo ${email}`,
    emailAria: (name: string) => `Enviar correo a ${name}`,
    phoneTitle: (name: string, phone: string) =>
      `Llamar por teléfono a ${name} al número ${phone}`,
    phoneAria: (name: string) => `Llamar a ${name}`,
    socialTitle: (name: string, network: string) =>
      `Visitar el perfil de ${name} en ${network}`,
    socialAria: (name: string, network: string) =>
      `Visitar el perfil de ${name} en ${network}`,
    downloadCv: 'Descargar CV',
  },
  work: {
    current: 'Actual',
  },
  education: {
    average: 'Promedio',
  },
  projects: {
    active: 'Activo',
    inactive: 'Inactivo',
    seeProject: (name: string) => `Ver el proyecto ${name}`,
  },
  certificates: {
    viewCertificate: 'Ver certificado',
  },
  locales: {
    og: 'es_CL',
    hreflang: 'es',
  },
};
