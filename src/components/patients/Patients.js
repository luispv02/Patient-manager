import React, { useState } from 'react'
import PatientsNavbar from './PatientsNavbar'

const Patients = ({show,setShow}) => {

  

  return (
    <div className="patients">
    
      <PatientsNavbar 
        setShow={setShow}
        show={show}
      />

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
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-pen-to-square"></i></td>
            </tr>

            <tr>
              <td>Luis Fernando Perez Varajas</td>
              <td>7841109307</td>
              <td>03 de octubre 2022</td>
              <td>03:34 p.m</td>
              <td>Mensualidad</td>
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-pen-to-square"></i></td>
            </tr>

            <tr>
              <td>Luis Fernando Perez Varajas</td>
              <td>7841109307</td>
              <td>03 de octubre 2022</td>
              <td>03:34 p.m</td>
              <td>Mensualidad</td>
              <td><i className="fa-solid fa-xmark"></i></td>
              <td><i className="fa-solid fa-pen-to-square"></i></td>
            </tr>

            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Patients