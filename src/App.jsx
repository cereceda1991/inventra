import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Inventory from './pages/Inventory/Inventory'
import Users from './pages/Users/Users'
import Help from './pages/Help/Help'
import Setting from './pages/Setting/Setting'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import ErrorPage from './pages/Error/ErrorPage'

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/users' element={<Users />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/help' element={<Help />} />
        {/* Página de error */}
        <Route render={() => <ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
