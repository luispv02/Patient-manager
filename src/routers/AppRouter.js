import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { login } from '../actions/auth'
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
        console.log('Si existe un usuario')
        dispatch(login(user.uid, user.displayName));
        setAuthenticated(true)
      }else{
        console.log('No existe un usuario')
        setAuthenticated(false)
      }

      setMsgWaiting(false)
    })
  }, []);


  if(msgWaiting){
    return <h1>Espere....</h1>
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