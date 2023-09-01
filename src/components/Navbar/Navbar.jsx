import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai'
import './Navbar.css'
import { NavbarPropTypes } from '../../utils/propTypes'

const Navbar = ({ userImage, userName, userRole }) => {
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
        <img className='navbar__user-image' src={userImage} alt='Usuario' />
        <div className='navbar__user-info'>
          <p>{userName}</p>
          <p>{userRole}</p>
        </div>
      </section>
    </nav>
  )
}

Navbar.propTypes = NavbarPropTypes

export default Navbar
