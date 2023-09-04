import { useState } from 'react'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import personal from '../../assets/personal_inventra.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import { BiLowVision, BiShow } from 'react-icons/bi'
import ButtonGeneric from '../../components/ButtonGeneric/ButtonGeneric'

import { useDispatch } from 'react-redux'
import { loginUser } from '../../Redux/authActions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(null);

  const isButtonDisabled = !email || !password;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password,
    };

    try {
      const response = await dispatch(loginUser(credentials));
      console.log('Inicio de sesión exitoso:', response);
      navigate('/dashboard'); // Redirige si el inicio de sesión fue exitoso
    } catch (error) {
      // Si hay un error, establece el mensaje de error en el estado local
      console.error('Error en el inicio de sesión:', error.error);
      setError(error.error);
    }
  };

  // Define la clase CSS para resaltar los campos con error
  const inputErrorClass = error ? 'input-error' : '';

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
          <form onSubmit={handleLogin}>
            <input
              type='email'
              placeholder='Correo electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
              className={inputErrorClass}
              required
            />
            <div className='auth__password'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='password'
                className={inputErrorClass}
                required
              />
              <p className='auth__password-toggle' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiLowVision /> : <BiShow />}
              </p>
            </div>
            {error && <div className='auth__error'>{error}</div>}
            <div className='auth__forgot-password'>
              <Link to='/forgot-password'>Recuperar contraseña</Link>
            </div>
            <ButtonGeneric type='submit' buttonContent='Ingresar' isDisabled={isButtonDisabled} />
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
