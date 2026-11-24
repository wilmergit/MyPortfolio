import type { Project } from '../../data/projects';
import './future-concepts.css';

export type FutureConceptName = 'modulo' | 'orbita' | 'signal';

const github = 'https://github.com/wilmergit';
const linkedin = 'https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/';

function ProjectObject({ project }: { project: Project }) {
  return <svg className="future-object" viewBox={project.image.cardViewBox ?? `0 0 ${project.image.width} ${project.image.height}`} role="img" aria-label={project.image.alt}>
    <image href={project.image.src} width={project.image.width} height={project.image.height} />
  </svg>;
}

function ProjectAction({ project, children = 'Ver proyecto' }: { project: Project; children?: string }) {
  return <a className="future-action project-cta" href={`#/proyectos/${project.slug}`}>{children}<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 19 19 5M5 5h14v14" /></svg></a>;
}

function ConceptHeader() {
  return <header className="future-header"><a href="#/" className="future-brand">Wilmer Zeas Rodriguez</a><nav aria-label="Navegación principal"><a href="#/proyectos/heaven">Heaven</a><a href={github}>GitHub</a><a href={linkedin}>Hablemos</a></nav></header>;
}

function ConceptFooter() {
  return <footer className="future-footer"><span>© {new Date().getFullYear()} Wilmer Zeas Rodriguez</span><span>Gran Canaria, España</span><a href="#/disenos">Comparar diseños</a></footer>;
}

function Modulo({ project }: { project: Project }) {
  return <>
    <section className="modulo-masthead"><h1>Wilmer Zeas</h1><p>Desarrollador Web<br /> <strong>Full Stack</strong></p></section>
    <div className="modulo-grid">
      <section className="modulo-profile future-panel"><div className="profile-monogram" aria-hidden="true">wz.</div><h2>De Gran Canaria.<br />Con curiosidad.</h2><p>Me interesa conectar el diseño de una interfaz con lo que ocurre detrás.</p><a href={github}>Explorar mi código</a></section>
      <section className="modulo-project future-panel"><div className="modulo-project-title"><h2>{project.name}</h2><ProjectAction project={project} /></div><p>{project.summary}</p><div className="modulo-stage"><ProjectObject project={project} /></div><div className="modulo-project-meta"><span>{project.role}</span><span>{project.technologies.join(' / ')}</span></div></section>
      <section className="modulo-casa future-panel"><div className="future-badge-title"><h2>Casamedia</h2><span aria-hidden="true">[wz]</span></div><p>Desarrollo Full Stack / Erasmus</p><p className="future-date">Marzo a julio de 2025</p><p>Componentes visuales, rutas, controladores y modelos.</p><div className="future-chips"><span>Flutter</span><span>Node</span><span>MongoDB</span></div></section>
      <section className="modulo-isard future-panel"><h2>IsardVDI<br />× ITB</h2><p>Componentes frontend con Vue, Storybook y Tailwind CSS.</p><p className="future-date">Noviembre de 2024 a marzo de 2025</p></section>
      <section className="modulo-contact future-panel"><h2>¿Construimos<br />algo juntos?</h2><a href={linkedin}>Hablemos en LinkedIn</a><svg className="module-contact-mark" aria-hidden="true" viewBox="0 0 80 80"><path d="M15 65 65 15M15 15h50v50" /></svg></section>
    </div>
  </>;
}

