import HelpSection from '../../components/HelpSetion/HelpSection'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Help.css'

const Help = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  return (
    <section className='container__dashboard'>
      <Sidebar />
      <section className='header__navbar'>
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      </section>
      <HelpSection />
    </section>
  )
}

export default Help
