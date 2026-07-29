import { useState } from "react";

export function DrawNavBar({ menuOpen, setMenuOpen }) {
  // const [open, setOpen] = useState(false);

  // const toggleMenu = () => {
  //   setOpen(!open);
  // };

  // const closeMenu = () => {
  //   setOpen(false);
  // };

  return (
    <div className={`draw ${menuOpen ? "drawing" : ""}`}>
      <div className="draw-nav">
        <div className="links">
          <a href="#about" className="link-name"
            onClick={() => setMenuOpen(false)}>
            Sobre Mi
          </a>
        </div>

        <div className="links">
          <a href="#projects" className="link-name"
            onClick={() => setMenuOpen(false)}>
            Proyectos
          </a>
        </div>

        <div className="links">
          <a href="#estudios" className="link-name"
            onClick={() => setMenuOpen(false)}>
            Estudios
          </a>
        </div>
        <div className="links">
          <a href="#skills" className="link-name"
            onClick={() => setMenuOpen(false)}>
            Skills
          </a>
        </div>

        <div className="links">
          <a href="#redes" className="link-name"
            onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>

      {/* <div className="burger" onClick={toggleMenu}>
        <img
          className="background-svg"
          src="/assets/burger-black.svg"
          alt="Menú"
        />
      </div> */}
      <div
        className="burger"
        onClick={() => setMenuOpen(false)}
      >
        <img
          className="background-svg"
          src="/portfolio/assets/burger-black.svg"
          alt=""
        />
      </div>
    </div>
  );
}