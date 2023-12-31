import { useEffect, useState } from 'react';

import {
  BiSolidBellRing,
  BiSolidCalendarCheck,
  BiSolidUser,
} from 'react-icons/bi';

import CardDashboardBottom from '../../components/CardDashboard/CardDashboardBottom';
import DashboardChart from '../../components/DashboardChart/DashboardChart';
import CardDashboard from '../../components/CardDashboard/CardDashboard';
import WeekChart from '../../components/DashboardChart/WeekChart';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

import {
  IcontrendingDown,
  IcontrendingUpGreen,
  IcontrendingUpRed,
} from '../../utils/CustomIcons';
import {
  productStockDown,
  productStockStable,
  productStockUp,
} from '../../API/dataStock';
import { dataPointRadius } from '../../API/dataPointRadius';
import { typeofgraphics } from '../../API/typeofgraphics';
import { dataTension } from '../../API/dataTension';

import './Dashboard.css';
import { dataColor } from '../../API/dataColor';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../Redux/User/userActions';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [selectedChartType, setSelectedChartType] = useState('line');
  const [selectedTensionType, setSelectedTensionType] = useState(0.4);
  const [selectedPointRadius, setSelectedPointRadius] = useState(2);
  const [selectedColor, setSelectedColor] = useState('');

  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users.data);
  const users = usersData ? usersData.users : [];

  const productsData = useSelector((state) => state.product.products.data);
  const products = productsData ? productsData.products : [];

  useEffect(() => {
    // Llama a la acción para obtener la lista de usuarios cuando el componente se monta
    dispatch(getUsers());
  }, [dispatch]);

  // Calcula la cantidad de usuarios
  const userCount = users.length;
  const ProductCount = products.length;

  const handleChartTypeChange = (event) => {
    setSelectedChartType(event.target.value);
  };

  const handleTensionTypeChange = (event) => {
    setSelectedTensionType(event.target.value);
  };

  const handlePointRadiusChange = (event) => {
    setSelectedPointRadius(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <section className="container__dashboard">
      <Sidebar />
      <Navbar />
      <section className="container_chart-board">
        <div className="chart_board-cards">
          <Link to={'/users'}>
            <CardDashboard
              icon={<BiSolidUser />}
              title="Usuarios"
              value={userCount}
            />
          </Link>
          <Link to={'/inventory'}>
            <CardDashboard
              icon={<BiSolidCalendarCheck />}
              title="Items"
              value={ProductCount}
            />
          </Link>
          <CardDashboard
            icon={<BiSolidBellRing />}
            title="Notificaciones"
            value={10}
          />
        </div>
        <div className="chart_board-week">
          <WeekChart />
        </div>
      </section>
      <section className="chart_board">
        <h1 className="chart_board-tittle">Análisis de salidas</h1>
        <div className="chat_board-header">
          <section>
            <label>Gráfico</label>
            <select value={selectedChartType} onChange={handleChartTypeChange}>
              {typeofgraphics.map((type, index) => (
                <option key={`chartType-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </section>
          <section>
            <label>Tensión</label>
            <select
              value={selectedTensionType}
              onChange={handleTensionTypeChange}
            >
              {dataTension.map((type, index) => (
                <option key={`TensionType-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </section>
          <section>
            <label>Color</label>
            <select value={selectedTensionType} onChange={handleColorChange}>
              {dataColor.map((type, index) => (
                <option key={`ColorType-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </section>
          <section>
            <label>Radio</label>
            <select
              value={selectedPointRadius}
              onChange={handlePointRadiusChange}
            >
              {dataPointRadius.map((type, index) => (
                <option key={`RadiusType-${index}`} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </section>
          <div className="container_buttons-dashboard">
            <button className="button_dashboard-month">Mes actual</button>
            <button className="button_dashboard-year">2023</button>
          </div>
        </div>
        <DashboardChart
          chartType={selectedChartType}
          tension={selectedTensionType}
          pointRadius={selectedPointRadius}
          color={selectedColor}
        />
      </section>
      <section className="chart_board-bottoms">
        <CardDashboardBottom
          icon={<IcontrendingDown />}
          title="Stock bajo"
          products={productStockDown}
        />
        <CardDashboardBottom
          icon={<IcontrendingUpGreen />}
          title="Stock estable"
          products={productStockStable}
        />
        <CardDashboardBottom
          icon={<IcontrendingUpRed />}
          title="Sobre stock"
          products={productStockUp}
        />
      </section>
    </section>
  );
};

export default Dashboard;
