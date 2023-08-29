import { useState } from 'react'
import {
  FaHome,
  FaBox,
  FaTruck,
  FaUser,
  FaQuestion,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/logo-blanco-inventra.webp'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <>
      <button className='sidebar__toggle' onClick={handleToggleSidebar}>
        <FaBars />
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to='/'>
          <div className='sidebar__logo'>
            <img src={logo} alt='Logo' />
          </div>
        </Link>
        <Link to='/dashboard' className='sidebar__link'>
          <FaHome className='sidebar__icon' />
          Dashboard
        </Link>
        <Link to='/inventario' className='sidebar__link'>
          <FaBox className='sidebar__icon' />
          Inventario
        </Link>
        <Link to='/proveedores' className='sidebar__link'>
          <FaTruck className='sidebar__icon' />
          Proveedores
        </Link>
        <Link to='/usuarios' className='sidebar__link'>
          <FaUser className='sidebar__icon' />
          Usuarios
        </Link>
        <Link to='/ayuda' className='sidebar__link'>
          <FaQuestion className='sidebar__icon' />
          Ayuda
        </Link>
        <Link to='/salir' className='sidebar__link'>
          <FaSignOutAlt className='sidebar__icon' />
          Salir
        </Link>
      </div>
    </>
  )
}

export default Sidebar
