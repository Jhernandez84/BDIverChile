"use client";
import React from "react";
import { useState } from "react";
import MyModalComponent from "./modal";
import TableData from "./tableData";
import "./styles.css";

const Home = () => {
  const BDdata = [
    {
      rut: "15957386",
      nombre: "Jonathan Antonio",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellido_paterno: "Hernandez",
      apellido_materno: "Miranda",
      telefono: "978778829",
      fec_nac: "1984-09-13",
    },
    {
      rut: "17388935",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "12096190",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7831008",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "7735953",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    {
      rut: "19419909",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("Opening modal for item:", item);
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedItem(null);
    setModalOpen(false);
  };

  return (
    <>
      <div className="container">
        {isModalOpen && (
          <MyModalComponent onClose={closeModal} item={selectedItem} />
        )}
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
        <div className="container-table">
          Resultado de la búsqueda
          <table>
            <thead className="table-header">
              <tr>
                <th className="th-img">Foto</th>
                <th className="th-text">Rut</th>
                <th className="th-text">Nombre</th>
                <th className="th-text">Apellidos</th>
                <th className="th-text">Teléfono</th>
                <th className="th-text">Edad</th>
              </tr>
            </thead>
            <tbody>
              {BDdata.map((item, index) => (
                <tr
                  key={index}
                  className="tbody-profile-row"
                  onClick={() => {
                    openModal(item);
                  }}
                >
                  <td>
                    <img
                      className="tbody-profile-image"
                      src={item.foto}
                      alt=""
                    />
                  </td>
                  <td>{item.rut}</td>
                  <td>{item.nombre}</td>
                  <td>
                    {item.apellido_paterno} {item.apellido_materno}{" "}
                  </td>
                  <td>{item.telefono}</td>
                  <td>{item.fec_nac}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
