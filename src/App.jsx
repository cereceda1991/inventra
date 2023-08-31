import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Inventory from './pages/Inventory/Inventory'
import Users from './pages/Users/Users'
import Help from './pages/Help/Help'
import Setting from './pages/Setting/Setting'

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
        Help
      </Routes>
    </main>
  )
}

export default App
