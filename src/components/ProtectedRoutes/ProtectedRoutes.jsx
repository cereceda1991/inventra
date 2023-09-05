import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  const userResponseString = localStorage.getItem('userResponse')

  if (userResponseString) {
    try {
      const userResponse = JSON.parse(userResponseString)

      if (userResponse.data && userResponse.data.user) {
        return <Outlet />
      }
    } catch (error) {
      // Maneja cualquier error al analizar JSON, por ejemplo, si userResponse no es un JSON válido
    }
  }

  return <Navigate to='/login' />
}

export default ProtectedRoutes
