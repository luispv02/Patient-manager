import { useDispatch, useSelector } from 'react-redux';
import { startAddPatient } from '../../actions/patients';
import { removeMsgError, showMsgError, startLoading } from '../../actions/ui';
import useForm from '../../hooks/useForm';
import Sidebar from '../sidebar/Sidebar';
import PatientsNavbar from './PatientsNavbar'
import {Helmet} from "react-helmet";

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
    dispatch(startAddPatient(formValues));
    dispatch(removeMsgError())
    dispatch(startLoading())
  }

 
  return (
    <div className="application">
      <Helmet>
        <meta name="description" content="Administrador de Pacientesssss" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://patient-manager-41wnidiov-luispv02.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Administrador de Pacientes" />
        <meta property="og:description" content="Pagina para administrar tus pacientes, editar y eliminar registros" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1700721728829-ae246d335d87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMjMyNjIzNg&ixlib=rb-4.0.3&q=80&w=1200" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="my-updated-portfolio.vercel.app" />
        <meta property="twitter:url" content="https://patient-manager-41wnidiov-luispv02.vercel.app/" />
        <meta name="twitter:title" content="Administrador de Pacientes" />
        <meta name="twitter:description" content="Pagina para administrar tus pacientes, editar y eliminar registros" />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1700721728829-ae246d335d87?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=630&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwMjMyNjIzNg&ixlib=rb-4.0.3&q=80&w=1200" />

      </Helmet>
    
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 col-md-4 col-lg-3 p-0">
            <Sidebar />
          </div>

          <div className="col-12 col-md-8 col-lg-9 p-0">
            <div className="add__patient">
              <PatientsNavbar />

              <div className="add__patient__content">
                <h1>Add Patient</h1>

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
                    placeholder="Reason for the appointment" 
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
    </div>
  );
}

export default AddPatient