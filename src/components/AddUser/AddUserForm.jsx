import { useState } from 'react'
import './AddUserForm.css'
import { BiLowVision, BiShow } from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'
import { AddUserFormPropTypes } from '../../utils/propTypes'
const AddUserForm = ({ roles, handleCancel, handleSave }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const isDisabled = !userName || !email || !password || !confirmPassword || !selectedRole

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Perform validation and handle form submission
    if (password !== confirmPassword) {
      toast.error(`Passwords don't match`)
      return
    }
    // Call the save handler with the form data
    handleSave({
      userName,
      email,
      password,
      role: selectedRole
    })
  }

  return (
    <div className='add-user-form'>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <input
            type='text'
            value={userName}
            onChange={handleUserNameChange}
            placeholder='Nombre de Usuario'
            autoComplete='username'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Correo Electrónico'
            autoComplete='email'
            required
          />
        </div>
        <div className='form-group'>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            placeholder='Contraseña'
            autoComplete='new-password'
            required
          />
          <p className='password-toggle' onClick={togglePasswordVisibility}>
            {showPassword ? <BiLowVision /> : <BiShow />}
          </p>
        </div>
        <div className='form-group'>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder='Confirmar Contraseña'
            autoComplete='new-password'
            required
          />
          <p className='password-toggle' onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <BiLowVision /> : <BiShow />}
          </p>
        </div>

        <div className='form-group'>
          <select value={selectedRole} onChange={handleRoleChange}>
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
          <ButtonGeneric buttonContent='Guardar' onClick={handleCancel} isDisabled={isDisabled} />
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}
AddUserForm.propTypes = AddUserFormPropTypes

export default AddUserForm
