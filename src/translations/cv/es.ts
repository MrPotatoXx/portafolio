export const cvTranslations = {
  basics: {
    label: 'Ingeniero en Informática',
    summary:
      'Mi nombre es Giovanni Salinas Villa, tengo 23 años y soy Ingeniero en Informática. Cuento con experiencia en integración de APIs y un buen manejo de lenguajes de programación. Paralelamente a mis estudios, me he dedicado al aprendizaje autodidacta en ciberseguridad, explorando metodologías y herramientas para proteger sistemas e información. Tengo experiencia con herramientas de integración continua como Git y Jira, y me gusta colaborar con equipos para desarrollar soluciones escalables y eficientes.',
  },
  education: [
    { area: 'Ingeniería en Informática' },
    { area: 'Técnico medio en telecomunicaciones' },
  ],
  work: [
    {
      position: 'Desarrollador Frontend',
      summary:
        'Desarrollador frontend enfocado en la creación de interfaces web funcionales, accesibles y responsivas. Trabajo con herramientas modernas y apoyo de IA para optimizar la construcción de componentes, pantallas y flujos, manteniendo buenas prácticas en entornos ágiles.',
    },
    {
      position: 'Técnico Instalador',
      summary:
        'Instalación de media tensión (MT) y cableado: fibra óptica, redes, audio y eléctrico. Mantenimiento de equipos, soporte remoto y configuración/instalación de servidores, racks, cámaras DVR, switches y routers.',
    },
    {
      position: 'Analista de TI - Práctica Profesional',
      summary:
        'Práctica en Seguridad de Sistemas Informáticos, adquiriendo conocimientos clave en protección de infraestructuras de TI y gestión de riesgos.',
    },
    {
      position: 'Técnico Ayudante',
      summary:
        'Apoyo técnico en minera, enlaces punto a punto, CCTV y telecomunicaciones en flota.',
    },
  ],
  projects: [
    {
      name: 'compu-rescue',
      description:
        'Aplicación web que utiliza IA para diagnosticar y facilitar soluciones comunes en computadores portátiles y de escritorio.',
    },
    {
      name: 'Year Progress Bar',
      description:
        'Generador de barra de tiempo transcurrido (en minutos) dentro del año.',
    },
    {
      name: 'Video/Music Downloader',
      description:
        'Descarga audios o videos de YouTube en su mejor calidad.',
    },
    {
      name: 'Portafolio en Astro',
      description:
        'Portafolio personal desarrollado con Astro y TailwindCSS.',
    },
    {
      name: 'TrackTrainer API - Seminario de Grado',
      description:
        'API en Spring Boot para gestionar la lógica de negocio de TrackTrainer.',
    },
    {
      name: 'TrackTrainer App Móvil - Seminario de Grado',
      description:
        'Aplicación móvil en Java para registrar y monitorear ejercicios.',
    },
    {
      name: 'TrackTrainer Portal Administrativo - Seminario de Grado',
      description:
        'Portal web administrativo para gestionar la aplicación TrackTrainer.',
    },
    {
      name: 'MyEconoTrack - Gestión de Gastos',
      description:
        'API en Express.js para gestionar y rastrear gastos personales.',
    },
    {
      name: 'Chat en Tiempo Real',
      description:
        'Chat en tiempo real con React, Express y Socket.IO.',
    },
  ],
  skills: [
    { name: 'Pruebas de penetración' },
    { name: 'Scrum' },
    { name: 'TI' },
    { name: 'ISO 27001' },
    { name: 'Ciberseguridad' },
    { name: 'Python' },
    { name: 'Desarrollo web' },
    { name: 'Hacking ético' },
    { name: 'Microsoft Power BI' },
    { name: 'Resolución de problemas' },
    { name: 'Liderazgo' },
    { name: 'Discursos en público' },
    { name: 'Base de Datos' },
    { name: 'SQL' },
    { name: 'Office' },
    { name: 'Linux' },
    { name: 'Windows' },
    { name: 'ETL' },
    { name: 'GIT' },
    { name: 'Jira' },
    { name: 'JavaScript' },
    { name: 'Análisis de datos' },
    { name: 'Docker' },
    { name: 'Networking' },
    { name: 'Documentación técnica' },
  ],
} as const;

export type CvTranslations = typeof cvTranslations;

