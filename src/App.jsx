import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {

  return (
    <main>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
    </main>
  )
}

export default App
