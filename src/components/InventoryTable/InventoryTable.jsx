import { IconArrow, IconEdit, IconTrash } from '../../utils/CustomIcons'
import { InventoryTablePropTypes } from '../../utils/propTypes'
import './InventoryTable.css'

const InventoryTable = ({ data, handleEdit, handleDelete, handleIn }) => {
  const renderActions = (item) => (
    <section className='section_into-td'>
      <div className='action__icon'>
        <IconArrow onClick={() => handleIn(item)} />
      </div>
      <div className='action__icon'>
        <IconEdit onClick={() => handleEdit(item)} />
      </div>
      <div className='action__icon'>
        <IconTrash onClick={() => handleDelete(item)} />
      </div>
    </section>
  )

  const products = (item) => (
    <section className='section_into-td'>
      <div>
        <img src={item.foto} alt='Producto' />
      </div>
      <div>{item.descripcion}</div>
    </section>
  )

  return (
    <section className='container__table'>
      <table className='excel-table'>
        <thead>
          <tr>
            <th colSpan={2}>Producto</th>
            <th>Código</th>
            <th>Categoría</th>
            <th>Unidad</th>
            <th>Precio</th>
            <th colSpan={3}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{products(item)}</td>
              <td></td>
              <td>{item.codigo}</td>
              <td>{item.categoria}</td>
              <td>{item.unidad}</td>
              <td>{item.precio}</td>
              <td> {renderActions(item)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

InventoryTable.propTypes = InventoryTablePropTypes

export default InventoryTable
