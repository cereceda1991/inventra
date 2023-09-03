import { useEffect, useState } from 'react'
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import { currencyOptions } from '../../API/currencyOptions'
import { IconArrowRigth } from '../../utils/CustomIcons'
import './Profile.css'
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
    <main className='profile'>
      <section className='profile__left'>
        <h2>Usuario</h2>
        <section className='profile-section' onClick={handleEditProfileClick}>
          <p>Editar Perfil</p>
          <IconArrowRigth />
        </section>
        <section className='profile-section' onClick={handleChangePasswordClick}>
          <p>Cambiar Contraseña</p>
          <IconArrowRigth />
        </section>
        <section className='profile-settings'>
          <setion>
            <h2>Moneda</h2>
            <div>
              <select className='profile-select'>
                {currencyOptions.map((currency, index) => (
                  <option key={index} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className='profile-settings-toggle'>
              <p>Mostrar Decimales</p>
              <label className='toggle'>
                <input type='checkbox' />
                <span className='slider'></span>
              </label>
            </div>
          </setion>
          <section>
            <h2>Pantalla</h2>
            <div className='profile-settings-toggle'>
              <p>Modo Oscuro</p>
              <label className='toggle'>
                <input type='checkbox' checked={isDark} onChange={handleDarkModeToggle} />
                <span className='slider'></span>
              </label>
            </div>
          </section>
        </section>
      </section>
      <section className='profile__right'>
        {editProfile && <EditProfile />}
        {changePassword && <ChangePassword />}
      </section>
    </main>
  )
}

export default Profile
