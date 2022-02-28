import React from "react";
import Sidebar from "../sidebar/Sidebar";
import PatientsNavbar from "./PatientsNavbar";

const EditPatient = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 col-md-4 col-lg-3 p-0">
          <Sidebar />
        </div>
        
        <div className="col-12 col-md-8 col-lg-9 p-0">
          <div className="edit__patient">
            <PatientsNavbar />

            <div className="edit__patient__content">
              <h1>Editar Paciente</h1>

              <form>
                <input type="text" placeholder="Name" />

                <input type="tel" placeholder="Telefono" />

                <input type="date" />

                <input type="time" />

                <textarea placeholder="Motivo cita"></textarea>

                <button>Guardar cita editada</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
