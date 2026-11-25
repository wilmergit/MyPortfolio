import './header.scss';

export default function Header() {
  return (
    <header className="hdr">
      <a className="wordmark" href="#/" aria-label="Wilmer Zeas, inicio">Wilmer Zeas</a>
      <span className="header-note">PORTFOLIO / DESARROLLO WEB</span>
      <nav aria-label="Navegación principal"><a href="#/">Proyectos</a><a href="https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/">Hablemos ↗</a></nav>
    </header>
  );
}
