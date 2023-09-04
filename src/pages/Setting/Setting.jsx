import Navbar from '../../components/Navbar/Navbar'
import Profile from '../../components/Profile/Profile'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Setting.css'

const Setting = () => {
  return (
    <section className='container__dashboard'>
      <Sidebar />
      <Navbar />
      <Profile />
    </section>
  )
}

export default Setting
