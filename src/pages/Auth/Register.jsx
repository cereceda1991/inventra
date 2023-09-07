import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// Componentes
import ButtonGeneric from '../../components/ButtonGeneric/ButtonGeneric'
// Recursos
import personal from '../../assets/personal_inventra.webp'
import logo from '../../assets/logo-azul-inventra-042.webp'
import { BiLowVision, BiShow } from 'react-icons/bi'
import './Auth.css'

import { useDispatch } from 'react-redux'
import { registerUser } from '../../Redux/Auth/authActions'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isButtonDisabled = !name || !email || !password

  const handleRegister = async (e) => {
    e.preventDefault()
    const userData = {
      name,
      email,
      password,
    }

    try {
      const response = await dispatch(registerUser(userData))
      console.log('Registro exitoso:', response)
      navigate('/dashboard')
    } catch (error) {
      // Si hay un error, establece los errores en el estado local
      if (error.errors) {
        setErrors(error.errors)
      } else {
        console.error('Error en el registro:', error)
      }
    }
  }

  // Define la clase CSS para resaltar los campos con error
  const inputErrorClass = (field) => (errors && errors[field] ? 'input-error' : '')

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
              className={inputErrorClass('name')}
              required
            />
            {errors.name && <div className='auth__error'>{errors.name.join(', ')}</div>}
            <input
              type='email'
              placeholder='Correo electrónico'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
              className={inputErrorClass('email')}
              required
            />
            {errors.email && <div className='auth__error'>{errors.email.join(', ')}</div>}
            <div className='auth__password'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='password'
                className={inputErrorClass('password')}
                required
              />
              <p className='auth__password-toggle' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <BiLowVision /> : <BiShow />}
              </p>
            </div>
            {errors.password && <div className='auth__error'>{errors.password.join(', ')}</div>}
            <ButtonGeneric
              type='submit'
              buttonContent='Registrarse'
              isDisabled={isButtonDisabled}
            />
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
