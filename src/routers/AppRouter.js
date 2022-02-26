import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Home from '../components/home/Home'
import AddPatient from '../components/patients/AddPatient'
import EditPatient from '../components/patients/EditPatient'


const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'  element={ <Home /> }/>
            <Route path='/add'  element={ <AddPatient /> }/>
            <Route path='/edit'  element={ <EditPatient /> }/>
            <Route path='/login'  element={ <Login /> }/>
            <Route path='/register'  element={ <Register /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter