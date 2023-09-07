import { useState } from 'react';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import { currencyOptions } from '../../API/currencyOptions';
import { IoIosArrowForward } from 'react-icons/io';

import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Redux/DarkMode/darkModeSlice';

function Profile() {
  const [editProfile, setEditProfile] = useState(true);
  const [changePassword, setChangePassword] = useState(false);

  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleEditProfileClick = () => {
    setEditProfile(true);
    setChangePassword(false);
  };

  const handleChangePasswordClick = () => {
    setChangePassword(true);
    setEditProfile(false);
  };

  return (
    <main className="profile">
      <section className="profile__left">
        <h2>Usuario</h2>
        <section className="profile-section" onClick={handleEditProfileClick}>
          <p>Editar Perfil</p>
          <IoIosArrowForward />
        </section>
        <section
          className="profile-section"
          onClick={handleChangePasswordClick}
        >
          <p>Cambiar Contraseña</p>
          <IoIosArrowForward />
        </section>
        <section className="profile-settings">
          <section>
            <h2>Moneda</h2>
            <div>
              <select className="profile-select">
                {currencyOptions.map((currency, index) => (
                  <option key={index} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className="profile-settings-toggle">
              <p>Mostrar Decimales</p>
              <label className="toggle">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </section>
          <section>
            <h2>Pantalla</h2>
            <div className="profile-settings-toggle">
              <p>Modo Oscuro</p>
              <label className="toggle">
                <input
                  type="checkbox"
                  defaultChecked={isDarkMode}
                  onChange={handleDarkModeToggle}
                />
                <span className="slider"></span>
              </label>
            </div>
          </section>
        </section>
      </section>
      <section className="profile__right">
        {editProfile && <EditProfile />}
        {changePassword && <ChangePassword />}
      </section>
    </main>
  );
}

export default Profile;
