import type { Resume } from '../types/resume';

export const RESUME: Resume = {
  basics: {
    name: 'Andrés Vizcaíno Salazar',
    label: 'Full Stack Developer',
    email: 'pipe.jaider@gmail.com',
    url: 'https://andresvizcaino.com',
    image: '/photo-andres-vizcaino.webp',
    location: {
      city: 'Cartagena',
      country: 'Colombia',
    },
    profiles: [
      {
        network: 'LinkedIn',
        username: 'andres-vizcaino',
        url: 'https://www.linkedin.com/in/andres-vizcaino-salazar/',
      },
      {
        network: 'GitHub',
        username: 'pipegoods',
        url: 'https://github.com/pipegoods',
      },
    ],
    summary:
      "I'm a Full Stack Developer with 5+ years of experience in the industry. I have worked with different technologies and frameworks, but I'm always looking to learn new things. I'm a team player and I like to work in a collaborative environment.",
  },
  work: [
    {
      name: 'igloolab',
      position: 'Full Stack Developer',
      url: 'https://igloolab.co',
      summary:
        'Igloolab is a digital agency that helps companies to build their digital products.',
      startDate: 'Abr 2021',
      type: 'Remote',
    },
    {
      name: 'Agencia Sima Digital',
      position: 'Web Master',
      url: 'https://agenciasima.com',
      startDate: 'May 2020',
      endDate: 'Abr 2021',
      type: 'Freelance',
    },
  ],
  education: [
    {
      institution: 'Universidad de Cartagena',
      area: 'Ingeniero de Sistemas',
      studyType: 'Título Profesional',
      startDate: 'Feb 2016',
      endDate: 'Dic 2022',
      score: '4.0',
      url: 'https://www.unicartagena.edu.co',
    },
    {
      institution: 'Cedesarrollo Comfenalco',
      area: 'Tecnico laboral en Sistemas',
      studyType: 'Media Tecnica',
      startDate: 'Feb 2014',
      endDate: 'Nov 2015',
    },
  ],
  skills: [
    'JavaScript',
    'Astro',
    'Next Js',
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
  ],
  projects: [
    {
      name: 'LBP Colombia',
      url: 'https://lpbcol-app.vercel.app/',
      technologies: ['Astro', 'Hono', 'TypeScript', 'Tailwind CSS'],
      description:
        'Aplicación para la liga profesional de Beisbol de Colombia (Fines educativos)',
    },
    {
      name: 'Chat Bot Tesis',
      url: 'https://chatbot-tesis.vercel.app/',
      technologies: [
        'React Js',
        'Tailwind CSS',
        'TypeScript',
        'Open Ai',
      ],
      description: 'Chat bot con AI que te ayudará con tu tesis',
    },
    {
      name: 'Pets Cédula',
      url: 'https://chatbot-tesis.vercel.app/',
      technologies: [
        'Next JS',
        'Vercel',
        'TypeScript',
        'Prisma ORM',
        'PostgreSQL',
      ],
      description:
        'Crea una cédula para tu mascota, genera un QR único para cada mascota',
    },
    {
      name: 'El Bicho App',
      url: 'https://github.com/pipegoods/ElBichoAPP',
      technologies: ['Firebase', 'Vue Js'],
      description:
        'Video juego sobre el bicho (Cristiano Ronaldo), el cual debes anotar goles y obtener el mayor puntaje',
    },
  ],
  certificates: [
    {
      name: 'Agile Project Management',
      date: 'Nov 2023',
      issuer: 'Google (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/certificate/6Z5W383U67DA',
    },
    {
      name: 'Introduction to Front-End Development',
      date: 'Nov 2023',
      issuer: 'Meta (Coursera)',
      url: 'https://www.coursera.org/account/accomplishments/certificate/ZJ42JSUDDUVV',
    },
    {
      name: 'Role Certification Event Planner',
      date: 'May 2022',
      issuer: 'Spotme',
      url: 'https://academy.spotme.com/course/event-planner',
    },
  ],
};
