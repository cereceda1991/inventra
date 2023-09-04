import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
  if (localStorage.token !== '') {
    return <Outlet />
  } else {
    return <Navigate to='/login' />
  }
}

export default ProtectedRoutes
