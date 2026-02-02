import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";


const stats = [
  { label: "Proyectos totales", value: "3" },
  { label: "Tecnologías", value: "5+" },
  { label: "Código abierto", value: "100%" },
  { label: "Última actualización", value: "2026" },
];

const filters = [
  "Todos",
  "Node.js",
  "Express",
  "REST API",
  "React",
  "JavaScript",
];

const projectsData = [
  {
    title: "Mercado Gamer",
    description:
      "Aplicación web Full Stack tipo e-commerce desarrollada con Node.js y Express, utilizando arquitectura MVC, operaciones CRUD y una API REST.",
    tech: ["JavaScript", "React", "Node.js", "Express", "REST API"],
    features: [
      "CRUD completo de productos",
      "Arquitectura MVC con middleware",
      "API REST con endpoints en JSON",
      "Persistencia de datos con MySQL",
    ],
    github: "https://github.com/matcabrera157",
    demo: "#",
    featured: true,
  },
  {
    title: "API REST de Productos",
    description:
      "API REST personalizada para la gestión de productos, con endpoints estructurados y persistencia en base de datos.",
    tech: ["Node.js", "Express", "REST API"],
    features: [
      "Endpoints RESTful",
      "Manejo de datos en formato JSON",
      "Middleware y sistema de rutas",
      "Integración con base de datos",
    ],
    github: "https://github.com/matcabrera157",
    demo: "#",
  },
  {
    title: "Portfolio en React",
    description:
      "Portfolio personal desarrollado con React para mostrar proyectos, habilidades y experiencia profesional.",
    tech: ["React", "JavaScript", "CSS"],
    features: [
      "Componentes reutilizables en React",
      "Diseño responsive",
      "Interfaz moderna y limpia",
    ],
    github: "https://github.com/matcabrera157",
    demo: "https://portfolio.vercel.app",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredProjects =
    activeFilter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.tech.includes(activeFilter));

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">
  <FaFolderOpen className="projects-title-icon" />
  Proyectos destacados
</h2>

      <p className="projects-subtitle">
        Proyectos reales enfocados en desarrollo full stack y
        tecnologías web modernas.
      </p>

      <div className="projects-stats">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            <span>{s.value}</span>
            <small>{s.label}</small>
          </div>
        ))}
      </div>

      <div className="projects-filters">
        {filters.map((f) => (
          <button
            key={f}
            className={activeFilter === f ? "active" : ""}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((p, index) => (
          <div
            key={index}
            className={`project-card ${p.featured ? "featured" : ""}`}
          >
            {p.featured && <span className="badge">Destacado</span>}

            <h3>{p.title}</h3>

            {/* CONTENIDO CONTROLADO */}
            <div className="project-content">
              <p>{p.description}</p>

              <div className="key-features">
                <h4>Características clave</h4>
                <ul>
                  {p.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="tech-list">
              {p.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.demo} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Ver
              </a>
              <a
  href={p.github}
  target="_blank"
  rel="noreferrer"
  className="https://github.com/matcabrera157"
>
  <FaGithub /> GitHub
</a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