function Orbita({ project }: { project: Project }) {
  return <>
    <div className="orbita-hero">
      <section className="orbita-identity"><h1>Wilmer<br />Zeas<span aria-hidden="true">/</span></h1><p className="orbita-role">Desarrollador Web<br /><strong>Full Stack</strong><span className="orbita-place">Gran Canaria, España</span></p><ProjectAction project={project}>Explorar Heaven</ProjectAction><div className="orbita-project-intro"><h2>{project.name}</h2><p>{project.summary}</p></div></section>
      <figure className="orbita-product"><div className="orbita-product-stage"><ProjectObject project={project} /></div><figcaption><span>{project.role}</span><span>{project.technologies.join(' / ')}</span></figcaption></figure>
    </div>
    <section className="orbita-experience"><h2>Experiencia<br />en desarrollo.</h2><div className="orbita-records"><article><div><h3>Casamedia</h3><p>Desarrollo Full Stack / Erasmus</p></div><p>Marzo a julio de 2025</p><p>Componentes visuales, rutas, controladores y modelos con Flutter, Node y MongoDB.</p></article><article><div><h3>IsardVDI × ITB</h3><p>Desarrollo de componentes frontend</p></div><p>Noviembre de 2024 a marzo de 2025</p><p>Vue, Storybook y Tailwind CSS.</p></article></div></section>
    <div className="orbita-close"><section><h2>Entre la interfaz<br />y lo que hay detrás.</h2><p>Soy Wilmer, desarrollador web de Gran Canaria. La curiosidad es mi punto de partida.</p><a href={github}>Explorar mi código en GitHub</a></section><section className="orbita-contact"><h2>¿Construimos<br />algo juntos?</h2><a href={linkedin}>Hablemos en LinkedIn</a></section></div>
  </>;
}

function Signal({ project }: { project: Project }) {
  return <>
    <section className="signal-title"><h1>Wilmer<br />Zeas</h1><div><p>Desarrollador<br />Web Full Stack<br /><span className="signal-location">Gran Canaria, España</span></p><a href={github}>Mi código en GitHub</a></div></section>
    <div className="signal-grid">
      <section className="signal-project future-panel"><div className="signal-project-heading"><h2>{project.name}</h2><ProjectAction project={project} /></div><p>{project.summary}</p><figure><img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} /><figcaption>{project.role} / {project.technologies.join(' / ')}</figcaption></figure></section>
      <section className="signal-pass future-panel"><div className="signal-pass-head"><span className="signal-pass-monogram" aria-hidden="true">WZ</span><div><p>Experiencia / Erasmus</p><h2>Casamedia</h2></div></div><dl><div><dt>Aportación</dt><dd>Desarrollo Full Stack</dd></div><div><dt>Periodo</dt><dd>Marzo a julio de 2025</dd></div></dl><p>Componentes visuales, rutas, controladores y modelos en el backend.</p><div className="future-chips"><span>Flutter</span><span>MongoDB</span><span>Node</span></div><div className="signal-pass-end"><span>Wilmer Zeas Rodriguez</span><span aria-hidden="true">/////</span></div></section>
      <section className="signal-isard future-panel"><h2>IsardVDI<br />× ITB</h2><p>Componentes frontend con Vue, Storybook y Tailwind CSS.</p><p>Noviembre de 2024 a marzo de 2025</p></section>
      <section className="signal-about future-panel"><h2>Curiosidad<br />como punto<br />de partida.</h2><p>Soy Wilmer, desarrollador web de Gran Canaria. Me interesa conectar el diseño de una interfaz con lo que ocurre detrás.</p></section>
    </div>
    <section className="signal-contact"><h2>Hablemos.</h2><a href={linkedin}>Conectar en LinkedIn<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 19 19 5M5 5h14v14" /></svg></a></section>
  </>;
}

export default function FutureConcept({ concept, project }: { concept: FutureConceptName; project: Project }) {
  return <div className={`future-concept future-${concept}`}>
    <div className="future-container">
      <a className="future-skip" href="#future-content" onClick={(event) => { event.preventDefault(); document.getElementById('future-content')?.focus(); }}>Saltar al contenido</a>
      <ConceptHeader />
      <main id="future-content" tabIndex={-1}>{concept === 'modulo' ? <Modulo project={project} /> : concept === 'orbita' ? <Orbita project={project} /> : <Signal project={project} />}</main>
      <ConceptFooter />
    </div>
  </div>;
}
