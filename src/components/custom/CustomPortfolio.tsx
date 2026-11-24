import { useEffect, useRef } from 'react';
import type { MouseEvent } from 'react';
import { projects } from '../../data/projects';
import type { Project } from '../../data/projects';
import './custom-portfolio.css';

const linkedIn = 'https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg className="custom-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M3 12h18M13 4l8 8-8 8'} /></svg>;
}

function scrollToSection(event: MouseEvent<HTMLAnchorElement>, id: string) {
  // Preserve normal browser behaviour for modifier clicks and opening a new tab.
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const section = document.getElementById(id);
  section?.scrollIntoView({ block: 'start' });
  section?.focus({ preventScroll: true });
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <section className="custom-project" id="custom-project" tabIndex={-1} aria-labelledby="custom-project-title">
      <div className="custom-project-top custom-container">
        <h2 id="custom-project-title">{project.name}</h2>
        <a className="custom-project-link" href={`#/proyectos/${project.slug}?desde=custom`}><span>Explorar el proyecto</span><Arrow diagonal /></a>
      </div>
      <div className="custom-project-stage custom-container">
        <p>{project.summary}</p>
        <svg className="custom-cartridge" viewBox={project.image.cardViewBox} role="img" aria-label={project.image.alt}>
          <image href={project.image.src} width={project.image.width} height={project.image.height} />
        </svg>
        <span className="custom-project-role">{project.role}<br />{project.technologies.join(', ')}</span>
      </div>
      <div className="custom-project-bottom custom-container"><span>Una web para el mundo del gaming.</span><a href={project.repositoryUrl}>Ver el código<Arrow diagonal /></a></div>
    </section>
  );
}

export default function CustomPortfolio({ route }: { route: string }) {
  const main = useRef<HTMLElement>(null);
  const project = projects.find((item) => item.slug === 'heaven');
  useEffect(() => {
    const section = new URLSearchParams(route.split('?')[1]).get('seccion');
    const sections: Record<string, string> = { proyectos: 'custom-project', experiencia: 'custom-experience', contacto: 'custom-contact' };
    const target = section ? document.getElementById(sections[section]) : main.current;
    target?.focus({ preventScroll: true });
    if (section) target?.scrollIntoView({ block: 'start' });
  }, [route]);

  return (
    <div className="custom-portfolio">
      <a className="custom-skip" href="#custom-content" onClick={(event) => { event.preventDefault(); main.current?.focus(); }}>Saltar al contenido</a>
      <header className="custom-header custom-container">
        <a className="custom-wordmark" href="#/" aria-label="Wilmer Zeas, volver al original">W/Z</a>
        <nav aria-label="Navegación de la propuesta custom">
          <a href="#/custom?seccion=proyectos" onClick={(event) => scrollToSection(event, 'custom-project')}>Proyectos</a>
          <a href="#/custom?seccion=experiencia" onClick={(event) => scrollToSection(event, 'custom-experience')}>Experiencia</a>
          <a href="#/custom?seccion=contacto" onClick={(event) => scrollToSection(event, 'custom-contact')}>Contacto</a>
        </nav>
        <a className="custom-original" href="#/">Ver original<Arrow diagonal /></a>
      </header>
      <main id="custom-content" ref={main} tabIndex={-1}>
        <section className="custom-hero custom-container" aria-labelledby="custom-name">
          <h1 id="custom-name"><span>WILMER</span> <span>ZEAS</span></h1>
          <div className="custom-hero-baseline">
            <p>Desarrollador web Full Stack<br />desde Gran Canaria.</p>
            {project && <a className="custom-primary" href={`#/proyectos/${project.slug}?desde=custom`}>Conoce Heaven<Arrow diagonal /></a>}
          </div>
        </section>
        {project && <FeaturedProject project={project} />}
        <section className="custom-about custom-container" aria-labelledby="custom-about-title">
          <h2 id="custom-about-title">Del diseño<br />al código.</h2>
          <div><p>Soy Wilmer, desarrollador web de Gran Canaria. Me interesa conectar el diseño de una interfaz con lo que ocurre detrás.</p><a className="custom-inline-link" href="https://github.com/wilmergit">Mi código en GitHub<Arrow diagonal /></a></div>
        </section>
        <section className="custom-experience custom-container" id="custom-experience" tabIndex={-1} aria-labelledby="custom-experience-title">
          <h2 id="custom-experience-title">Donde he construido.</h2>
          <article className="custom-job">
            <div className="custom-job-heading"><h3>Casamedia</h3><p>Marzo a julio de 2025<br />Erasmus</p></div>
            <div className="custom-job-copy"><p>Desarrollo Full Stack</p><p>Componentes visuales, rutas, controladores y modelos para aplicaciones con Flutter, Node y MongoDB.</p></div>
          </article>
          <article className="custom-job">
            <div className="custom-job-heading"><h3>IsardVDI × ITB</h3><p>Noviembre de 2024<br />a marzo de 2025</p></div>
            <div className="custom-job-copy"><p>Desarrollo frontend</p><p>Componentes de interfaz con Vue, Storybook y Tailwind CSS.</p></div>
          </article>
        </section>
        <section className="custom-contact" id="custom-contact" tabIndex={-1} aria-labelledby="custom-contact-title">
          <div className="custom-container"><h2 id="custom-contact-title">¿Construimos<br />algo juntos?</h2><a href={linkedIn} className="custom-contact-link">Hablemos en LinkedIn<Arrow diagonal /></a></div>
        </section>
      </main>
      <footer className="custom-footer custom-container"><span>Wilmer Zeas Rodriguez © {new Date().getFullYear()}</span><a href="#/">Volver al original</a><a href="https://github.com/wilmergit">GitHub<Arrow diagonal /></a></footer>
    </div>
  );
}
