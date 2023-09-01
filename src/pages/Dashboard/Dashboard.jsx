import { useState } from 'react'

import { BiSolidBellRing, BiSolidCalendarCheck, BiSolidUser } from 'react-icons/bi'

import CardDashboardBottom from '../../components/CardDashboard/CardDashboardBottom'
import DashboardChart from '../../components/DashboardChart/DashboardChart'
import CardDashboard from '../../components/CardDashboard/CardDashboard'
import WeekChart from '../../components/DashboardChart/WeekChart'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

import { IcontrendingDown, IcontrendingUpGreen, IcontrendingUpRed } from '../../utils/CustomIcons'
import { productStockDown, productStockStable, productStockUp } from '../../API/dataStock'
import { dataPointRadius } from '../../API/dataPointRadius'
import { typeofgraphics } from '../../API/typeofgraphics'
import { dataTension } from '../../API/dataTension'

import './Dashboard.css'
const Dashboard = () => {
  const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
  const userName = 'Rocio del Solar'
  const userRole = 'Administrador'

  const [selectedChartType, setSelectedChartType] = useState('line')
  const [selectedTensionType, setSelectedTensionType] = useState(0.4)
  const [selectedPointRadius, setSelectedPointRadius] = useState(2)

  const handleChartTypeChange = (event) => {
    setSelectedChartType(event.target.value)
  }

  const handleTensionTypeChange = (event) => {
    setSelectedTensionType(event.target.value)
  }

  const handlePointRadiusChange = (event) => {
    setSelectedPointRadius(event.target.value)
  }

  return (
    <section className='container__dashboard'>
      <Sidebar />
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      <section className='container_chart-board'>
        <div className='chart_board-cards'>
          <CardDashboard icon={<BiSolidUser />} title='Usuarios' value={10} />
          <CardDashboard icon={<BiSolidCalendarCheck />} title='Items' value={50} />
          <CardDashboard icon={<BiSolidBellRing />} title='Notificaciones' value={10} />
        </div>
        <div className='chart_board-week'>
          <h1>Semana anterior</h1>
          <WeekChart />
        </div>
      </section>
      <section className='chart_board'>
        <div className='chat_board-header'>
          <h1>Análisis de salidas</h1>
          <p>Gráfico</p>
          <select value={selectedChartType} onChange={handleChartTypeChange}>
            {typeofgraphics.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p>Tensión</p>
          <select value={selectedTensionType} onChange={handleTensionTypeChange}>
            {dataTension.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p>Radio</p>
          <select value={selectedPointRadius} onChange={handlePointRadiusChange}>
            {dataPointRadius.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className='container_buttons-dashboard'>
            <button className='button_dashboard-month'>Mes actual</button>
            <button className='button_dashboard-year'>2023</button>
          </div>
        </div>
        <DashboardChart
          chartType={selectedChartType}
          tension={selectedTensionType}
          pointRadius={selectedPointRadius}
        />
      </section>
      <div className='chart_board-bottoms'>
        <CardDashboardBottom
          icon={<IcontrendingDown />}
          title='Stock bajo'
          products={productStockDown}
        />
        <CardDashboardBottom
          icon={<IcontrendingUpGreen />}
          title='Stock estable'
          products={productStockStable}
        />
        <CardDashboardBottom
          icon={<IcontrendingUpRed />}
          title='Sobre stock'
          products={productStockUp}
        />
      </div>
    </section>
  )
}

export default Dashboard
