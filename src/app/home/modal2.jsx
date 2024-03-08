"use client";

import React from "react";
import { useState } from "react";

const ModalUserData = ({ closeModal, item }) => {
  const {
    rut,
    nombre,
    apellidos,
    telefono,
    edad,
    foto,
    apellido_paterno,
    apellido_materno,
    fec_nac,
  } = item;

  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const options = ["Soltero", "Casado", "Separado", "Viudo"];

  const AccordionComponent0 = () => (
    // <section className="modal-main-data-container">
    <section className="modal-personal-data-section">
      <div className="modal-personal-data-section-container">
        <div className="modal-personal-data-section-right-col">
          <div>
            <label htmlFor="" className="input-label">
              Nombres
            </label>
            <input
              type="text"
              id="name"
              className="input-name"
              placeholder={nombre}
            />
          </div>
          <div>
            <label htmlFor="" className="input-label">
              Apellido Paterno
            </label>
            <input
              type="text"
              id="name"
              className="input-name"
              placeholder={apellido_paterno}
            />
          </div>
          <div>
            <label htmlFor="" className="input-label">
              apellido Materno
            </label>
            <input
              type="text"
              id="name"
              className="input-name"
              placeholder={apellido_materno}
              // value={apellido_materno}
            />
          </div>
          <div>
            <label htmlFor="" className="input-label">
              Fecha Nacimiento
            </label>
            <input
              type="date"
              id="name"
              className="input-name"
              placeholder={fec_nac}
            />
          </div>
        </div>
        <div className="modal-personal-data-section-left-col">
          <div className="input-personal-data-img">
            <img src={foto} alt={nombre} />
          </div>
        </div>
      </div>
    </section>
  );

  const AccordionComponent1 = () => (
    <section className="modal-personal-data-section">
      <div>
        <label htmlFor="" className="input-label">
          Teléfono Contacto
        </label>
        <input
          type="text"
          id="name"
          className="input-name"
          placeholder={telefono}
        />
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Dirección
        </label>
        <input type="text" id="name" className="input-name" />
      </div>
    </section>
  );

  const AccordionComponent2 = () => (
    <section className="modal-personal-data-section">
      <div>
        <label htmlFor="options" className="input-label">
          Estado Civil
        </label>
        <select
          id="options"
          value={selectedOption}
          onChange={handleSelectChange}
          className="input-name"
        >
          <option value="Seleccione" disabled>
            Estado Civil
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Cónyuge
        </label>
        <input type="text" id="name" className="input-name" />
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Hijos
        </label>
        <input type="text" id="name" className="input-name" />
      </div>
    </section>
  );

  const AccordionComponent3 = () => (
    <section className="modal-personal-data-section">
      <div>
        <label htmlFor="" className="input-label">
          Teléfono Contacto
        </label>
        <input type="text" id="name" className="input-name" />
      </div>
      <div>
        <label htmlFor="" className="input-label">
          Dirección
        </label>
        <input type="text" id="name" className="input-name" />
      </div>
    </section>
  );

  const accordionItems = [
    { title: "Información Personal", content: <AccordionComponent0 /> },
    { title: "Información de contacto", content: <AccordionComponent1 /> },
    { title: "Grupo familiar", content: <AccordionComponent2 /> },
    { title: "Participación en IverChile", content: <AccordionComponent3 /> },
  ];

  return (
    // El modal tendrá 3 filas para guardar datos 10,80,10
    <div className="modal-overlay">
      <div className="modal">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <section className="modal-header-section">
          Editando perfil de {rut} - {nombre} {apellido_paterno}{" "}
          {apellido_materno}
        </section>
        <section className="modal-body-section">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => handleToggle(index)}
              >
                {item.title}
              </div>
              <div className="accordion-content">
                {index === activeIndex && item.content}
              </div>
            </div>
          ))}
        </section>

        <section className="modal-footer-section">
          <button className="btn-modal" 
                    onClick={()=> (closeModal(), alert('Datos actualizados exitósamente'))}>
            Guardar
          </button>
        </section>
      </div>
    </div>
  );
};

export default ModalUserData;
