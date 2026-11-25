import './experience.scss';

const experiences = [
  {
    id: 'casamedia', name: 'Casamedia', role: 'Desarrollo Full Stack / Erasmus',
    period: 'Marzo a julio de 2025', shortPeriod: 'Mar a jul 2025',
    description: 'Componentes visuales, rutas, controladores y modelos para aplicaciones con Flutter, Node y MongoDB.',
    technologies: ['Flutter', 'Node', 'MongoDB'],
  },
  {
    id: 'isard', name: 'IsardVDI × ITB', role: 'Desarrollo frontend',
    period: 'Noviembre de 2024 a marzo de 2025', shortPeriod: 'Nov 2024 a mar 2025',
    description: 'Desarrollo de componentes frontend con Vue, Storybook y Tailwind CSS.',
    technologies: ['Vue', 'Storybook', 'Tailwind CSS'],
  },
] as const;

export default function Experience() {
  return <>{experiences.map((experience) => (
    <section className="experience-card tile" key={experience.id} aria-labelledby={experience.id + '-title'}>
      <div className="experience-heading">
        <h2 id={experience.id + '-title'}>{experience.name}</h2>
        <p className="experience-period" title={experience.period}>{experience.shortPeriod}</p>
      </div>
      <p className="experience-role">{experience.role}</p>
      <p className="experience-description">{experience.description}</p>
      <div className="tech-tags" aria-label="Tecnologías">{experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
    </section>
  ))}</>;
}
