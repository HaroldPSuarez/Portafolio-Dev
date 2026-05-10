import Contact from "../../components/BtonContact/Contact/Contact";
import Cv from "../../components/BtonContact/CV/CV";
import PCard from "../../components/ProjectCard/PCard";
import { projects } from "../../data/Projects";
import SplitText from "../../Animations/SplitText/SplitText";
import "./Home.css";
import {
  ReactOriginal,
  TypescriptOriginal,
  JavascriptOriginal,
  Html5Original,
  Css3Original,
  AngularOriginal,
  SpringOriginal,
  MysqlOriginal,
} from "devicons-react";

function Home() {
  return (
    <main className="Home">
      <article className="hero">
        <div className="hero-text">
          <SplitText
            text="Harold Pinto"
            className="hero-title"
            duration={0.8}
            delay={0.2}
          />
          <p>
            Frontend Developer especializado en React
            <br />
            construyo interfaces rápidas, accesibles y con buena UX
          </p>
          <div className="actions">
            <Cv />
            <Contact />
          </div>
        </div>

        <div className="hero-image">
          <img src="/pocoyo.webp" alt="Harold Pinto" />
        </div>
      </article>

      <section className="tech-section">
        <h2>Tecnologías</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <ReactOriginal size={55} />
            <span>React</span>
          </div>
          <div className="tech-item">
            <TypescriptOriginal size={55} />
            <span>TypeScript</span>
          </div>
          <div className="tech-item">
            <JavascriptOriginal size={55} />
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <Html5Original size={55} />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <Css3Original size={55} />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <AngularOriginal size={55} />
            <span>Angular</span>
          </div>
          <div className="tech-item">
            <SpringOriginal size={55} />
            <span>Spring Boot</span>
          </div>
          <div className="tech-item">
            <MysqlOriginal size={55} />
            <span>SQL</span>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>

        <div className="PcardFlex">
          {projects.map((project) => (
            <PCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
