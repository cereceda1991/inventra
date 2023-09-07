import { useEffect, useState } from 'react';
import AddUserForm from '../../components/AddUser/AddUserForm';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IconFilter, IconExport } from '../../utils/CustomIcons';
import ProductOptions from '../../components/ProductsOptions/ProductsOptions';
import { useDispatch, useSelector } from 'react-redux';

import { deleteUser, getUsers } from '../../Redux/User/userActions';
import { setUsers } from '../../Redux/User/userSlice';

import { roles } from '../../API/dataUser';
import showDialog from '../../utils/showDialog';
import './Users.css';
import UserTable from '../../components/ProjectTables/UserTable';

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users.data);
  const users = usersData ? usersData.users : [];

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  const [headers, setHeaders] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    // Determinar qué conjunto de encabezados y claves utilizar según el tamaño de la pantalla
    if (window.innerWidth < 600) {
      setHeaders(['Usuario', 'Rol']);
      setKeys(['name', 'role']);
    } else {
      setHeaders(['Usuario', 'Rol', 'Correo electrónico']);
      setKeys(['name', 'role', 'email']);
    }

    // Obtener la lista de usuarios desde el backend al cargar el componente
    dispatch(getUsers());
  }, [dispatch]);

  // Define las funciones para las acciones de editar, eliminar e ingresar
  const handleEdit = (item) => {
    setEditedUser(item);
    displayUserForm();
    // Lógica para editar el usuario
    console.log('Editar usuario:', item);
  };

  const handleDelete = async (item) => {
    const confirmed = await showDialog(
      'Eliminar Usuario',
      '¿Estás seguro de que deseas eliminar al usuario?',
      'warning',
      '#FE0000',
    );

    if (confirmed) {
      // Llama a la acción deleteUser con el ID del usuario que deseas eliminar
      const response = await dispatch(deleteUser(item._id));

      if (response.status === 200) {
        // Actualiza la lista de usuarios en el estado global si la eliminación fue exitosa
        dispatch(setUsers(usersData.users)); // Asume que usersData.users siempre está definido
        console.log('Usuario eliminado con éxito:', item);
      } else {
        console.error('Error al eliminar usuario:', response.data.message);
      }
    }
  };

  // Lógica para los mostrar/ocultar formulario de usuarios

  const displayUserForm = () => {
    setShowAddUserForm(true);
  };

  const hideUserAddForm = () => {
    setShowAddUserForm(false);
    setEditedUser(null);
  };

  const userCounter = usersData ? usersData.users.length : 0;
  let userCount = `${userCounter} Usuarios`;

  const options = {
    sortBy: ['nombre', 'rol', 'correo'],
    actions: [
      { icon: <IconFilter className="user__options-icon" />, label: 'Filtrar' },
      {
        icon: <IconExport className="user__options-icon" />,
        label: 'Exportar',
      },
    ],
    buttons: [
      {
        label: `+ Agregar Usuario`,
        onClick: displayUserForm,
      },
    ],
  };

  return (
    <section className="container__dashboard">
      <Sidebar />
      <Navbar />
      <section className="container_user-main">
        {showAddUserForm ? (
          <AddUserForm
            roles={roles}
            handleHide={hideUserAddForm}
            initialUserData={editedUser}
            isEditing={editedUser !== null}
          />
        ) : (
          <>
            <ProductOptions productCount={userCount} options={options} />
            <UserTable
              data={users}
              datatype="Usuario"
              headers={headers}
              keys={keys}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </>
        )}
      </section>
    </section>
  );
};

export default Users;
