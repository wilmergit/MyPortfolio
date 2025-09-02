import "./experience.scss";

export default function Experience() {
  return (
    <div className="exps-container">
      <div id="first-exp" className="exps">
        <h3>[noviembre 2024 - marzo 2025]</h3>
        <p id="exp-p">
          Desarrollo de componentes front-end usando VueJs, Storybook, Tailwind
          css junto a la empresa IsardVDI y el ITB (Institut Tecnològic de
          Barcelona).
        </p>
        <div className="logos-container">
          <img src="../../assets/images/vueJs-Logo.png" alt="vue" />
          <img
            src="../../assets/images/Tailwind_CSS_Logopng.png"
            alt="tailwind"
          />
        </div>
      </div>
      <div id="second-exp" className="exps">
        <h3>[marzo 2025 - julio 2025]</h3>
        <ul>
          <li>
            (Erasmus) Desarrollo full stack en Casamedia usando Flutter, Node, y
            MongoDb
          </li>
          <li>
            Gestión de rutas, controladores o mejorar la escalabilidad de los
            modelos en el backend.
          </li>
          <li>
            Implementación de mejoras o nuevos componentes visuales en el
            frontend.
          </li>
        </ul>
        <div className="logos-container"></div>
      </div>
    </div>
  );
}
