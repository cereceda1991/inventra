function ChangePassword() {
  return (
    <main className='container__change-password'>
      <h2>Cambiar Contraseña</h2>
      <div className='change-password'>
        <input type='password' placeholder='Nueva Contraseña' />
        <input type='password' placeholder='Confirmar Nueva Contraseña' />
        <button>Guardar</button>
      </div>
    </main>
  )
}

export default ChangePassword
