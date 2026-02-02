import "./About.css";
import { useState } from "react";
import profile from "../assets/profile.png";
import { FaUser, FaHeart, FaStar } from "react-icons/fa";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <section id="about" className="about-section">
      {/* TITULO */}
      <div className="text-center mb-5">
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-subtitle">Conóceme mejor</p>
      </div>

      <div className="container">
        <div className="row align-items-start">
          {/* COLUMNA IZQUIERDA */}
          <div className="col-md-5 mb-4">
            {/* FOTO */}
            <div className="about-photo mb-4">
              <img src={profile} alt="Matías Cabrera" />
            </div>

            {/* INFO CARDS */}
            <div className="info-card">
              <FaGraduationCap className="info-icon" />
              <div>
                <span className="info-label">Educación</span>
                <span className="info-value">
                  UTN Full Stack · UBA Administración
                </span>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <span className="info-label">Ubicación</span>
                <span className="info-value">CABA, Argentina</span>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <span className="info-value">
                  cabrera.blas.mj@gmail.com
                </span>
              </div>
            </div>

            {/* BOTONES */}
            <div className="about-buttons mt-3">
            <a
            href="/docs/Matias_Cabrera_CV_FullStack_Jr.pdf"
            className="btn btn-info"
            download
            >
            Descargar currículum
            </a>
            <a href="#contact" className="btn btn-outline-info">
            Ponte en contacto
            </a>
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="col-md-7">
            {/* TABS */}
            <div className="about-tabs">
              <button
                className={activeTab === "story" ? "active" : ""}
                onClick={() => setActiveTab("story")}
              >
                <FaUser className="tab-icon" />
                <span>Mi historia</span>
              </button>

              <button
                className={activeTab === "interests" ? "active" : ""}
                onClick={() => setActiveTab("interests")}
              >
                <FaHeart className="tab-icon" />
                <span>Intereses</span>
              </button>

              <button
                className={activeTab === "fun" ? "active" : ""}
                onClick={() => setActiveTab("fun")}
              >
                <FaStar className="tab-icon" />
                <span>Datos curiosos</span>
              </button>
            </div>

            {/* SEPARADOR VISUAL */}
            <div className="about-divider" />

            {/* CONTENIDO */}
            {activeTab === "story" && (
  <>
    <p className="about-text">
      👋 ¡Hola! Soy <strong>Matias Cabrera</strong>, Programador Web Full Stack Jr. con formación en UTN y experiencia en el desarrollo de aplicaciones web completas.
    </p>

    <p className="about-text">
      En <span className="highlight">Front End</span> trabajo con <span className="highlight">HTML5</span>, <span className="highlight">CSS3</span>, <span className="highlight">JavaScript</span>, <span className="highlight">TypeScript</span>, y frameworks como <span className="highlight">React</span> y <span className="highlight">Bootstrap</span> para interfaces dinámicas y responsivas.
    </p>

    <p className="about-text">
      En <span className="highlight">Back End</span> desarrollo con <span className="highlight">Node.js</span> y <span className="highlight">Express</span>, implementando <span className="highlight">CRUD</span>, gestionando bases de datos <span className="highlight">MySQL</span> y <span className="highlight">MongoDB</span>, y consumiendo <span className="highlight">APIs REST</span>.
    </p>

    <p className="about-text">
      Me encuentro en constante aprendizaje y busco oportunidades para aplicar mis conocimientos en proyectos reales, creando soluciones eficientes y escalables.
    </p>

    <div className="about-quote">
      “Disfruto transformar ideas en aplicaciones web funcionales y escalables.”
    </div>
  </>
)}


            {activeTab === "interests" && (
              <div className="about-interests">
                <div className="interest-card">
                  <span className="interest-icon">🚀</span>
                  <span>Desarrollo Back End & APIs</span>
                </div>

                <div className="interest-card">
                  <span className="interest-icon">🧠</span>
                  <span>Resolución de problemas & código limpio</span>
                </div>

                <div className="interest-card">
                  <span className="interest-icon">🌐</span>
                  <span>Tecnologías web & arquitectura</span>
                </div>

                <div className="interest-card">
                  <span className="interest-icon">📚</span>
                  <span>Aprendizaje continuo</span>
                </div>
              </div>
            )}

            {activeTab === "fun" && (
              <ul className="about-list">
                <li>☕ Desarrollador impulsado por café</li>
                <li>🎮 Gamer & entusiasta de la tecnología</li>
                <li>⚙️ Disfruto más depurar errores que programar 😄</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
