import type { Project } from '../../data/projects';

export default function ProjectDetail({ project, returnTo = '#/' }: { project: Project; returnTo?: string }) {
  return (
    <article className="project-detail">
      <a className="text-link back-link" href={returnTo}>{returnTo === '#/custom' ? 'Volver al portfolio custom' : 'Todos los proyectos'}</a>
      <div className="detail-heading"><div><h1>{project.name}</h1><p className="eyebrow">{project.category.charAt(0) + project.category.slice(1).toLocaleLowerCase('es')}</p></div><p>{project.summary}</p></div>
      <dl className="project-meta"><div><dt>Aportación</dt><dd>{project.role}</dd></div><div><dt>Tecnologías</dt><dd>{project.technologies.join(' / ')}</dd></div><div><dt>Código fuente</dt><dd><a href={project.repositoryUrl}>Ver en GitHub</a></dd></div></dl>
      <figure className="detail-image"><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} /><figcaption>{project.name} / Vista de la portada del proyecto</figcaption></figure>
      <div className="detail-copy"><section><h2>La idea</h2><p>{project.problem}</p></section><section><h2>Mi aportación</h2><p>{project.contribution}</p></section><section><h2>El alcance</h2><p>{project.scope}</p></section></div>
      <a className="repository-link" href={project.repositoryUrl}><span>Explora el proyecto en GitHub</span><span aria-hidden="true">↗</span></a>
    </article>
  );
}
