import Contact from "../../components/BtonContact/Contact/Contact";
import Cv from "../../components/BtonContact/CV/CV";
import PCard from "../../components/ProjectCard/PCard";
import "./Home.css";
function Home() {
  return (
    <main className="Home">
      <article>
        <h1>Harold Pinto</h1>
        <p>
          Desarrollador en front end que busca implementar soluciones web
          innovadoras
          <br />
          en busca de la proxima oportunidad para revolucionar tu app web.
          <br />
          Diseños elegantes, Modernos y Intuitivos
        </p>
      </article>
      <div className="actions">
        <Cv />
        <Contact />
      </div>
      <h2>Projects</h2>
      <div className="PcardFlex">
        <PCard />
        <PCard />
        <PCard />
        <PCard />
        <PCard />
      </div>
    </main>
  );
}

export default Home;
