import Contact from "../../components/BtonContact/Contact/Contact";
import Cv from "../../components/BtonContact/CV/CV";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"; // ← nuevo import
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
      <article className="hero" id="home">
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
        <p>
          Mi stack principal de desarrollo
          <br />
          <div className="tech-grid"></div>
        </p>
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

      {/*  */}
      <ProjectsSection
        projects={projects}
        initialVisible={
          window.innerWidth <= 600 ? 2 : window.innerWidth <= 1100 ? 4 : 3
        }
      />

      <section className="profile-section">
        <h2 id="about">Perfil técnico</h2>

        <p className="profile-description">
          Desarrollo interfaces web modernas enfocadas en rendimiento,
          accesibilidad y experiencia de usuario. Tengo experiencia en
          tecnologías frontend, herramientas de desarrollo, bases de datos y
          fundamentos de redes y sistemas operativos.
        </p>

        <div className="profile-grid">
          <div className="profile-card">
            <h3>Lenguajes de programación</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Frameworks y librerías</h3>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>Spring Boot</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Herramientas de desarrollo</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Sistemas operativos</h3>
            <ul>
              <li>Windows 8, 10 y 11</li>
              <li>Linux (Red Hat)</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Bases de datos</h3>
            <ul>
              <li>SQL</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Redes y conocimientos técnicos</h3>
            <ul>
              <li>Direccionamiento IP</li>
              <li>Subnetting básico</li>
              <li>Configuración de redes</li>
              <li>Topologías y conectividad</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
