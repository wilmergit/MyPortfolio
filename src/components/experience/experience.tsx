import vueLogo from '../../assets/images/vueJs-Logo.png';
import storybookLogo from '../../assets/images/storybook-logo.png';
import './experience.scss';

export default function Experience() {
  return (
    <>
      <section className="experience-card tile" aria-labelledby="experience-title">
        <div className="tile-top"><span className="eyebrow">Experiencia / Erasmus</span><span className="credential-mark" aria-hidden="true">[ WZ ]</span></div>
        <div className="credential">
          <h2 id="experience-title">Casamedia</h2>
          <p className="credential-role">Desarrollo Full Stack</p>
          <p className="eyebrow">Marzo a julio de 2025</p>
          <p>Componentes visuales, rutas, controladores y modelos para aplicaciones con Flutter, Node y MongoDB.</p>
          <div className="tech-tags"><span>Flutter</span><span>Node</span><span>MongoDB</span></div>
        </div>
      </section>
      <section className="previous-experience tile" aria-labelledby="previous-title">
        <span className="eyebrow">Noviembre de 2024 a marzo de 2025</span>
        <h2 id="previous-title">IsardVDI × ITB</h2>
        <p>Desarrollo de componentes frontend con Vue, Storybook y Tailwind CSS.</p>
        <div className="experience-tools"><img src={vueLogo} alt="Vue" /><img src={storybookLogo} alt="Storybook" /><span>Componentes / UI</span></div>
      </section>
    </>
  );
}
