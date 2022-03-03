import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAddPatien } from '../../actions/patients';
import { removeMsgError, showMsgError, startLoading } from '../../actions/ui';
import useForm from '../../hooks/useForm';
import Sidebar from '../sidebar/Sidebar';
import PatientsNavbar from './PatientsNavbar'

const AddPatient = () => {

  const dispatch = useDispatch();
  const state = useSelector(state => [state.ui.msgError, state.ui.loading]);
  const msgError = state[0]
  const loading = state[1]
  
  const [formValues,  handleInputChange, resetForm] = useForm({
    name: '',
    tel: '',
    date: '',
    time: '',
    reason: ''
  });
  const {name, tel, date, time, reason} = formValues;

  const handleAddPatient = (e) => {
    e.preventDefault();

    if(name.trim().length < 2 || tel.trim().length < 7 || date === '' || time === '' || reason === ''){
      dispatch(showMsgError('Todos los campos son obligatorios'))
      return false
    }
   
    resetForm()
    dispatch(removeMsgError())
    dispatch(startAddPatien(formValues));
    dispatch(startLoading())
  }
 
  return (
    <div className="container-fluid p-0">
      <div className="row m-0">
        <div className="col-12 col-md-4 col-lg-3 p-0">
          <Sidebar />
        </div>

        <div className="col-12 col-md-8 col-lg-9 p-0">
          <div className="add__patient">
            <PatientsNavbar />

            <div className="add__patient__content">
              <h1>Agregar Paciente</h1>

              {
                    msgError && <p className="msg-error">{msgError}</p>
              }

              <form
                onSubmit={handleAddPatient}
              >
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />

                <input 
                  type="number" 
                  placeholder="Telefono" 
                  name="tel"
                  onChange={handleInputChange}
                  value={tel}
                />

                <input 
                  type="date" 
                  name="date"
                  onChange={handleInputChange}
                  value={date}
                />

                <input 
                  type="time" 
                  name="time"
                  onChange={handleInputChange}
                  value={time}
                />

                <textarea 
                  placeholder="Motivo cita" 
                  name="reason"
                  onChange={handleInputChange}
                  value={reason}
                ></textarea>

                <input 
                  className={loading ? 'btn-add loading' :  'btn-add'}
                  type="submit"
                  value='Add patient'
                  disabled={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPatient