import React from 'react'
import PatientsNavbar from './PatientsNavbar'

const AddPatient = () => {
  return (
    <div className="add__patient">

      <PatientsNavbar />

      <div className="add__patient__content">
        <h1>Agregar Paciente</h1>

        <form>
          <input 
            type="text"
            placeholder='Name'
          />

          <input 
            type="tel"
            placeholder='Telefono'
          />

          <input 
            type="date"
          />

          <input 
            type="time"
          />

          <textarea
            placeholder='Motivo cita'
          ></textarea>

          <button
          >Agregar</button>
        </form>
      </div>
    </div>
  )
}

export default AddPatient