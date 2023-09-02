import { useState } from 'react'
import './Auth.css'
import { Link } from 'react-router-dom'
import personal from '../../assets/personal_inventra.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import { BiLowVision, BiShow } from 'react-icons/bi'
import ButtonGeneric from '../../components/ButtonGeneric/ButtonGeneric'

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
    <main className='auth'>
      <section className='auth__left'>
        <img className='auth__left-bg' src={personal} alt='personal' />
        <div className='auth__overlay'></div>
      </section>
      <section className='auth__right'>
        <div className='auth__content'>
          <div className='auth__logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <h1 className='auth__title'>¡Hola de nuevo!</h1>
          <p className='auth__paragraph'>
            Inicia sesión para continuar gestionando tu inventario y hacer crecer tu negocio.
          </p>
          <form>
            <input
              type='email'
              placeholder='Correo electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
              required
            />
            <div className='auth__password'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='password'
                required
              />
              <p className='auth__password-toggle' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiLowVision /> : <BiShow />}
              </p>
            </div>
            <div className='auth__forgot-password'>
              <Link to='/forgot-password'>Recuperar contraseña</Link>
            </div>
            <Link to='/dashboard'>
              <ButtonGeneric
                buttonContent='Ingresar'
                onClick={handleLogin}
                isDisabled={isButtonDisabled}
              />
            </Link>
          </form>
          <div className='auth__login-link'>
            ¿No tienes una cuenta? <Link to='/register'>Regístrate ahora</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
