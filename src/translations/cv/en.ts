export const cvTranslations = {
  basics: {
    label: 'Computer Engineer',
    summary:
      'My name is Giovanni Salinas Villa. I am a Computer Engineer with experience integrating APIs and a solid command of programming languages. Alongside my studies, I have pursued self-directed learning in cybersecurity, exploring methods and tools to protect systems and information. I am experienced with CI tools like Git and Jira, and I enjoy collaborating with teams to build scalable and efficient solutions.',
  },
  education: [
    { area: 'Computer Engineering' },
    { area: 'Telecommunications Technician' },
  ],
  work: [
    {
      position: 'Frontend Developer',
      summary:
        'Frontend developer focused on building functional, accessible, and responsive web interfaces. I work with modern tools and AI assistance to optimize components, screens, and flows, while maintaining best practices in agile environments.',
    },
    {
      position: 'Installation Technician',
      summary:
        'Installation of medium voltage (MV) and various cabling: fiber optics, networks, audio, and electrical. Equipment maintenance, remote troubleshooting, and configuration/installation of servers, racks, DVR cameras, switches, and routers.',
    },
    {
      position: 'IT Analyst - Professional Internship',
      summary:
        'Internship in Information Systems Security, acquiring key knowledge in protecting IT infrastructures and managing security risks.',
    },
    {
      position: 'Assistant Technician',
      summary:
        'Technical support in a mining company, point-to-point links, CCTV, and telecommunications in vehicle fleets.',
    },
  ],
  projects: [
    {
      name: 'compu-rescue',
      description:
        'Web app that uses AI to diagnose and provide common solutions for laptops and desktops.',
    },
    {
      name: 'Year Progress Bar',
      description:
        'Generates a progress bar of the time elapsed (in minutes) throughout the year.',
    },
    {
      name: 'Video/Music Downloader',
      description:
        'Download audio or video from YouTube in the best available quality.',
    },
    {
      name: 'Portfolio in Astro',
      description:
        'Personal portfolio built with Astro and TailwindCSS.',
    },
    {
      name: 'TrackTrainer API - Thesis Project',
      description:
        'Spring Boot API that manages business logic for the TrackTrainer project.',
    },
    {
      name: 'TrackTrainer Mobile App - Thesis Project',
      description:
        'Java mobile app that allows TrackTrainer users to record and monitor workouts.',
    },
    {
      name: 'TrackTrainer Admin Portal - Thesis Project',
      description:
        'Administrative web portal to manage the TrackTrainer application.',
    },
    {
      name: 'MyEconoTrack - Expense Management',
      description:
        'Express.js API to manage and track personal expenses.',
    },
    {
      name: 'Real-time Chat',
      description:
        'Real-time chat with React, Express, and Socket.IO.',
    },
  ],
  skills: [
    { name: 'Penetration testing' },
    { name: 'Scrum' },
    { name: 'IT' },
    { name: 'ISO 27001' },
    { name: 'Cybersecurity' },
    { name: 'Python' },
    { name: 'Web development' },
    { name: 'Ethical hacking' },
    { name: 'Microsoft Power BI' },
    { name: 'Problem solving' },
    { name: 'Leadership' },
    { name: 'Public speaking' },
    { name: 'Databases' },
    { name: 'SQL' },
    { name: 'Office' },
    { name: 'Linux' },
    { name: 'Windows' },
    { name: 'ETL' },
    { name: 'Git' },
    { name: 'Jira' },
    { name: 'JavaScript' },
    { name: 'Data analysis' },
    { name: 'Docker' },
    { name: 'Networking' },
    { name: 'Technical documentation' },
  ],
} as const;

export type CvTranslations = typeof cvTranslations;

