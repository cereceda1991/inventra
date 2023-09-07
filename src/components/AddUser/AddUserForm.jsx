import { useState } from 'react'
import { BiLowVision, BiShow } from 'react-icons/bi'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './AddUserForm.css'
// import { registerUser } from '../../Redux/authActions'
import { useDispatch } from 'react-redux'
import { AddUserFormPropTypes } from '../../utils/propTypes'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'
import { registerUser } from '../../Redux/Auth/authActions'

const AddUserForm = ({ roles, handleCancel, handleSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword)
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword)
    }
  }

  const isDisabled = Object.values(formData).some((value) => value === '')

  const dispatch = useDispatch()

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      toast.error('Las contraseñas no coinciden')
      return
    }
    console.log('Valor de selectedRole que se envía:', formData.selectedRole)

    try {
      const response = await dispatch(registerUser(formData))
      console.log('Registro exitoso:', response)
      toast.success('Usuario creado con éxito')
      handleSave()
    } catch (error) {
      if (error.errors) {
        setErrors(error.errors)
      } else {
        console.error('Error en el registro:', error)
      }
    }
  }

  const showError = (field) =>
    errors[field] && <div className='auth__error'>{errors[field].join(', ')}</div>

  return (
    <main className='add-user-form'>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Nombre de Usuario'
            autoComplete='name'
            className={errors.name ? 'input-error' : ''}
            required
          />
          {showError('name')}
        </div>
        <div className='form-group'>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Correo Electrónico'
            autoComplete='email'
            className={errors.email ? 'input-error' : ''}
            required
          />
          {showError('email')}
        </div>
        <div className='form-group'>
          <input
            type={showPassword ? 'text' : 'password'}
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            placeholder='Contraseña'
            autoComplete='new-password'
            className={errors.password ? 'input-error' : ''}
            required
          />
          {showError('password')}
          <p className='password-toggle' onClick={() => togglePasswordVisibility('password')}>
            {showPassword ? <BiLowVision /> : <BiShow />}
          </p>
        </div>
        <div className='form-group'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder='Confirmar Contraseña'
            autoComplete='new-password'
            required
          />
          <p
            className='password-toggle'
            onClick={() => togglePasswordVisibility('confirmPassword')}
          >
            {showConfirmPassword ? <BiLowVision /> : <BiShow />}
          </p>
        </div>
        <div className='form-group'>
          <select name='role' value={formData.role} onChange={handleInputChange}>
            <option value=''>Seleccione un rol</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <p className='note'>
          Por defecto, solo los usuarios administradores podrán hacer algún tipo de creación y
          modificación en el sistema.
        </p>
        <div className='button-group'>
          <ButtonGeneric buttonContent='Cancelar' onClick={handleCancel} />
          <ButtonGeneric type='submit' buttonContent='Guardar' isDisabled={isDisabled} />
        </div>
      </form>
    </main>
  )
}

AddUserForm.propTypes = AddUserFormPropTypes

export default AddUserForm
