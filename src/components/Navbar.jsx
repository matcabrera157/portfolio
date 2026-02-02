import { useEffect, useState, useRef } from "react";
import "../styles/main.css";
import "./Navbar.css";

const Navbar = ({ toggleTheme }) => {
  const [activeSection, setActiveSection] = useState(null);
  const hasClickedRef = useRef(false);

  // === Detecta sección activa ===
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      if (!hasClickedRef.current) return;

      let current = null;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // === Barra de progreso de scroll ===
  useEffect(() => {
    const progressBar = document.querySelector(".scroll-progress");

    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleProgress);
    return () => window.removeEventListener("scroll", handleProgress);
  }, []);

  const navItem = (id, label) => (
    <li>
      <a
        href={`#${id}`}
        className={activeSection === id ? "active" : ""}
        onClick={() => {
          hasClickedRef.current = true;
          setActiveSection(id);
        }}
      >
        {label}
      </a>
    </li>
  );

  return (
    <nav className="site-navbar">
      {/* Barra de progreso */}
      <div className="scroll-progress"></div>

      <div className="navbar-inner">
        {/* BRAND */}
        <div className="navbar-brand">
          <a href="#home" className="brand-link">
            {/* LOGO REAL */}
            <span className="brand-avatar">MC</span>
            <span className="brand-name">Matias Cabrera</span>
          </a>
        </div>

        {/* LINKS */}
        <ul className="navbar-links">
          {navItem("home", "Inicio")}
          {navItem("about", "Sobre mí")}
          {navItem("projects", "Proyectos")}
          {navItem("skills", "Habilidades")}
          {navItem("education", "Educación")}
        </ul>

        {/* ACTIONS */}
        <div className="navbar-actions">
          <a href="#contact" className="navbar-btn">Contacto</a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="icon-moon">🌙</span>
            <span className="icon-sun">☀️</span>
          </button>
        </div>

        {/* MOBILE */}
        <button className="navbar-burger">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
