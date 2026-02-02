import { useState } from "react";
import "./contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi";

const Contact = () => {
  const MAX_MESSAGE_LENGTH = 500;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al enviar");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-section">
      {/* HEADER */}
      <div className="contact-header">
        <FaEnvelope className="contact-icon" />
        <h2 className="contact-title">Contacto</h2>
        <p className="contact-subtitle">
          ¿Tenés una idea, proyecto o propuesta? Escribime y veamos cómo podemos
          trabajar juntos.
        </p>
      </div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-info">
          <div className="info-card">
            <FaEnvelope />
            <div className="info-content">
              <h4>Email</h4>
              <span>cabrera.blas.mj@gmail.com</span>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div className="info-content">
              <h4>Ubicación</h4>
              <span>Buenos Aires, Argentina</span>
            </div>
          </div>

          <div className="info-card">
            <FaCheckCircle />
            <div className="info-content">
              <h4>Disponibilidad</h4>
              <span>Abierto a oportunidades</span>
            </div>
          </div>

          <div className="info-card response-card">
            <FaCheckCircle />
            <div className="info-content">
              <h4>Tiempo de respuesta</h4>
              <span>Suelo responder dentro de las 24–48 horas</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form
          className={`contact-form ${status === "success" ? "success" : ""}`}
          onSubmit={handleSubmit}
        >
          <h3>
            <HiPaperAirplane /> Enviame un mensaje
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            maxLength={50}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            maxLength={80}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="textarea-wrapper">
            <textarea
              name="message"
              placeholder="Contame sobre tu proyecto o idea..."
              maxLength={MAX_MESSAGE_LENGTH}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <small className="char-counter">
              {formData.message.length} / {MAX_MESSAGE_LENGTH}
            </small>
          </div>

          <button
            type="submit"
            className="btn primary"
            disabled={status === "loading"}
          >
            <HiPaperAirplane />
            <span>
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </span>
          </button>

          {/* STATUS (ESPACIO RESERVADO) */}
          <div className="form-status">
            {status === "success" && (
              <p className="success-message">
                🚀 Mensaje enviado correctamente
              </p>
            )}

            {status === "error" && (
              <p className="error-message">
                ❌ Error al enviar el mensaje. Intentá nuevamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
