import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Setting.css'

const Setting = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  return (
    <section className='container__dashboard'>
      <Sidebar />
      <section className='header__navbar'>
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      </section>
      <Profile />
    </section>
  )
}

export default Setting