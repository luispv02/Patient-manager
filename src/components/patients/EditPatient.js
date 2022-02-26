import React from 'react'
import PatientsNavbar from './PatientsNavbar'

const EditPatient = () => {
  return (
    <div className="edit__patient">

      <PatientsNavbar />

      <div className="edit__patient__content">
        <h1>Editar Paciente</h1>

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
          >Guardar cita editada</button>
        </form>
      </div>
    </div>
  )
}

export default EditPatient