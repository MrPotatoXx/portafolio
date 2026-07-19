export const translations = {
  sections: {
    hero: 'Home',
    about: 'About me',
    experience: 'Experience',
    education: 'Education',
    projects: 'Projects',
    courses: 'Courses',
    skills: 'Skills'
  },
  sectionIds: {
    hero: 'home',
    about: 'about',
    experience: 'experience',
    education: 'education',
    projects: 'projects',
    courses: 'courses',
    skills: 'skills'
  },
  meta: {
    title: 'Giovanni Salinas - Portfolio',
    description: 'Computer Engineer in Santiago, Chile. Web development and cybersecurity; API integration, Astro and Tailwind CSS. Explore projects, experience, education and certifications.',
    keywords: 'Giovanni Salinas, Computer Engineering, Cybersecurity, Web Development, Programming, Python, Ethical Hacker'
  },
  hero: {
    greeting: 'Hello, I am',
    profession: 'Computer Engineer',
    location: 'Santiago, Chile',
    downloadCV: 'Download CV',
    emailLabel: 'Send an email to',
    phoneLabel: 'Call',
    visitProfile: 'Visit profile of',
    emailTitle: 'Send an email to {name} at {email}',
    phoneTitle: 'Call {name} at {phone}',
    visitProfileTitle: 'Visit {name} on {network}',
    downloadCVAria: 'Download CV of {name}'
  },
  experience: {
    current: 'Present',
    years: 'years'
  },
  education: {
    current: 'Present',
    average: 'Average'
  },
  projects: {
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    technologies: 'Technologies',
    active: 'Active',
    inactive: 'Inactive',
    inDevelopment: 'In development',
    viewProject: 'View project',
    viewCertificate: 'View certificate'
  },
  courses: {
    certificate: 'Certificate',
    completed: 'Completed',
    showBadges: 'Show {count} more {issuer} badges',
    hideBadges: 'Hide {issuer} badges'
  },
  skillCategories: {
    security: 'Cybersecurity',
    cloud: 'Cloud & Infrastructure',
    dev: 'Development & Data',
    soft: 'Methodologies & Soft Skills'
  },
  notFound: {
    seoTitle: '404 - Page not found',
    title: 'Page not found',
    description: "Sorry, we couldn't find the page you're looking for.",
    backHome: 'Back to home'
  }
} as const;
