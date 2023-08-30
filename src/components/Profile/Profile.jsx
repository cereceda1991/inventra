import { useEffect, useState } from 'react'
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import './Profile.css'
import { IconArrowRigth } from '../../utils/CustomIcons'
import { currencyOptions } from '../../utils/currencyOptions'

function Profile() {
  const [editProfile, setEditProfile] = useState(true)
  const [changePassword, setChangePassword] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const storedDarkMode = localStorage.getItem('darkMode')
    return storedDarkMode === 'true'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', isDark.toString())
    document.body.classList.toggle('darkmode', isDark)
  }, [isDark])

  const handleDarkModeToggle = () => {
    setIsDark(!isDark)
  }

  const handleEditProfileClick = () => {
    setEditProfile(true)
    setChangePassword(false)
  }

  const handleChangePasswordClick = () => {
    setChangePassword(true)
    setEditProfile(false)
  }
  return (
    <div className='profile'>
      <div className='left'>
        <h2>Usuario</h2>
        <div className='profile-section' onClick={handleEditProfileClick}>
          <p>Editar Perfil</p>
          <IconArrowRigth />
        </div>
        <div className='profile-section' onClick={handleChangePasswordClick}>
          <p>Cambiar Contraseña</p>
          <IconArrowRigth />
        </div>
        <div>
          <h2>Moneda</h2>
          <select className='profile-select'>
            {currencyOptions.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <p>Mostrar Decimales</p>
          <label className='toggle'>
            <input type='checkbox' />
            <span className='slider'></span>
          </label>
          <h2>Pantalla</h2>
          <p>Modo Oscuro</p>
          <label className='toggle'>
            <input type='checkbox' checked={isDark} onChange={handleDarkModeToggle} />
            <span className='slider'></span>
          </label>
        </div>
      </div>
      {editProfile && <EditProfile />}
      {changePassword && <ChangePassword />}
    </div>
  )
}

export default Profile
