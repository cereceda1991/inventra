import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// Iconos, Utilidades,Imagenes y Estilos
import { FaBars } from 'react-icons/fa'
import {
  Iconconfig,
  Icondashboard,
  Iconhelp,
  Iconinventory,
  Iconlogout,
  Iconusers,
} from '../../utils/CustomIcons'
import showDialog from '../../utils/showDialog'
import logo from '../../assets/logo-blanco-inventra.webp'
import './Sidebar.css'

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigate = useNavigate()

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleLogout = async () => {
    const confirmed = await showDialog(
      'Cerrar Sesión',
      '¿Estás seguro de que deseas cerrar sesión?',
      'question',
    )

    if (confirmed) {
      // Elimina el token del localStorage
      localStorage.removeItem('userResponse')

      // Redirige al usuario a la página de inicio
      navigate('/')
    }
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
        <div className='sidebar__link' onClick={handleLogout}>
          <Iconlogout className='sidebar__icon' />
          Salir
        </div>
      </div>
    </>
  )
}

export default Sidebar
