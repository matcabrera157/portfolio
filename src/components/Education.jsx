import "./Education.css";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-content">

        {/* HEADER */}
        <div className="education-header">
          <FaGraduationCap className="edu-icon" />
          <h2>Educación</h2>
          <p>Formación académica y capacitación profesional</p>
        </div>

        {/* GRID */}
        <div className="education-container">

          {/* ITEM 1 – EN CURSO */}
          <div className="education-card">
            <span className="edu-badge active">Actualmente cursando</span>

            <h3>Universidad de Buenos Aires (UBA)</h3>
            <h4>Licenciatura en Administración</h4>

            <div className="edu-meta">
              <span>
                <HiOutlineLocationMarker className="edu-meta-icon" />
                Buenos Aires, Argentina
              </span>
              <span>
                <HiOutlineCalendar className="edu-meta-icon" />
                2025 – Presente
              </span>
            </div>

            <div className="progress-wrapper">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "25%" }} />
              </div>
              <span className="progress-text">2º año en curso</span>
            </div>

            <p className="edu-description">
              Formación en gestión empresarial, análisis financiero, contabilidad,
              economía y toma de decisiones. Enfoque analítico orientado a entornos
              corporativos y financieros.
            </p>

            <div className="edu-tags">
              <span>Administración</span>
              <span>Finanzas</span>
              <span>Economía</span>
              <span>Gestión</span>
            </div>
          </div>

          {/* ITEM 2 – COMPLETADO */}
          <div className="education-card">
            <span className="edu-badge">Completado</span>

            <h3>Universidad Tecnológica Nac. (UTN)</h3>
            <h4>Diplomatura en Programación Web Full Stack</h4>

            <div className="edu-meta">
              <span>
                <HiOutlineLocationMarker className="edu-meta-icon" />
                Buenos Aires, Argentina
              </span>
              <span>
                <HiOutlineCalendar className="edu-meta-icon" />
                2022 – 2023
              </span>
            </div>

            <div className="progress-wrapper completed">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>
              <span className="progress-text">Finalizado</span>
            </div>

            <p className="edu-description">
              Formación práctica en desarrollo web Full Stack. Desarrollo de
              aplicaciones completas con arquitectura MVC, APIs REST y bases de datos.
            </p>

            <div className="edu-tags">
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>React</span>
              <span>MySQL</span>
              <span>APIs REST</span>
            </div>
          </div>

          {/* ITEM 3 – COMPLETADO */}
          <div className="education-card">
            <span className="edu-badge">Completado</span>

            <h3>Escuela Técnica N°17 D.E. 13</h3>
            <h4>Técnico Electrónico</h4>

            <div className="edu-meta">
              <span>
                <HiOutlineLocationMarker className="edu-meta-icon" />
                Buenos Aires, Argentina
              </span>
              <span>
                <HiOutlineCalendar className="edu-meta-icon" />
                Secundario técnico
              </span>
            </div>

            <div className="progress-wrapper completed">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "100%" }} />
              </div>
              <span className="progress-text">Finalizado</span>
            </div>

            <p className="edu-description">
              Formación técnica con fuerte base en electrónica, lógica,
              resolución de problemas y pensamiento analítico aplicado.
            </p>

            <div className="edu-tags">
              <span>Electrónica</span>
              <span>Lógica</span>
              <span>Resolución de problemas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
