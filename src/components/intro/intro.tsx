import './intro.scss';

export default function Intro() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div><h1 id="intro-title">Desarrollador Web Full Stack</h1><p className="intro-location">Gran Canaria, España</p></div>
      <p className="intro-motto">Del primer boceto a la última línea de código.</p>
    </section>
  );
}
