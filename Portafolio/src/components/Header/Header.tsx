import { useEffect, useRef, useState } from "react";
import "./Header.css";

function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
      } else if (currentY < lastY.current) {
        setVisible(true); // subiendo → mostrar
      } else if (currentY > lastY.current) {
        setVisible(false); // bajando → esconder
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // ← ahora el array vacío es correcto porque lastY es un ref

  return (
    <div className={`Header ${visible ? "header--visible" : "header--hidden"}`}>
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
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
