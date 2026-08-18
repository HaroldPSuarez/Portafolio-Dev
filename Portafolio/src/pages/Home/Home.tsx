import Contact from "../../components/BtonContact/Contact/Contact";
import Cv from "../../components/BtonContact/CV/CV";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection"; // ← nuevo import
import { projects } from "../../data/Projects";
import SplitText from "../../Animations/SplitText/SplitText";
import "./Home.css";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiAngular,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

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
            <FaReact size={55} color="#61DAFB" />
            <span>React</span>
          </div>
          <div className="tech-item">
            <SiTypescript size={55} color="#3178C6" />
            <span>TypeScript</span>
          </div>
          <div className="tech-item">
            <SiJavascript size={55} color="#F7DF1E" />
            <span>JavaScript</span>
          </div>
          <div className="tech-item">
            <SiHtml5 size={55} color="#E34F26" />
            <span>HTML</span>
          </div>
          <div className="tech-item">
            <SiCss size={55} color="#1572B6" />
            <span>CSS</span>
          </div>
          <div className="tech-item">
            <SiAngular size={55} color="#DD0031" />
            <span>Angular</span>
          </div>
          <div className="tech-item">
            <SiSpringboot size={55} color="#6DB33F" />
            <span>Spring Boot</span>
          </div>
          <div className="tech-item">
            <SiMysql size={55} color="#4479A1" />
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
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>React</li>
              <li>Angular</li>
            </ul>
          </div>

          <div className="profile-card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Spring Boot</li>
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
            <h3>Autenticación y seguridad</h3>
            <ul>
              <li>JWT</li>
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