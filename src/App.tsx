import { useEffect, useRef, useState } from 'react';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Body from './components/body/body';
import ProjectDetail from './components/projects/ProjectDetail';
import { projects } from './data/projects';
import CustomPortfolio from './components/custom/CustomPortfolio';
import Prototype from './components/exploration/Prototype';
import Comparison from './components/exploration/Comparison';
import { directions } from './components/exploration/content';
import './global.scss';

export default function App() {
  const [route, setRoute] = useState(() => window.location.hash);
  const main = useRef<HTMLElement>(null);
  useEffect(() => {
    const navigate = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
    };
    window.addEventListener('hashchange', navigate);
    return () => window.removeEventListener('hashchange', navigate);
  }, []);
  const slug = route.startsWith('#/proyectos/') ? route.slice('#/proyectos/'.length).split('?')[0] : undefined;
  const project = projects.find((item) => item.slug === slug);
  const isHome = !route || route === '#/';
  const isDesign = route === '#/disenos' || route.startsWith('#/disenos/');
  const isCustom = route.split('?')[0] === '#/custom' || isDesign;
  const isExploration = route === '#/explorar' || route.startsWith('#/explorar/');
  const direction = directions.find((item) => item.slug === route.split('/')[2]?.split('?')[0]);
  const origin = new URLSearchParams(route.split('?')[1]).get('desde');
  const returnTo = origin === 'custom' ? '#/custom' : directions.some((item) => item.slug === origin) ? `#/explorar/${origin}` : '#/';
  useEffect(() => {
    document.title = `${isExploration ? direction?.name ?? 'Comparar portadas' : isCustom ? 'Portfolio custom' : isHome ? 'Desarrollador Web Full Stack' : project?.name ?? 'Página no encontrada'} · Wilmer Zeas`;
    if (isDesign) window.location.replace('#/custom');
  }, [isHome, isCustom, isDesign, isExploration, direction, project]);
  if (isExploration) return direction ? <Prototype direction={direction.slug} capture={route.endsWith('?capture')} /> : <Comparison />;
  if (isCustom) return <CustomPortfolio route={route} />;
  return (
    <div className="page-shell">
      <a className="skip-link" href="#contenido" onClick={(event) => { event.preventDefault(); main.current?.focus(); }}>Saltar al contenido</a>
      <Header />
      <main id="contenido" ref={main} tabIndex={-1}>
        {isHome ? <><Intro /><Body /></> : project ? <ProjectDetail project={project} returnTo={returnTo} /> : (
          <section className="not-found"><p className="eyebrow">404 / Fuera del mapa</p><h1>Esta página no existe.</h1><a href="#/">Volver a la portada ↗</a></section>
        )}
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Wilmer Zeas Rodriguez</span><span>Diseñado con intención. Construido con React.</span><a href="#/custom">Ver propuesta custom</a><a href="https://github.com/wilmergit">GitHub ↗</a></footer>
    </div>
  );
}
