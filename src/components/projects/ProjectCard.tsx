import type { Project } from '../../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card tile" href={`#/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.name}`}>
      <div className="tile-top"><span className="eyebrow">Proyecto destacado</span><span className="eyebrow">{project.category}</span></div>
      <div className="project-caption"><h2>{project.name}</h2><span className="project-cta">Ver proyecto</span></div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-image">
        <svg viewBox={project.image.cardViewBox ?? `0 0 ${project.image.width} ${project.image.height}`} role="img" aria-label={project.image.alt}>
          <image href={project.image.src} width={project.image.width} height={project.image.height} />
        </svg>
      </div>
    </a>
  );
}
