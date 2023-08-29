import { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import personal from '../../assets/personal_inventra.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import { BiLowVision, BiShow } from 'react-icons/bi'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isButtonDisabled = !email || !password

  const handleLogin = () => {
    if (!isButtonDisabled) {
      // Lógica de registro aquí
    }
  }

  return (
    <div className='login'>
      <div className='register__image'>
        <img className='register__image-bg' src={personal} alt='personal' />
        <div className='register__overlay'></div>
      </div>
      <div className='login__content-container'>
        <section className='login__content'>
          <div className='register__logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <h1 className='login__title'>¡Hola de nuevo!</h1>
          <p className='login__paragraph'>
            Inicia sesión para continuar gestionando tu inventario y hacer
            crecer tu negocio.
          </p>
          <input
            type='email'
            placeholder='Correo electrónico'
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='register__password'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              className='register__password-toggle'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiLowVision /> : <BiShow />}
            </button>
          </div>
          <div className='login__forgot-password'>
            <Link to='/forgot-password'>Recuperar contraseña</Link>
          </div>
          <button
            className={`login__button ${isButtonDisabled && 'disabled'}`}
            onClick={handleLogin}
          >
            Ingresar
          </button>
          <div className='login__register-link'>
            ¿No tienes una cuenta? <Link to='/register'>Regístrate ahora</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
