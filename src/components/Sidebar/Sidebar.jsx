import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../assets/logo-blanco-inventra.webp'
import {
  Iconconfig,
  Icondashboard,
  Iconhelp,
  Iconinventory,
  Iconlogout,
  Iconsuppliers,
  Iconusers
} from '../../utils/CustomIcons'

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
          <Icondashboard className='sidebar__icon' />
          Dashboard
        </Link>
        <Link to='/inventory' className='sidebar__link'>
          <Iconinventory className='sidebar__icon' />
          Inventario
        </Link>
        <Link to='/supplier' className='sidebar__link'>
          <Iconsuppliers className='sidebar__icon' />
          Proveedores
        </Link>
        <Link to='/users' className='sidebar__link'>
          <Iconusers className='sidebar__icon' />
          Usuarios
        </Link>
        <Link to='/setting' className='sidebar__link'>
          <Iconconfig className='sidebar__icon' />
          Configuración
        </Link>
        <Link to='/help' className='sidebar__link'>
          <Iconhelp className='sidebar__icon' />
          Ayuda
        </Link>
        <Link to='/' className='sidebar__link'>
          <Iconlogout className='sidebar__icon' />
          Salir
        </Link>
      </div>
    </>
  )
}

export default Sidebar
