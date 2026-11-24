import type { Project } from '../../data/projects';

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail">
      <a className="text-link back-link" href="#/">← Todos los proyectos</a>
      <div className="detail-heading"><div><p className="eyebrow">{project.category}</p><h1>{project.name}</h1></div><p>{project.summary}</p></div>
      <dl className="project-meta"><div><dt>APORTACIÓN</dt><dd>{project.role}</dd></div><div><dt>TECNOLOGÍAS</dt><dd>{project.technologies.join(' / ')}</dd></div><div><dt>CÓDIGO FUENTE</dt><dd><a href={project.repositoryUrl}>Ver en GitHub ↗</a></dd></div></dl>
      <figure className="detail-image"><img src={project.image.src} alt={project.image.alt} /><figcaption>Heaven / Vista de la portada del proyecto</figcaption></figure>
      <div className="detail-copy"><section><span className="eyebrow">01 / LA IDEA</span><h2>Un espacio para jugar.</h2><p>{project.problem}</p></section><section><span className="eyebrow">02 / MI APORTACIÓN</span><h2>De principio a fin.</h2><p>{project.contribution}</p></section><section><span className="eyebrow">03 / EL ALCANCE</span><h2>Una interfaz para explorar.</h2><p>{project.scope}</p></section></div>
      <a className="repository-link" href={project.repositoryUrl}><span>Explora el proyecto en GitHub</span><span aria-hidden="true">↗</span></a>
    </article>
  );
}
