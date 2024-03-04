"use client";
import React from "react";
import { useState } from "react";

import TableData from "./tableData";
import MyModal from "./modal";
import "./styles.css";

const Home = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isModalOpen && (
        <MyModal onClose={closeModal}/>
      )}
      <div className="container">
        <div className="header-container-finder">
          <div>
            <div className="container-finder">Rut</div>
            <input type="text" />
          </div>
          <div>
            <div className="container-finder">Nombre</div>
            <input type="text" />
          </div>
          <div>
            <div className="container-finder">Apellidos</div>
            <input type="text" />
          </div>
          <div>
            <div className="container-finder">Telefono</div>
            <input type="text" />
          </div>
          <div>
            <div className="container-finder">Rut</div>
            <input type="text" />
          </div>
        </div>

        <div className="container-table">Resultado de la búsqueda</div>
        <table>
          <thead className="table-header">
            <tr>
              <th>Foto</th>
              <th>Rut</th>
              <th>Nombre</th>
              <th>Apellidos</th>
              <th>Teléfono</th>
              <th>Edad</th>
            </tr>
          </thead>
          <TableData MyModal={MyModal} openModal={openModal} closeModal={closeModal}/>
        </table>
      </div>
    </>
  );
};

export default Home;
