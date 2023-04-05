import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  storybook,
  threejs,
  heronlist,
  esport,
  tropheus,
} from '../assets';
import {
  ExperiencesType,
  NavLinksType,
  ProjectsType,
  ServicesType,
  TechnologiesType,
  TestimonialsType,
} from '../types/contants';

const navLinks: NavLinksType[] = [
  {
    id: 'about',
    title: 'Sobre',
  },
  {
    id: 'experiences',
    title: 'Experiências',
  },
  {
    id: 'work',
    title: 'Projetos',
  },
];

const services: ServicesType[] = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Native Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies: TechnologiesType[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Storybook',
    icon: storybook,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
  {
    name: 'docker',
    icon: docker,
  },
];

const testimonials: TestimonialsType[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    index: 0,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    index: 1,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    index: 2,
  },
];

const projects: ProjectsType[] = [
  {
    name: 'Heron List ',
    description:
      'Webservice de agendamento, fila, faturamento e gerenciamento de pacientes para Clínica Multialcance.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
      {
        name: 'storybook',
        color: 'pink-text-gradient',
      },
    ],
    image: heronlist,
    source_code_link: 'https://github.com/i-zzaa/heron-list-web',
  },
  {
    name: 'eSpot',
    description: 'Sistema de match para jogos online. Curso da rocketseat.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'react-native',
        color: 'blue-text-gradient',
      },
      {
        name: 'vite',
        color: 'green-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'pink-text-gradient',
      },
    ],
    image: esport,
    source_code_link: 'https://github.com/i-zzaa/eSport',
  },
  {
    name: 'Tropheus',
    description: 'Sistema ',
    tags: [
      {
        name: 'Jest',
        color: 'blue-text-gradient',
      },
      {
        name: 'vue2',
        color: 'green-text-gradient',
      },
      {
        name: 'Bootstrap',
        color: 'pink-text-gradient',
      },
      {
        name: 'Travis CI',
        color: 'pink-text-gradient',
      },
    ],
    image: tropheus,
    source_code_link: 'https://github.com/isa-desenvolvimento/trophy-front',
  },
];

export { navLinks, services, technologies, testimonials, projects };
