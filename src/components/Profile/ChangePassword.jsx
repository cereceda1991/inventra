import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiShow, BiHide } from 'react-icons/bi';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import './ChangePassword.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import showDialog from '../../utils/showDialog';
import { updateUser } from '../../Redux/User/userActions';

function ChangePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState(null);
  const [errors, setErrors] = useState({
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Carga los datos almacenados desde Local Storage cuando el componente se monta
    const userResponseString = localStorage.getItem('userResponse');
    if (userResponseString) {
      const userResponse = JSON.parse(userResponseString);
      setUserId(userResponse.data.user._id);
    }
  }, []);

  // Calcula si el botón "Guardar" debe estar deshabilitado
  const isDisabled = !newPassword || !confirmPassword;

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Muestra un cuadro de diálogo de confirmación
    const confirmed = await showDialog(
      'Confirmar Acción',
      '¿Estás seguro de que deseas realizar esta acción? Después de completarla, deberás volver a iniciar sesión con tus nuevas credenciales.',
      'warning',
      '#FF5733',
    );

    if (confirmed) {
      if (newPassword === confirmPassword) {
        // Datos del usuario actualizados
        const updatedUserData = {
          password: newPassword, // Usar newPassword en lugar de event.target.password.value
        };

        try {
          // Realiza una solicitud para cambiar la contraseña utilizando Redux
          const response = await dispatch(updateUser(userId, updatedUserData));

          if (response) {
            toast.success('Contraseña cambiada exitosamente');
          } else {
            toast.error('Las contraseñas no coinciden');
          }

          // Elimina los datos de inicio de sesión del almacenamiento local
          localStorage.removeItem('userResponse');
          localStorage.removeItem('authToken');

          // Redirige al usuario a la página de inicio
          navigate('/');
        } catch (error) {
          console.error('Error al cambiar la contraseña:', error);
          setErrors({
            password: error.error?.password || '',
          });
          toast.error('Error al cambiar la contraseña');
        }
      } else {
        toast.error('Las contraseñas no coinciden');
      }
    }
  };

  // Define la clase CSS para resaltar los campos con error
  const inputErrorClass = errors.password ? 'input-error' : '';


  return (
    <main className="container__change-password">
      <h2>Cambiar Contraseña</h2>
      <section className="change-password">
        <form onSubmit={handleSubmit}>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={handleNewPasswordChange}
              autoComplete="new-password"
              className={inputErrorClass}
              required
            />
            {showPassword ? (
              <BiHide
                className="password-toggle"
                onClick={handleShowPassword}
              />
            ) : (
              <BiShow
                className="password-toggle"
                onClick={handleShowPassword}
              />
            )}
          </div>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirmar Nueva Contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              autoComplete="new-password"
              className={inputErrorClass}
              required
            />
            {showPassword ? (
              <BiHide
                className="password-toggle"
                onClick={handleShowPassword}
              />
            ) : (
              <BiShow
                className="password-toggle"
                onClick={handleShowPassword}
              />
            )}
          </div>
          {errors.password && <div className="changePassword__error">{errors.password}</div>}
          <ButtonGeneric type='submit' buttonContent="Guardar" isDisabled={isDisabled} />
        </form>
      </section>
    </main>
  );
}

export default ChangePassword;
