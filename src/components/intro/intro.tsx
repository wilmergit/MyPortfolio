import './intro.scss';

export default function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-label"><span className="eyebrow">GRAN CANARIA, ESPAÑA</span><span className="eyebrow">CÓDIGO + DISEÑO + CURIOSIDAD</span></div>
      <h1 id="intro-title">WILMER <span>ZEAS</span><span className="name-star" aria-hidden="true">✳</span></h1>
      <div className="intro-baseline"><p>Desarrollador Web <strong>Full Stack</strong></p><p>Del primer boceto<br />a la última línea de código.</p></div>
    </section>
  );
}
