function EditProfile() {
  return (
    <main className='container__edit-profile'>
      <h2>Editar Perfil</h2>
      <div className='edit-profile'>
        <img src='https://i.ibb.co/Fmhvh7q/user.png' alt='user' />
        <input type='text' placeholder='Nombre' />
        <input type='email' placeholder='Correo' />
        <button>Guardar</button>
      </div>
    </main>
  )
}

export default EditProfile
