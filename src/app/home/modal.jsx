"use client";

import React, { useState } from "react";

const MyModalComponent = ({ onClose, item }) => {
  const { rut, nombre, apellidos, telefono, edad } = item;
  // const formattedDate = `${SelectedYear}-${String(SelectedMonth + 1).padStart(2, '0')}-${String(SelectedDate).padStart(2, '0')}`;
  return (
    <>
      <div className="fixed inset-10 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
        <div className="dark:bg-gray-600 relative w-[50%] h-[50%] mx-auto my-6 p-6 bg-white border rounded-md shadow-lg">
          <div className="flex items-start justify-between">
            <p className="text-white">Editando Perfil de {rut}</p>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold ">{nombre}</h3>
          </div>
          <div className="content">
           <button className="btn-modal">Guardar</button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-50 dark:text-white"></div>
    </>
  );
};

export default MyModalComponent;
