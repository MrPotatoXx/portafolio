export const messages = {
  lang: 'en' as const,
  site: {
    title: 'Giovanni Salinas - Portfolio',
    description:
      'Computer Engineer based in Santiago, Chile. Web development and cybersecurity; API integration, Astro and Tailwind CSS. Explore projects, experience, education and certifications.',
    applicationName: 'Giovanni Salinas Portfolio',
  },
  sections: {
    about: 'About me',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    certificates: 'Certificates',
    skills: 'Skills',
  },
  hero: {
    emailTitle: (name: string, email: string) => `Send an email to ${name} at ${email}`,
    emailAria: (name: string) => `Send email to ${name}`,
    phoneTitle: (name: string, phone: string) => `Call ${name} at ${phone}`,
    phoneAria: (name: string) => `Call ${name}`,
    socialTitle: (name: string, network: string) => `Visit ${name}'s profile on ${network}`,
    socialAria: (name: string, network: string) => `Visit ${name}'s profile on ${network}`,
    downloadCv: 'Download CV',
  },
  work: {
    current: 'Present',
  },
  education: {
    average: 'GPA',
  },
  projects: {
    active: 'Active',
    inactive: 'Inactive',
    seeProject: (name: string) => `View project ${name}`,
  },
  certificates: {
    viewCertificate: 'View certificate',
  },
  locales: {
    og: 'en_US',
    hreflang: 'en',
  },
};
