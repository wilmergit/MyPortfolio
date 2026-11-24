import { useEffect, useRef, useState } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Body from './components/body/body';
import ProjectDetail from './components/projects/ProjectDetail';
import { projects } from './data/projects';
import './global.scss';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    const navigate = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
      main.current?.focus();
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  const slug = route.startsWith('#/proyectos/') ? route.slice('#/proyectos/'.length) : undefined;
  const project = projects.find((item) => item.slug === slug);
  const isHome = !route || route === '#/';
  useEffect(() => {
    document.title = `${isHome ? 'Desarrollador Web Full Stack' : project?.name ?? 'Página no encontrada'} · Wilmer Zeas`;
  }, [isHome, project]);
  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido" onClick={(event) => { event.preventDefault(); main.current?.focus(); }}>Saltar al contenido</a>
      <Header />
      <main id="contenido" ref={main} tabIndex={-1}>
        {isHome ? <><Intro /><Body /></> : project ? <ProjectDetail project={project} /> : (
          <section className="not-found"><p className="eyebrow">404 / Fuera del mapa</p><h1>Esta página no existe.</h1><a href="#/">Volver a la portada ↗</a></section>
        )}
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Wilmer Zeas Rodriguez</span><span>Diseñado con intención. Construido con React.</span><a href="https://github.com/wilmergit">GitHub ↗</a></footer>
    </div>
  );
}
