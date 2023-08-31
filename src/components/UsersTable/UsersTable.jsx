import { IconEdit, IconTrash } from '../../utils/CustomIcons'
import { PropTypes } from 'prop-types'
import './UsersTable.css'

const UsersTable = ({ data, handleEdit, handleDelete }) => {
  const renderActions = (item) => (
    <section className='section_into-td'>
      {item.actions.includes('edit') && (
        <p className='action__icon'>
          <IconEdit onClick={() => handleEdit(item)} />
        </p>
      )}
      {item.actions.includes('delete') && (
        <p className='action__icon'>
          <IconTrash onClick={() => handleDelete(item)} />
        </p>
      )}
    </section>
  )

  return (
    <section className='container__table'>
      <table className='excel-table'>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.user}</td>
              <td>{item.role}</td>
              <td>{item.mail}</td>
              <td>{renderActions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

UsersTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      mail: PropTypes.string.isRequired,
      actions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default UsersTable
