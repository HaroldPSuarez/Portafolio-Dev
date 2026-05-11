import "./PCard.css";
import type { Project } from "../../data/Projects";

type PCardProps = {
  project: Project;
};

function PCard({ project }: PCardProps) {
  return (
    <article className="Pcard">
      <img src={project.image} alt={project.name} className="PCard-image" />

      <div className="PCard-content">
        <h3 className="PCard-title">{project.name}</h3>
        <p className="PCard-desc">{project.description}</p>

        <ul className="PCard-techs">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="PCard-links">
          {project.demoLink ? ( // ← solo renderiza si hay link
            <a href={project.demoLink} target="_blank" rel="noreferrer">
              Demo
            </a>
          ) : (
            <span className="PCard-links--soon">Próximamente</span> // ← span deshabilitado
          )}
          <a href={project.codeLink} target="_blank" rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default PCard;
