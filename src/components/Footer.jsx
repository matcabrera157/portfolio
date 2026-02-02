import { useEffect, useRef } from "react";
import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaPaperPlane,
  FaDownload
} from "react-icons/fa";

const Footer = () => {
  const backToTopRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!backToTopRef.current) return;

      if (window.scrollY > 400) {
        backToTopRef.current.classList.add("visible");
      } else {
        backToTopRef.current.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer" id="top">
      {/* ================= CTA ================= */}
      <div className="footer-cta">
        <h2>Construyamos algo increíble juntos</h2>
        <p>
          ¿Tenés un proyecto en mente? Conectemos y hagámoslo realidad.
        </p>

        <div className="footer-buttons">
          <a href="#contact" className="btn-primary">
            <FaPaperPlane />
            Ponerse en contacto
          </a>

          <a href="/docs/Matias_Cabrera_CV_FullStack_Jr.pdf" className="btn-outline" download>
            <FaDownload />
            Descargar currículum
          </a>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="footer-content">
        {/* ABOUT */}
        <div className="footer-col">
          <h3>Matias Cabrera</h3>
          <p>
            Desarrollador enfocado en crear experiencias web limpias,
            escalables y fáciles de usar.
          </p>
          <span className="footer-quote">
            “Construyendo soluciones, una línea de código a la vez.”
          </span>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Enlaces rápidos</h4>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#about">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#education">Educación</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        {/* TECH */}
        <div className="footer-col">
          <h4>Tecnologías</h4>
          <div className="tech-badges">
            <span className="html">HTML</span>
            <span className="css">CSS</span>
            <span className="js">JavaScript</span>
            <span className="react">React</span>
          </div>
          <span class="last-update">Última actualización: 2026</span>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Conectemos</h4>

          <div className="footer-social">
  {/* GitHub abre en nueva pestaña */}
  <a
    href="https://github.com/matcabrera157"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  {/* LinkedIn abre en nueva pestaña */}
  <a
    href="https://www.linkedin.com/in/matias-cabrera-mj/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  {/* Contacto hace scroll normal */}
  <a
    href="#contact"
    aria-label="Email"
  >
    <FaEnvelope />
  </a>
</div>


          <div className="footer-status">
            <span>Buenos Aires, Argentina</span>
            <span>Abierto a oportunidades</span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="footer-bottom">
        <span>© 2025 Matias Cabrera. Todos los derechos reservados.</span>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <a
        href="#home"
        ref={backToTopRef}
        className="back-to-top"
        aria-label="Volver arriba"
      >
        <FaArrowUp />
        Volver arriba
      </a>
    </footer>
  );
};

export default Footer;
