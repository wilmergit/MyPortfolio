import { useEffect, useRef, useState } from 'react';
import { directions } from './content';
import './comparison.css';

const options = [
  { slug: 'actual', name: 'Rediseño actual', idea: 'La propuesta custom que ya conoces, conservada para comparar.', href: '#/custom' },
  ...directions.map((item) => ({ ...item, href: `#/explorar/${item.slug}` })),
];

export default function Comparison() {
  const [size, setSize] = useState<'desktop' | 'phone'>('desktop');
  const main = useRef<HTMLElement>(null);
  useEffect(() => { document.title = 'Comparar portadas | Wilmer Zeas'; main.current?.focus({ preventScroll: true }); }, []);
  return <main className="exploration-comparison" ref={main} tabIndex={-1}>
    <header><a href="#/custom">Volver al rediseño actual</a><a href="#/">Ver la portada original</a></header>
    <h1>Tres maneras de presentarte.</h1>
    <p>El mismo contenido, tres ideas de portada. Abre cada propuesta para recorrerla; aquí puedes comparar sus capturas reales.</p>
    <div className="comparison-controls" role="group" aria-label="Tamaño de las capturas"><button type="button" aria-pressed={size === 'desktop'} onClick={() => setSize('desktop')}>Escritorio</button><button type="button" aria-pressed={size === 'phone'} onClick={() => setSize('phone')}>Móvil</button></div>
    <div className="comparison-options">{options.map((option) => <article key={option.slug}><a className={`comparison-image comparison-image-${size}`} href={option.href} aria-label={`Abrir ${option.name}`}><img src={`${import.meta.env.BASE_URL}exploration-previews/${option.slug}-${size}.png`} alt={`Captura de ${option.name} en ${size === 'desktop' ? 'escritorio' : 'móvil'}`} width={size === 'desktop' ? 1280 : 390} height={size === 'desktop' ? 800 : 844} /></a><div className="comparison-option-heading"><h2>{option.name}</h2><a href={option.href}>Abrir propuesta</a></div><p>{option.idea}</p></article>)}</div>
    <footer>Son prototipos de exploración. Abrir uno no guarda una elección.</footer>
  </main>;
}
