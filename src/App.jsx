import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Help from './pages/Help/Help';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import Setting from './pages/Setting/Setting';
import Users from './pages/Users/Users';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './Redux/DarkMode/darkModeSlice';

const App = () => {
  const isDarkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    // Obtener el valor de localStorage al cargar la aplicación
    const storedDarkMode = localStorage.getItem('darkmode') === 'true';

    // Aplicar la clase CSS según el valor actual de localStorage
    document.body.classList.toggle('darkmode', storedDarkMode);

    // Actualizar el estado de Redux si es necesario
    if (isDarkMode !== storedDarkMode) {
      dispatch(toggleDarkMode());
    }
  }, [dispatch, isDarkMode]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Rutas protegidas por token */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/users" element={<Users />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
