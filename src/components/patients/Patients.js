import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import Patient from "./Patient";
import PatientsNavbar from "./PatientsNavbar";

const Patients = () => {

  const {patients} = useSelector(state => state.patients);

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

              {
                patients.length !== 0
                ? <table className="table table-striped">
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
                      {
                        patients.map(patient => (
                          <Patient 
                            key={patient.id}
                            {...patient}
                          />
                        ))
                      }
                    </tbody>
                  </table>
                : <h1>No patients</h1>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
