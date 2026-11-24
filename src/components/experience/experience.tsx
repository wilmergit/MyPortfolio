import vueLogo from '../../assets/images/vueJs-Logo.png';
import storybookLogo from '../../assets/images/storybook-logo.png';
import './experience.scss';

export default function Experience() {
  return (
    <section className="experience-card tile" aria-labelledby="experience-title">
      <div className="tile-top"><span className="eyebrow">02 / EXPERIENCIA</span><span className="credential-mark" aria-hidden="true">[ WZ ]</span></div>
      <div className="credential"><span className="eyebrow">ERASMUS / MAR — JUL 2025</span><h2 id="experience-title">Casamedia</h2><p className="credential-role">Desarrollo Full Stack</p><p>Componentes visuales, rutas, controladores y modelos para aplicaciones con Flutter, Node y MongoDB.</p><div className="tech-tags"><span>Flutter</span><span>Node</span><span>MongoDB</span></div></div>
      <div className="previous-experience"><span className="eyebrow">NOV 2024 — MAR 2025</span><h3>IsardVDI × ITB</h3><p>Desarrollo de componentes frontend con Vue, Storybook y Tailwind CSS.</p><div className="experience-tools"><img src={vueLogo} alt="Vue" /><img src={storybookLogo} alt="Storybook" /><span>COMPONENTES / UI</span></div></div>
    </section>
  );
}
