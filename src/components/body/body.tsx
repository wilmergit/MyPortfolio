import Experience from '../experience/experience';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';
import './body.scss';

export default function Body() {
  return (
    <section className="mosaic" aria-label="Proyectos, experiencia y presentación">
      {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      <Experience />
      <section className="about-card tile"><h2>Sobre mí.</h2><p>Soy Wilmer, desarrollador web de Gran Canaria. Me interesa conectar el diseño de una interfaz con lo que ocurre detrás.</p><a className="text-link" href="https://github.com/wilmergit">Mi código en GitHub</a></section>
      <section className="contact-card tile"><h2>¿Construimos algo juntos?</h2><a className="text-link" href="https://www.linkedin.com/in/wilmer-zeas-rodriguez-084434252/">Hablemos en LinkedIn</a></section>
    </section>
  );
}
