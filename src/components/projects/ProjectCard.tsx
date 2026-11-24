import type { Project } from '../../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a className="project-card tile" href={`#/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.name}`}>
      <div className="tile-top"><span className="eyebrow">01 / PROYECTO DESTACADO</span><span className="round-arrow" aria-hidden="true">↗</span></div>
      <div className="project-image"><img src={project.image.src} alt={project.image.alt} /></div>
      <div className="project-caption"><div><span className="eyebrow">{project.category}</span><h2>{project.name}</h2><p>{project.summary}</p></div><span className="project-cta">Ver proyecto ↗</span></div>
    </a>
  );
}
