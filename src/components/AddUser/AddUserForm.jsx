import { useState } from 'react';
import { BiLowVision, BiShow } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddUserForm.css';
import { useDispatch } from 'react-redux';
import { AddUserFormPropTypes } from '../../utils/propTypes';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import { registerUser } from '../../Redux/Auth/authActions';

const AddUserForm = ({ roles, handleHide }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const isDisabled = Object.values(formData).some((value) => value === '');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await dispatch(registerUser(formData));
      console.log('Registro exitoso:', response);
      toast.success('Usuario creado con éxito');
      handleHide();
    } catch (error) {
      if (error.errors) {
        setErrors(error.errors);
      } else {
        console.error('Error en el registro:', error);
      }
    }
  };

  const showError = (field) =>
    errors[field] && (
      <div className="auth__error">{errors[field].join(', ')}</div>
    );

  return (
    <main className="add-user-form">
      <form onSubmit={handleFormSubmit}>
        {['name', 'email', 'password', 'confirmPassword'].map((field) => (
          <div className="form-group" key={field}>
            <input
              type={
                field === 'password' || field === 'confirmPassword'
                  ? showPassword
                    ? 'text'
                    : 'password'
                  : 'text'
              }
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              placeholder={
                field === 'name'
                  ? 'Nombre de Usuario'
                  : field === 'email'
                    ? 'Correo Electrónico'
                    : field === 'password'
                      ? 'Contraseña'
                      : 'Confirmar Contraseña'
              }
              autoComplete={
                field === 'email'
                  ? 'email'
                  : field === 'password'
                    ? 'new-password'
                    : field === 'confirmPassword'
                      ? 'new-password'
                      : 'name'
              }
              className={errors[field] ? 'input-error' : ''}
              required={field !== 'confirmPassword'}
            />
            {field === 'password' && (
              <p
                className="password-toggle"
                onClick={() => togglePasswordVisibility('password')}
              >
                {showPassword ? <BiLowVision /> : <BiShow />}
              </p>
            )}
            {showError(field)}
          </div>
        ))}
        <div className="form-group">
          <select
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="">Seleccione un rol</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <p className="note">
          Por defecto, solo los usuarios administradores podrán hacer algún tipo
          de creación y modificación en el sistema.
        </p>
        <div className="button-group">
          <ButtonGeneric buttonContent="Cancelar" onClick={handleHide} />
          <ButtonGeneric
            type="submit"
            buttonContent="Guardar"
            isDisabled={isDisabled}
          />
        </div>
      </form>
    </main>
  );
};

AddUserForm.propTypes = AddUserFormPropTypes;

export default AddUserForm;
