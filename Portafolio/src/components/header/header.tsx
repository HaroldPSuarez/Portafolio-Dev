import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <nav>
        <ul className="menu">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
