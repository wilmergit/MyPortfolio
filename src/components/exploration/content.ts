export const explorationContent = {
  name: 'Wilmer Zeas',
  role: 'Desarrollador web Full Stack desde Gran Canaria.',
  about: 'Soy Wilmer, desarrollador web de Gran Canaria. Me interesa conectar el diseño de una interfaz con lo que ocurre detrás.',
  github: 'https://github.com/wilmergit',
  linkedIn: 'https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/',
  jobs: [
    { name: 'Casamedia', role: 'Desarrollo Full Stack', dates: 'Marzo a julio de 2025', context: 'Erasmus', description: 'Componentes visuales, rutas, controladores y modelos para aplicaciones con Flutter, Node y MongoDB.' },
    { name: 'IsardVDI × ITB', role: 'Desarrollo frontend', dates: 'Noviembre de 2024 a marzo de 2025', context: '', description: 'Desarrollo de componentes frontend con Vue, Storybook y Tailwind CSS.' },
  ],
} as const;

export const directions = [
  { slug: 'archivo', name: 'Archivo', idea: 'El trabajo primero: perfil lateral y Heaven como entrada de un catálogo técnico.' },
  { slug: 'escena', name: 'Escena', idea: 'Heaven como objeto de exposición, con color envolvente y una composición de cartel.' },
  { slug: 'carta', name: 'Carta', idea: 'Un encuentro personal: lectura editorial y proyecto integrado en una narración.' },
] as const;
export type Direction = typeof directions[number]['slug'];
