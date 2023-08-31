import { useState } from 'react'
import PropTypes from 'prop-types'
import './AddUserForm.css'

const AddUserForm = ({ roles, handleCancel, handleSave }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState('')

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

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Perform validation and handle form submission
    if (password !== confirmPassword) {
      // Handle password mismatch error
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
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Correo Electrónico'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Contraseña'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder='Confirmar Contraseña'
          />
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
          <button type='button' onClick={handleCancel}>
            Cancelar
          </button>
          <button type='submit'>Guardar</button>
        </div>
      </form>
    </div>
  )
}

AddUserForm.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export default AddUserForm
