import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <h3 className="Footer-name">Harold Pinto</h3>
        <p className="Footer-sub">
          Frontend Developer — React · TypeScript · CSS
        </p>
        <div className="Footer-links">
          <a
            href="https://github.com/HaroldPSuarez"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="Footer-dot">·</span>
          <a href="#contacto">Contacto</a>
          <span className="Footer-dot">·</span>
          <a href="#projects">Proyectos</a>
        </div>
        <p className="Footer-copy">© 2025 Harold Dev. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
