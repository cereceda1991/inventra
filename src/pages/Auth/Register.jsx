import { useState } from 'react'
import { Link } from 'react-router-dom'
// Componentes
import ButtonGeneric from '../../components/ButtonGeneric/ButtonGeneric'
// Recursos
import personal from '../../assets/personal_inventra.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import { BiLowVision, BiShow } from 'react-icons/bi'
import './Auth.css'

import { registerUser } from '../../Redux/authActions'
import { useDispatch } from 'react-redux'

const Register = () => {

  console.log('Componente Register cargado');
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch();

  const isButtonDisabled = !name || !email || !password

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    console.log('Datos enviados desde el formulario:', userData);
    dispatch(registerUser(userData));
  }


  return (
    <main className='auth'>
      <section className='auth__left'>
        <img className='auth__image-bg' src={personal} alt='personal' />
        <div className='auth__overlay'></div>
      </section>
      <section className='auth__right'>
        <section className='auth__content'>
          <div className='auth__logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>
          <h1 className='auth__title'>Te damos la bienvenida</h1>
          <p className='auth__paragraph'>
            Regístrate para conocer todas las ventajas que Inventra tiene para ti.
          </p>
          <form onSubmit={handleRegister}>
            <input
              type='text'
              placeholder='Nombre'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='name'
              required
            />
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
            <ButtonGeneric type="submit" buttonContent='Registrarse' isDisabled={isButtonDisabled} />
          </form>
          <div className='auth__login-link'>
            ¿Ya tienes una cuenta? <Link to='/login'>Ingresa ahora</Link>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Register
