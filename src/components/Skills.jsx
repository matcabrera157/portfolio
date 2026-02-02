import "./Skills.css";
import { useEffect, useRef, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiGit,
  SiPostman,
} from "react-icons/si";
import { HiCode } from "react-icons/hi";

const skillsData = [
  {
    category: "Programación base",
    items: [
      {
        name: "JavaScript",
        level: 80,
        label: "Avanzado",
        description: "ES6+ • Frontend y Backend",
        icon: <SiJavascript />,
      },
      {
        name: "TypeScript",
        level: 60,
        label: "Intermedio",
        description: "Tipado • Buenas prácticas",
        icon: <SiTypescript />,
      },
    ],
  },
  {
    category: "Desarrollo Frontend",
    items: [
      {
        name: "React",
        level: 75,
        label: "Intermedio",
        description: "Hooks • Componentes",
        icon: <SiReact />,
      },
      {
        name: "HTML & CSS",
        level: 85,
        label: "Avanzado",
        description: "Diseño responsive • UI",
        icon: (
          <>
            <SiHtml5 />
            <SiCss3 />
          </>
        ),
      },
    ],
  },
  {
    category: "Desarrollo Backend",
    items: [
      {
        name: "Node.js",
        level: 78,
        label: "Avanzado",
        description: "Express • APIs REST",
        icon: <SiNodedotjs />,
      },
      {
        name: "MongoDB",
        level: 75,
        label: "Intermedio",
        description: "CRUD • Mongoose",
        icon: <SiMongodb />,
      },
      {
        name: "MySQL",
        level: 70,
        label: "Intermedio",
        description: "Base de datos relacional",
        icon: <SiMysql />,
      },
    ],
  },
  {
    category: "Herramientas & Flujo de trabajo",
    items: [
      {
        name: "Git & GitHub",
        level: 80,
        label: "Avanzado",
        description: "Control de versiones",
        icon: <SiGit />,
      },
      {
        name: "Postman",
        level: 80,
        label: "Avanzado",
        description: "Testing de APIs",
        icon: <SiPostman />,
      },
    ],
  },
];

function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      {/* HEADER */}
      <div className="skills-header">
        <div className="skills-title">
          <HiCode className="skills-title-icon" />
          <h2>Habilidades técnicas</h2>
        </div>
        <p>Tecnologías que aplico en proyectos reales</p>
      </div>

      {/* GRUPOS */}
      <div className="skills-groups">
        {skillsData.map((group) => (
          <div className="skills-group" key={group.category}>
            <h3 className="skills-category">{group.category}</h3>

            <div className="skills-list">
              {group.items.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-circle">
                    <svg width="90" height="90">
                      <circle cx="45" cy="45" r="40" className="circle-bg" />
                      <circle
                        cx="45"
                        cy="45"
                        r="40"
                        className="circle-fill"
                        style={{
                          strokeDashoffset: animate
                            ? 251 - (251 * skill.level) / 100
                            : 251,
                        }}
                      />
                    </svg>
                    <div className="skill-icon">{skill.icon}</div>
                  </div>

                  <div className="skill-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.label}</span>
                    <p>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
