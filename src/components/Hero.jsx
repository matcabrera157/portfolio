import profile from "../assets/profile.png";
import "./Hero.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

import {
  HiOutlineFolderOpen,
  HiOutlineMail,
} from "react-icons/hi";

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* FONDOS */}
      <div className="hero-lines"></div>
      <div className="container">
        <div className="hero-content">

          {/* FOTO */}
          <div className="hero-image">
            <img src={profile} alt="Matías Cabrera" />
          </div>

          {/* TEXTO */}

          <h1 className="hero-name">Matias Cabrera</h1>
          <h2 className="hero-role">Full Stack Developer Jr</h2>

          <p className="hero-description">
            Desarrollo aplicaciones web modernas con React, Node.js y Express,
            enfocadas en buenas prácticas y experiencia de usuario.
          </p>

          {/* BOTONES */}
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              <HiOutlineFolderOpen />
              Ver proyectos
            </a>

            <a href="#contact" className="btn secondary">
              <HiOutlineMail />
              Contacto
            </a>
          </div>

          {/* SOCIAL */}
          <div className="hero-social">
            <a href="https://github.com/matcabrera157" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/matias-cabrera-mj/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="#contact">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          </div>

          {/* SCROLL */}
          <a href="#about" className="hero-scroll">
            <span className="arrow">⌄</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
