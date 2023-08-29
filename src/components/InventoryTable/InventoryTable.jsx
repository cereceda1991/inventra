import { IconArrow, IconEdit, IconTrash } from '../../utils/CustomIcons'
import { InventoryTablePropTypes } from '../../utils/propTypes'
import './InventoryTable.css'
const InventoryTable = ({ data, handleEdit, handleDelete, handleIn }) => {
  return (
    <section className='container__table'>
      <table className='excel-table'>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Código</th>
            <th>Unidad</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className='td_product'>
                <img src={item.foto} alt='Producto' />
                {item.descripcion}
              </td>
              <td>{item.codigo}</td>
              <td>{item.unidad}</td>
              <td>{item.categoria}</td>
              <td>{item.precio}</td>
              <td>
                <button className='action__icon' onClick={() => handleIn(item)}>
                  <IconArrow />
                </button>
                <button className='action__icon' onClick={() => handleEdit(item)}>
                  <IconEdit />
                </button>
                <button className='action__icon' onClick={() => handleDelete(item)}>
                  <IconTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

InventoryTable.propTypes = InventoryTablePropTypes

export default InventoryTable
