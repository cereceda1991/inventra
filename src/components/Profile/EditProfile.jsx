import { useState } from 'react'
import { TbCameraUp } from 'react-icons/tb'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'

function EditProfile() {
  const [profileImage, setProfileImage] = useState('https://i.ibb.co/Fmhvh7q/user.png')
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0]
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile)
      setSelectedImage(imageUrl)
    }
  }

  return (
    <main className='container__edit-profile'>
      <h2>Editar Perfil</h2>
      <div className='edit-profile'>
        <div className='profile-header'>
          <img src={selectedImage || profileImage} alt='user' />
          <label htmlFor='image-upload' className='edit-icon'>
            <TbCameraUp />
          </label>
          <input
            type='file'
            accept='image/*'
            id='image-upload'
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>
        <input type='text' placeholder='Nombre' />
        <input type='email' placeholder='Correo' />
        <ButtonGeneric buttonContent='Guardar'/>
      </div>
    </main>
  )
}

export default EditProfile
