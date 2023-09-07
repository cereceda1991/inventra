import { useEffect, useState } from 'react';
import AddUserForm from '../../components/AddUser/AddUserForm';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { IconFilter, IconExport } from '../../utils/CustomIcons';
import ProductOptions from '../../components/ProductsOptions/ProductsOptions';
import DynamicTable from '../../components/ProjectTables/DynamicTable';

import { useDispatch, useSelector } from 'react-redux';

import { deleteUser } from '../../Redux/User/userActions';
import { setUsers } from '../../Redux/User/userSlice';

import './Users.css';
import { roles } from '../../API/dataUser';
import { getUsers } from '../../Redux/User/userActions';
import showDialog from '../../utils/showDialog';

const Users = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.user.users.data);
  const users = usersData ? usersData.users : [];

  const [showAddUserForm, setShowAddUserForm] = useState(false);
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
    // Lógica para editar el usuario
    console.log('Editar usuario:', item);
  };

  const handleViewDetails = (item) => {
    // Lógica para ingresar el usuario
    console.log('Ingresar usuario:', item);
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

  // Lógica para los modals

  const handleAddUser = () => {
    setShowAddUserForm(true);
  };

  const handleCancelAddUser = () => {
    setShowAddUserForm(false);
  };

  const handleSaveUser = () => {
    setShowAddUserForm(false);
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
        onClick: handleAddUser,
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
            handleSave={handleSaveUser}
            handleCancel={handleCancelAddUser}
          />
        ) : (
          <>
            <ProductOptions productCount={userCount} options={options} />
            <DynamicTable
              data={users}
              datatype="Usuario"
              headers={headers}
              keys={keys}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewDetails={handleViewDetails}
            />
          </>
        )}
      </section>
    </section>
  );
};

export default Users;
