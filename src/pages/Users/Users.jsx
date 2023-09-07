import { useEffect, useState, useRef } from 'react'
import AddUserForm from '../../components/AddUser/AddUserForm'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { IconFilter, IconExport } from '../../utils/CustomIcons'
import ProductOptions from '../../components/ProductsOptions/ProductsOptions'
import DynamicTable from '../../components/ProjectTables/DynamicTable'

import { useDispatch, useSelector } from 'react-redux'

import './Users.css'
import { roles } from '../../API/dataUser'
import { getUsers } from '../../Redux/User/userActions'

const Users = () => {
  const dispatch = useDispatch()
  const usersData = useSelector((state) => state.user.users.data)
  const users = usersData ? usersData.users : []
  const prevUsersDataRef = useRef(usersData)

  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [headers, setHeaders] = useState([])
  const [keys, setKeys] = useState([])

  useEffect(() => {
    // Determinar qué conjunto de encabezados y claves utilizar según el tamaño de la pantalla
    if (window.innerWidth < 600) {
      setHeaders(['Usuario', 'Rol'])
      setKeys(['name', 'role'])
    } else {
      setHeaders(['Usuario', 'Rol', 'Correo electrónico'])
      setKeys(['name', 'role', 'email'])
    }

    // Obtener la lista de usuarios desde el backend al cargar el componente
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    // Compara el estado anterior con el nuevo estado
    if (prevUsersDataRef.current !== usersData) {
      // Actualiza la referencia con el nuevo estado
      prevUsersDataRef.current = usersData
      // No es necesario realizar otra llamada a dispatch(getUsers()) aquí
    }
  }, [usersData])

  // Define las funciones para las acciones de editar, eliminar e ingresar
  const handleEdit = (item) => {
    // Lógica para editar el usuario
    console.log('Editar usuario:', item)
  }

  const handleDelete = (item) => {
    // Lógica para eliminar el usuario
    console.log('Eliminar usuario:', item)
  }

  const handleViewDetails = (item) => {
    // Lógica para ingresar el usuario
    console.log('Ingresar usuario:', item)
  }

  const handleAddUser = () => {
    setShowAddUserForm(true)
  }

  const handleCancelAddUser = () => {
    setShowAddUserForm(false)
  }

  const handleSaveUser = () => {
    setShowAddUserForm(false)
  }

  const userCounter = usersData ? usersData.users.length : 0
  let userCount = `${userCounter} Usuarios`

  const options = {
    sortBy: ['nombre', 'rol', 'correo'],
    actions: [
      { icon: <IconFilter className='user__options-icon' />, label: 'Filtrar' },
      { icon: <IconExport className='user__options-icon' />, label: 'Exportar' },
    ],
    buttons: [
      {
        label: `+ Agregar Usuario`,
        onClick: handleAddUser,
      },
    ],
  }

  return (
    <section className='container__dashboard'>
      <Sidebar />
      <Navbar />
      <section className='container_user-main'>
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
              datatype='Usuario'
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
  )
}

export default Users
