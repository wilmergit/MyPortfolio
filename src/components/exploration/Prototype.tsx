import { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';
import { directions, explorationContent as content } from './content';
import type { Direction } from './content';
import './archivo.css';
import './escena.css';
import './carta.css';

function ProjectLink({ project, direction, primary = false }: { project: Project; direction: Direction; primary?: boolean }) {
  return <a className={primary ? 'exp-primary' : 'exp-project-link'} href={`#/proyectos/${project.slug}?desde=${direction}`}>Ver el proyecto</a>;
}

function Screenshot({ project }: { project: Project }) {
  return <figure className="exp-screenshot"><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} /></figure>;
}

function ProjectMeta({ project }: { project: Project }) {
  return <div className="exp-project-meta"><p>{project.summary}</p><dl><div><dt>Aportación</dt><dd>{project.role}</dd></div><div><dt>Tecnologías</dt><dd>{project.technologies.join(', ')}</dd></div></dl><a href={project.repositoryUrl}>Código en GitHub</a></div>;
}

function About() {
  return <section className="exp-about" aria-labelledby="exp-about-heading"><h2 id="exp-about-heading">Diseño y desarrollo.</h2><div className="exp-about-copy"><p>{content.about}</p><a href={content.github}>Mi código en GitHub</a></div></section>;
}

function Experience() {
  return <section className="exp-experience" aria-labelledby="exp-experience-heading"><h2 id="exp-experience-heading">Casamedia e IsardVDI.</h2>{content.jobs.map((job) => <article className="exp-job" key={job.name}><div className="exp-job-title"><h3>{job.name}</h3><p>{job.role}</p></div><div className="exp-job-date"><p>{job.dates}</p>{job.context && <p>{job.context}</p>}</div><p className="exp-job-description">{job.description}</p></article>)}</section>;
}

function Contact() {
  return <section className="exp-contact"><h2>¿Construimos algo juntos?</h2><a href={content.linkedIn}>Hablemos en LinkedIn</a></section>;
}

function Archivo({ project }: { project: Project }) {
  return <>
    <div className="archive-layout">
      <section className="archive-identity"><h1><span>Wilmer</span>{' '}<span>Zeas</span></h1><p>{content.role}</p><ProjectLink project={project} direction="archivo" primary /></section>
      <section className="archive-cover"><div className="archive-project-name"><h2>{project.name}</h2><span>Web de videojuegos</span></div><Screenshot project={project} /></section>
    </div>
    <div className="archive-follow"><div className="archive-notes"><ProjectMeta project={project} /></div><Experience /><About /><Contact /></div>
  </>;
}

function Escena({ project }: { project: Project }) {
  return <>
    <section className="scene-hero">
      <h1>Wilmer<br />Zeas</h1>
      <figure className="scene-object"><svg viewBox={project.image.cardViewBox} role="img" aria-label={project.image.alt}><image href={project.image.src} width={project.image.width} height={project.image.height} /></svg></figure>
      <div className="scene-intro"><p>{content.role}</p><ProjectLink project={project} direction="escena" primary /></div>
    </section>
    <section className="scene-project"><h2>{project.name}</h2><ProjectMeta project={project} /><Screenshot project={project} /></section>
    <About /><Experience /><Contact />
  </>;
}

function Carta({ project }: { project: Project }) {
  return <>
    <section className="letter-hero"><h1>Wilmer Zeas.</h1><p>{content.role}</p><ProjectLink project={project} direction="carta" primary /></section>
    <About />
    <section className="letter-project"><div className="letter-project-heading"><h2>{project.name}</h2><ProjectLink project={project} direction="carta" /></div><Screenshot project={project} /><ProjectMeta project={project} /></section>
    <Experience /><Contact />
  </>;
}

export default function Prototype({ direction, capture = false }: { direction: Direction; capture?: boolean }) {
  const main = useRef<HTMLElement>(null);
  const project = projects.find((item) => item.slug === 'heaven');
  useEffect(() => {
    document.title = `${directions.find((item) => item.slug === direction)?.name} | Wilmer Zeas`;
    main.current?.focus({ preventScroll: true });
  }, [direction]);
  if (!project) return null;
  return <div className={`exploration exp-${direction}`}>
    {!capture && <nav className="exp-comparison-nav" aria-label="Comparar propuestas"><a href="#/explorar">Comparar todas</a>{directions.map((item) => <a href={`#/explorar/${item.slug}`} key={item.slug} aria-current={direction === item.slug ? 'page' : undefined}>{item.name}</a>)}<a href="#/custom">Rediseño actual</a></nav>}
    <a href="#exp-content" className="exp-skip" onClick={(event) => { event.preventDefault(); main.current?.focus(); }}>Saltar al contenido</a>
    <div className="exp-container">
      <header className="exp-header"><a className="exp-wordmark" href="#/explorar">Wilmer Zeas</a><div><a href={content.github}>GitHub</a><a href={content.linkedIn}>Contacto</a></div></header>
      <main id="exp-content" ref={main} tabIndex={-1}>
        {direction === 'archivo' ? <Archivo project={project} /> : direction === 'escena' ? <Escena project={project} /> : <Carta project={project} />}
      </main>
      <footer className="exp-footer"><span>Wilmer Zeas Rodriguez © {new Date().getFullYear()}</span><a href="#/explorar">Volver a comparar</a></footer>
    </div>
  </div>;
}
