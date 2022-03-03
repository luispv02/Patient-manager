import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
import { getPatients } from '../actions/patients'
import AuthRouter from './AuthRouter'
import PatientsRouter from './PatientsRouter'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'


const AppRouter = () => {

  const dispatch = useDispatch();

  const [authenticated, setAuthenticated] = useState(false);
  const [msgWaiting, setMsgWaiting] = useState(false)

  useEffect(() => {
    const auth = getAuth();
    setMsgWaiting(true)
    onAuthStateChanged(auth, (user) => {
      if(user){
        dispatch(login(user.uid, user.displayName));
        setAuthenticated(true)
        dispatch(getPatients(user.uid))
      }else{
        setAuthenticated(false)
      }

      setMsgWaiting(false)
    })
  }, [dispatch]);


  if(msgWaiting){
    return <h1>Wait...</h1>
  } 

  return (
    <BrowserRouter>
        <Routes>


        <Route path='/*' element={
          <PrivateRoutes auth={authenticated} element={ <PatientsRouter /> }/>
        }/>

        
        <Route path='/auth/*'  element={
          <PublicRoutes auth={authenticated} element={ <AuthRouter /> } />
        } />

            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter