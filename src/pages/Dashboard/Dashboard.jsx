import { useState } from 'react'

import { BiSolidBellRing, BiSolidCalendarCheck, BiSolidUser } from 'react-icons/bi'

import { typeofgraphics } from '../../API/typeofgraphics'

import DashboardChart from '../../components/DashboardChart/DashboardChart'
import CardDashboard from '../../components/CardDashboard/CardDashboard'
import WeekChart from '../../components/DashboardChart/WeekChart'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

import './Dashboard.css'
const Dashboard = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  const [selectedChartType, setSelectedChartType] = useState('line')

  const handleChartTypeChange = (event) => {
    setSelectedChartType(event.target.value)
  }

  return (
    <section className='container__dashboard'>
      <Sidebar />
      <section className='header__navbar'>
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      </section>
      <section className='container_chart-board'>
        <div className='chart_board-cards'>
          <CardDashboard icon={<BiSolidUser />} title='Usuarios' value={10} />
          <CardDashboard icon={<BiSolidCalendarCheck />} title='Items' value={50} />
          <CardDashboard icon={<BiSolidBellRing />} title='Notificaciones' value={10} />
        </div>
        <div className='chart_board-week'>
          <WeekChart />
        </div>
      </section>










      <section className='chart_board'>
        <div className='chat_board-header'>
          <h1>Análisis de movimientos</h1>
          <p>Tipo de Gráfico</p>
          <select value={selectedChartType} onChange={handleChartTypeChange}>
            {typeofgraphics.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <DashboardChart chartType={selectedChartType} />
      </section>
    </section>
  )
}

export default Dashboard
