import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoutes = ({auth, element}) => {
  return (
    auth
    ? <Navigate to='/'/>
    : element
    
  )
}

export default PublicRoutes