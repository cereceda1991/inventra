import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Help from './pages/Help/Help'
import Home from './pages/Home/Home'
import Inventory from './pages/Inventory/Inventory'
import Setting from './pages/Setting/Setting'
import Users from './pages/Users/Users'

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
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </main>
  )
}

export default App
