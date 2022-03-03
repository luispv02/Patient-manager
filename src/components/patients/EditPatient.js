import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPatient } from "../../actions/patients";
import { startLoading } from "../../actions/ui";
import useForm from "../../hooks/useForm";
import Sidebar from "../sidebar/Sidebar";
import PatientsNavbar from "./PatientsNavbar";

const EditPatient = () => {

  const dispatch = useDispatch()
  /* const {patiendEdit} = useSelector(state => state.patients); */

  const state = useSelector(state => [state.patients.patiendEdit, state.ui.loading]);
  const patiendEdit = state[0]
  const loading = state[1]

  const {name: nameDefault,date: dateDefault, tel: telDefault, time: timeDefault, reason: reasonDefault, id} = patiendEdit;


  const [formValues, handleInputChange] = useForm({
    name: nameDefault,
    tel: telDefault,
    date: dateDefault,
    time: timeDefault,
    reason: reasonDefault,
    id: id
  });
  const {name, tel, date, time,  reason} = formValues;

  const handleSaveEdit = (e) => {
    e.preventDefault();
    
    dispatch(editPatient(formValues))
    dispatch(startLoading())
  };



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

              <form
                onSubmit={handleSaveEdit}
              >
                <input 
                  type="text" 
                  placeholder="Name" 
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                />

                <input
                    type="tel" 
                    placeholder="Telefono" 
                    value={tel}
                    name="tel"
                    onChange={handleInputChange}
                 />

                <input 
                  type="date" 
                  value={date}
                  name="date"
                  onChange={handleInputChange}
                />

                <input 
                  type="time" 
                    value={time}
                  name="time"
                  onChange={handleInputChange}
                />

                <textarea 
                  placeholder="Motivo cita"
                  value={reason}
                  name="reason"
                  onChange={handleInputChange}
                ></textarea>

                <input
                  className={loading ? 'btn-edit loading' :  'btn-edit'}
                  type="submit"
                  value='Save edit'
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPatient;
