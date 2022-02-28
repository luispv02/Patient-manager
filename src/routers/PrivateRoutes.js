import { Navigate } from "react-router-dom"

const PrivateRoutes = ({auth, element}) => {


  return (
      auth
      ? element
      : <Navigate to='/auth' />

  )
}

export default PrivateRoutes