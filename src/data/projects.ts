import heavenHero from '../assets/images/heaven-hero.png';

export interface Project {
  slug: string;
  name: string;
  category: string;
  summary: string;
  role: string;
  technologies: readonly string[];
  image: { src: string; alt: string; width: number; height: number; cardViewBox?: string };
  problem: string;
  contribution: string;
  scope: string;
  repositoryUrl: string;
}

// Una sola fuente de contenido para la tarjeta y la ficha.
export const projects: readonly Project[] = [
  {
    slug: 'heaven',
    name: 'Heaven',
    category: 'WEB / VIDEOJUEGOS',
    summary: 'Un punto de encuentro para la compraventa de videojuegos.',
    role: 'Desarrollo completo',
    technologies: ['React'],
    image: {
      src: heavenHero,
      alt: 'Portada de Heaven, con un cartucho morado como elemento principal.',
      width: 1895,
      height: 921,
      cardViewBox: '1120 70 420 500',
    },
    problem: 'Heaven nace como una web concebida para la compraventa de videojuegos: un espacio para presentar una experiencia centrada en el mundo del gaming.',
    contribution: 'Desarrollé el proyecto completo, desde la construcción de la interfaz hasta la integración de sus distintas pantallas y funcionalidades.',
    scope: 'Un proyecto web sin base de datos, centrado en construir la experiencia visual y la navegación de una web de videojuegos.',
    repositoryUrl: 'https://github.com/wilmergit/Heaven',
  },
];
