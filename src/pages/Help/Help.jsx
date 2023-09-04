import HelpSection from '../../components/HelpSetion/HelpSection'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import './Help.css'

const Help = () => {
  return (
    <section className='container__dashboard'>
      <Sidebar />
      <Navbar />
      <HelpSection />
    </section>
  )
}

export default Help
