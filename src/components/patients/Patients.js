import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import PatientsNavbar from "./PatientsNavbar";

const Patients = () => {

  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 col-md-4 col-lg-3 p-0">
          <Sidebar />
        </div>

        <div className="col-12 col-md-8 col-lg-9 p-0">
          <div className="patients">
            <PatientsNavbar />

            <div className="patients__content">
              <h1>Patients</h1>

              <table className="table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Motivo Cita</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Luis Fernando Perez Varajas</td>
                    <td>7841109307</td>
                    <td>03 de octubre 2022</td>
                    <td>03:34 p.m</td>
                    <td>Mensualidad</td>
                    <td>
                      <i className="fa-solid fa-xmark"></i>
                    </td>
                    <td>
                      <Link to='/edit'>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
