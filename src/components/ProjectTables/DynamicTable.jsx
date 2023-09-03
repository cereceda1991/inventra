import { IconArrow, IconEdit, IconTrash } from '../../utils/CustomIcons'
import { DynamicTablePropTypes } from '../../utils/propTypes'
import './DynamicTable.css'

const DynamicTable = ({ data, headers, keys, onEdit, onDelete, onViewDetails, datatype }) => {
  return (
    <table className='dinamic__table'>
      <thead>
        <tr>
          <th colSpan='2'>{datatype}</th>
          {headers.slice(1).map((header, index) => (
            <th key={index}>{header}</th>
          ))}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            <td>
              <img src={item['image_url']} alt={item['entity']} />
            </td>
            <td>{item['entity']}</td>
            {keys.slice(1).map((key, colIndex) => (
              <td key={colIndex}>{item[key]}</td>
            ))}

            <td className='td_actions'>
              <button className='table_icon-arrow' onClick={() => onViewDetails(item)}>
                <IconArrow />
              </button>
              <button className='table_icon-edit' onClick={() => onEdit(item)}>
                <IconEdit />
              </button>
              <button className='table_icon-trash' onClick={() => onDelete(item)}>
                <IconTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

DynamicTable.propTypes = DynamicTablePropTypes

export default DynamicTable
