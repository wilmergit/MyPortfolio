import "./intro.scss";

export default function Intro() {
  return (
    <div className="landpage">
      <div className="intro-message">
        <div className="message">
          <div className="tags">
            <h1 id="landpage-h1">Hola! Soy Wilmer</h1>
            <p className="tag" id="lvl">
              Junior
            </p>
            <p className="tag" id="availability">
              Disponible para trabajar
            </p>
          </div>
          <p className="landpage-p">Desarrollador Web Full stack.</p>
          <p className="landpage-p">De Gran Canaria, España.</p>
          <section className="socials">
            <a href="https://github.com/wilmergit" id="git">
              <i className="fa-brands fa-github"></i> Github
            </a>
            <a
              href="https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/"
              id="linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i> Linkedin
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
