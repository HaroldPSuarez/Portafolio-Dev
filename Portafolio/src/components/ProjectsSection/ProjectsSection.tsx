import { useState } from "react";
import PCard from "../ProjectCard/PCard";
import type { Project } from "../../data/Projects";
import "./ProjectsSection.css";

type Props = {
  projects: Project[];
  initialVisible?: number;
};

function ProjectsSection({ projects, initialVisible = 3 }: Props) {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = projects.slice(0, initialVisible);
  const hiddenProjects = projects.slice(initialVisible);
  const hasMore = hiddenProjects.length > 0;

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="PcardFlex">
        {visibleProjects.map((project, i) => (
          <PCard key={`visible-${project.id}-${i}`} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className="projects-more-wrapper">
          <div className={`projects-hidden-row ${showAll ? "open" : ""}`}>
            <div className="PcardFlex">
              {hiddenProjects.map((project, i) => (
                <PCard key={`hidden-${project.id}-${i}`} project={project} />
              ))}
            </div>
            <div className={`projects-fade-bar ${showAll ? "hidden" : ""}`} />
          </div>

          <button
            className={`projects-show-more ${showAll ? "open" : ""}`}
            onClick={() => setShowAll((prev) => !prev)}
          >
            <span>{showAll ? "Mostrar menos" : "Mostrar más"}</span>
            <svg
              className="chevron"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
