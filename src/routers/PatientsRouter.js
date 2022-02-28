import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddPatient from '../components/patients/AddPatient'
import EditPatient from '../components/patients/EditPatient'
import Patients from '../components/patients/Patients'

const PatientsRouter = () => {
  return (
    <Routes>
        <Route path='/'  element={ <Patients /> }/>
        <Route path='/edit'  element={ <EditPatient /> }/>
        <Route path='/add'  element={ <AddPatient /> }/>
        <Route path='/*'  element={ <Patients /> }/>
    </Routes>
  )
}

export default PatientsRouter