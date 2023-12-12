import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startAddPatient } from '../../actions/patients';
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
    dispatch(startAddPatient(formValues));
    dispatch(removeMsgError())
    dispatch(startLoading())
  }

  
  useEffect(() => {
    // Actualizar las etiquetas meta
    updateMetaTags();
  }, []);

  const updateMetaTags = () => {

    console.log('location: ', window.location.hostname)

    const existingOGMetaTags = document.querySelectorAll('meta[property^="og:"]');
    existingOGMetaTags.forEach(tag => tag.remove());

    createMetaTag("og:title", "Mi Pagina Web")
    createMetaTag("og:type", "website")
    createMetaTag("og:image", "https://www.webdevelopmentscripts.com/post-images/685b-change-browser-address-bar-color-chrome-android.jpeg", "image")
    createMetaTag("og:url", "https://www.google.com/")
    createMetaTag("og:description", "Descripción sobre mi y de la pagina creada")
    createMetaTag("og:image:type", "image/jpeg")
    // createMetaTag("og:image:width", "256")
    // createMetaTag("og:image:height", "256")

  }; 

  const createMetaTag = (property, content, itemprop) => {
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("property", property);
    if(itemprop){
      metaTag.setAttribute("itemprop", itemprop);
    }
    metaTag.setAttribute("content", content);
    console.log('metaTag: ', metaTag)

    document.head.appendChild(metaTag);
  };
 
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
  );
}

export default AddPatient