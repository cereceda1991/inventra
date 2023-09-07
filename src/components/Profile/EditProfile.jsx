import { useEffect, useState } from 'react';

import { TiCameraOutline } from 'react-icons/ti';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditProfile.css';

function EditProfile() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Carga los datos almacenados desde Local Storage cuando el componente se monta
    const userResponseString = localStorage.getItem('userResponse');
    if (userResponseString) {
      const userResponse = JSON.parse(userResponseString);
      setUserData(userResponse.data.user);
    }
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const profileEditedSuccessfully = true;

    if (profileEditedSuccessfully) {
      toast.success('Perfil actualizado');
    } else {
      toast.error('Error al guardar los cambios');
    }
  };

  return (
    <main className="container__edit-profile">
      <h2>Editar Perfil</h2>
      <section className="edit-profile">
        <header className="profile-image-container">
          <label htmlFor="image-upload">
            <img src={selectedImage || userData.profile} alt="user" />
            <div className="camera-icon">
              <TiCameraOutline />
            </div>
          </label>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </header>
        <form className="edit-profile-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Correo" />
          <ButtonGeneric buttonContent="Guardar" onClick={handleSubmit} />
        </form>
      </section>
    </main>
  );
}

export default EditProfile;
