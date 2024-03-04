import React from "react";
import "./styles.css";

const TableData = ({ MyModal, openModal, closeModal }) => {
  const BDdata = [
    {
      rut: "",
      nombre: "test",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      apellidos: "test",
      telefono: "test",
      edad: "test",
    },
    { nombre: "test", apellidos: "test", telefono: "test", edad: "test" },
    { nombre: "test", apellidos: "test", telefono: "test", edad: "test" },
    { nombre: "test", apellidos: "test", telefono: "test", edad: "test" },
  ];

  return (
    <tbody>
      {BDdata.map((item, index) => (
        <tr
          key={index}
          className="tbody-profile-row"
          onClick={() => {
            MyModal({
              SelectedDate: "",
              SelectedMonth: "",
              SelectedYear: "",
              onClose: closeModal,
              item: item,
            }),
              openModal();
          }}
        >
          <td>
            <img className="tbody-profile-image" src={item.foto} alt="" />
          </td>
          <td>{item.rut}</td>
          <td>{item.nombre}</td>
          <td>{item.apellidos}</td>
          <td>{item.telefono}</td>
          <td>{item.edad}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableData;
