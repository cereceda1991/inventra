import { useEffect, useState } from 'react';
import { TiCameraOutline } from 'react-icons/ti';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EditProfile.css';
import { uploadImage } from '../../Redux/Images/imageActions';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../Redux/User/userActions';
import { useNavigate } from 'react-router-dom';
import showDialog from '../../utils/showDialog';

function EditProfile() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Carga los datos almacenados desde Local Storage cuando el componente se monta
    const userResponseString = localStorage.getItem('userResponse');
    if (userResponseString) {
      const userResponse = JSON.parse(userResponseString);
      setUserData(userResponse.data.user);
      setUserId(userResponse.data.user._id);
    }
  }, []);

  const handleImageChange = async (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);

      try {
        setIsLoading(true); // Activa el estado de carga

        const imageUrl = await dispatch(uploadImage(formData));
        setSelectedImage(imageUrl);
        console.log(imageUrl);
      } catch (error) {
        console.error('Error al cargar imagen:', error);
      } finally {
        setIsLoading(false); // Desactiva el estado de carga cuando la operación se completa (ya sea con éxito o con error)
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const confirmed = await showDialog(
      'Confirmar Acción',
      '¿Estás seguro de que deseas realizar esta acción? Después de completarla, deberás volver a iniciar sesión con tus nuevas credenciales.',
      'warning',
      '#FF5733',
    );

    if (confirmed) {
      try {
        setIsLoading(true); // Activate loading state

        // You can update the userData object here with the new values from the form inputs
        const updatedUserData = {
          name: event.target.name.value,
          email: event.target.email.value,
          profile: selectedImage,
        };

        // Call the updateUser action with the updated user data
        const response = await dispatch(updateUser(userId, updatedUserData)); // Make sure to pass the correct user ID and updated user data

        // Check the response for success (you may need to customize this based on your API response)
        if (response) {
          toast.success('Perfil actualizado');
        } else {
          toast.error('Error al guardar los cambios');
        }
      } catch (error) {
        console.error('Error al actualizar usuario:', error);
        toast.error('Error al guardar los cambios'); // Handle the error gracefully
      } finally {
        setIsLoading(false);
        localStorage.removeItem('userResponse');
        localStorage.removeItem('authToken');
        navigate('/'); // Deactivate loading state when the operation is complete (whether success or error)
      }
      console.log(selectedImage);
    }
  };

  return (
    <main className="container__edit-profile">
      <h2>Editar Perfil</h2>
      <section className="edit-profile">
        <header className="profile-image-container">
          <label htmlFor="image-upload">
            {isLoading && <span className="loading loading-spinner"></span>}
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
        <form className="edit-profile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
            value={userData.name || ''}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            required
            value={userData.email || ''}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />

          <ButtonGeneric type="submit" buttonContent="Guardar" />
        </form>
      </section>
    </main>
  );
}

export default EditProfile;
