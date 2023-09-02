import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BiShow, BiHide } from 'react-icons/bi'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'
import './ChangePassword.css'

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isDisabled = !newPassword || !confirmPassword

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (newPassword === confirmPassword) {
      // Aquí puedes implementar la lógica para cambiar la contraseña.
      toast.success('Contraseña cambiada exitosamente')
    } else {
      toast.error('Las contraseñas no coinciden')
    }
  }

  return (
    <main className='container__change-password'>
      <h2>Cambiar Contraseña</h2>
      <section className='change-password'>
        <form onSubmit={handleSubmit}>
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Nueva Contraseña'
              value={newPassword}
              onChange={handleNewPasswordChange}
              autoComplete='new-password'
              required
            />
            {showPassword ? (
              <BiHide className='password-toggle' onClick={handleShowPassword} />
            ) : (
              <BiShow className='password-toggle' onClick={handleShowPassword} />
            )}
          </div>
          <div className='password-input'>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder='Confirmar Nueva Contraseña'
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              autoComplete='new-password'
              required
            />
            {showPassword ? (
              <BiHide className='password-toggle' onClick={handleShowPassword} />
            ) : (
              <BiShow className='password-toggle' onClick={handleShowPassword} />
            )}
          </div>
          <ButtonGeneric buttonContent='Guardar' isDisabled={isDisabled} />
        </form>
      </section>
    </main>
  )
}

export default ChangePassword
