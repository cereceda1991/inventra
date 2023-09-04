import { useEffect, useState } from 'react'
import { dataUser } from '../../API/dataUser'
import AddUserForm from '../../components/AddUser/AddUserForm'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { IconFilter, IconExport } from '../../utils/CustomIcons'
import './Users.css'
import ProductOptions from '../../components/ProductsOptions/ProductsOptions'
import DynamicTable from '../../components/ProjectTables/DynamicTable'

const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
const userName = 'Rocio del Solar'
const userRole = 'Administrador'

const userCount = '10 Usuarios'

const roles = ['Administrador', 'Inventariador', 'Supervisor', 'Operador']

const Users = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [headers, setHeaders] = useState([])
  const [keys, setKeys] = useState([])

  useEffect(() => {
    // Determinar qué conjunto de encabezados y claves utilizar según el tamaño de la pantalla
    if (window.innerWidth < 600) {
      setHeaders(['Usuario', 'Rol'])
      setKeys(['entity', 'role'])
    } else {
      setHeaders(['Usuario', 'Rol', 'Correo electrónico'])
      setKeys(['entity', 'role', 'mail'])
    }
  }, [])

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
      <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      <section className='container_user-main'>
        {showAddUserForm ? (
          <AddUserForm
            roles={roles}
            handleSave={handleAddUser}
            handleCancel={handleCancelAddUser}
          />
        ) : (
          <>
            <ProductOptions productCount={userCount} options={options} />
            <DynamicTable
              data={dataUser}
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
