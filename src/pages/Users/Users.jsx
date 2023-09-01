import { useState } from 'react'
import { dataUser } from '../../API/dataUser'
import AddUserForm from '../../components/AddUser/AddUserForm'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserOptions from '../../components/UserOptions/UserOptions'
import UsersTable from '../../components/UsersTable/UsersTable'
import { IconFilter, IconExport } from '../../utils/CustomIcons'
import './Users.css'

const userImage = 'https://i.ibb.co/pbxRwqm/perfil.png'
const userName = 'Rocio del Solar'
const userRole = 'Administrador'

const handleEdit = () => {}

const handleDelete = () => {}

const handleIn = () => {}

const userCount = '10 Usuarios'

const roles = ['Administrador', 'Inventariador', 'Supervisor', 'Operador']

const Users = () => {
  const [showAddUserForm, setShowAddUserForm] = useState(false)

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
      { icon: <IconExport className='user__options-icon' />, label: 'Exportar' }
    ],
    buttons: [
      {
        label: `+ Agregar Usuario`,
        onClick: handleAddUser
      }
    ]
  }

  return (
    <section className='container__dashboard'>
      <Sidebar />
        <Navbar userImage={userImage} userName={userName} userRole={userRole} />
      {showAddUserForm ? (
        <AddUserForm roles={roles} handleSave={handleAddUser} handleCancel={handleCancelAddUser} />
      ) : (
        <>
          <UserOptions userCount={userCount} options={options} />
          <UsersTable
            data={dataUser}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleIn={handleIn}
          />
        </>
      )}
    </section>
  )
}

export default Users
