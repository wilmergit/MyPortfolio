import { useEffect, useState } from 'react';
import Header from '../header/header';
import Intro from '../intro/intro';
import Body from '../body/body';
import { projects } from '../../data/projects';
import FutureConcept from './FutureConcept';
import './designs.scss';

const options = [
  { slug: 'actual', name: 'Actual', theme: 'Punto de partida', description: 'Nombre rojo, mosaico de credenciales y contraste directo.', href: '#/' },
  { slug: 'modulo', name: 'Módulo', theme: 'Mosaico gráfico', description: 'Marco oscuro, paneles menta y lila y composición modular alrededor de Heaven.', href: '#/disenos/modulo', concept: 'modulo' },
  { slug: 'orbita', name: 'Órbita', theme: 'Objeto y espacio', description: 'Grafito, plata y naranja. El cartucho como objeto central y experiencia en registros.', href: '#/disenos/orbita', concept: 'orbita' },
  { slug: 'signal', name: 'Signal', theme: 'Cartel y credencial', description: 'Rojo intenso, titulares condensados y una ficha de experiencia con carácter gráfico.', href: '#/disenos/signal', concept: 'signal' },
] as const;

const previousOptions = [
  { slug: 'editorial', name: 'Editorial', theme: 'Inspirada en Editorial', description: 'Titulares condensados, lectura con serif y cortes de revista.', href: '#/disenos/editorial' },
  { slug: 'tecnica', name: 'Técnica', theme: 'Inspirada en Cobalt', description: 'Paneles rectos, estructura precisa y fichas de desarrollo.', href: '#/disenos/tecnica' },
  { slug: 'producto', name: 'Producto', theme: 'Inspirada en Coral', description: 'Superficies suaves y una imagen de Heaven con más protagonismo.', href: '#/disenos/producto' },
] as const;

export default function DesignLab({ route }: { route: string }) {
  const [device, setDevice] = useState<'desktop' | 'phone'>('desktop');
  const [imageErrors, setImageErrors] = useState<Set<string>>(() => new Set());
  const path = route.split('?')[0];
  const current = [...options, ...previousOptions].find((item) => item.href === path);
  const featured = projects.find((project) => project.slug === 'heaven');
  const capture = route.includes('?capture');
  useEffect(() => {
    (document.getElementById('design-content') ?? document.getElementById('future-content'))?.focus({ preventScroll: true });
  }, [path]);

  if (current && 'concept' in current && featured) {
    return <>
      {!capture && <nav className="design-toolbar" aria-label="Comparación de diseños">
        <a href="#/disenos">Comparar las cuatro</a><span>{current.name}</span>
        <div>{options.map((item) => <a key={item.slug} href={item.href} aria-current={item.slug === current.slug ? 'page' : undefined}>{item.name}</a>)}</div>
      </nav>}
      <FutureConcept concept={current.concept} project={featured} />
    </>;
  }

  if (current && current.slug !== 'actual') {
    return (
      <div className={`design-preview design--${current.slug}`}>
        {!capture && <nav className="design-toolbar" aria-label="Comparación de diseños">
          <a href="#/disenos">Comparar las cuatro</a>
          <span>{current.name}</span>
          <div>{options.map((item) => <a key={item.slug} href={item.href} aria-current={item.slug === current.slug ? 'page' : undefined}>{item.name}</a>)}</div>
        </nav>}
        <div className="page-shell">
          <a className="skip-link" href="#design-content" onClick={(event) => { event.preventDefault(); document.getElementById('design-content')?.focus(); }}>Saltar al contenido</a>
          <Header />
          <main id="design-content" tabIndex={-1}><Intro /><Body /></main>
          <footer className="footer"><span>© {new Date().getFullYear()} Wilmer Zeas Rodriguez</span><a href="https://github.com/wilmergit">GitHub</a><a href="#/disenos">Comparar diseños</a></footer>
        </div>
      </div>
    );
  }

  return (
    <div className="design-gallery">
      <header className="gallery-header"><a href="#/">Volver al portfolio</a><span>Wilmer Zeas / Exploración visual</span></header>
      <main id="design-content" tabIndex={-1}>
        <div className="gallery-heading"><h1>Tres futuros<br />para el portfolio.</h1><p>Tres rediseños completos a partir de tus referencias: mosaico modular, objeto tecnológico y cartel gráfico. La versión actual sigue aquí para comparar.</p></div>
        <div className="gallery-controls"><p>Compara las capturas y abre las propuestas para probarlas.</p><div role="group" aria-label="Formato de las capturas"><button type="button" aria-pressed={device === 'desktop'} onClick={() => setDevice('desktop')}>Escritorio</button><button type="button" aria-pressed={device === 'phone'} onClick={() => setDevice('phone')}>Móvil</button></div></div>
        <div className="gallery-grid">
          {options.map((item) => {
            const imageKey = `${item.slug}-${device}`;
            return <article className="gallery-option" key={item.slug}>
              <div className="gallery-option-heading"><h2>{item.name}</h2><span>{item.theme}</span></div>
              <a className={`gallery-image gallery-image--${device}`} href={item.href} aria-label={`Explorar diseño ${item.name}`}>
                {imageErrors.has(imageKey) ? <span className="gallery-image-fallback">Abrir la propuesta {item.name}</span> : <img key={imageKey} src={`${import.meta.env.BASE_URL}design-previews/${imageKey}.png`} alt={`Portada ${item.name} en ${device === 'desktop' ? 'escritorio' : 'móvil'}`} onError={() => setImageErrors((previous) => new Set(previous).add(imageKey))} />}
              </a>
              <div className="gallery-option-footer"><p>{item.description}</p><a href={item.href}>Explorar {item.name.toLowerCase()}</a></div>
            </article>;
          })}
        </div>
        <details className="gallery-previous"><summary>Ver las primeras variaciones</summary><p>Las pruebas Editorial, Técnica y Producto siguen disponibles.</p><nav aria-label="Primeras variaciones">{previousOptions.map((item) => <a key={item.slug} href={item.href}>{item.name}</a>)}</nav></details>
        <p className="gallery-note">Son propuestas de comparación. Abrir una opción no la guarda como elección definitiva.</p>
      </main>
    </div>
  );
}
