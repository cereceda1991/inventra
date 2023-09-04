import { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'
import './Navbar.css'

const Navbar = () => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    // Carga los datos almacenados desde Local Storage cuando el componente se monta
    const userResponseString = localStorage.getItem('userResponse')
    if (userResponseString) {
      const userResponse = JSON.parse(userResponseString)
      setUserData(userResponse.data.user)
    }
  }, [])

  return (
    <nav className='container__navbar'>
      <section className='navbar__search'>
        <input className='navbar__search-input' type='text' placeholder='Buscar' />
        <AiOutlineSearch className='navbar__search-icon' />
      </section>
      <section className='navbar__notification'>
        <AiOutlineBell className='navbar__notification-icon' />
        <div className='navbar__notification-badge'></div>
      </section>
      <section className='navbar__user'>
        <img className='navbar__user-image' src={userData.profile} alt='Usuario' />
        <div className='navbar__user-info'>
          <p>{userData.name}</p>
          <p>{userData.role}</p>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
