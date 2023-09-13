import { useDispatch, useSelector } from 'react-redux';
import { IconEdit, IconTrash } from '../../utils/CustomIcons';
import { DynamicTablePropTypes } from '../../utils/propTypes';
import { setSort } from '../../Redux/Product/filterProductSlice';

import './ProductTable.css';

const ProductTable = ({ data, headers, keys, onEdit, onDelete, datatype }) => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.filterProduct.sortBy);
  const sortOrder = useSelector((state) => state.filterProduct.sortOrder);

  // Función para cambiar el orden de clasificación al hacer clic en la cabecera
  const handleHeaderClick = (column) => {
    // Si el mismo campo se hace clic nuevamente, cambia el orden de clasificación
    const newOrder = sortBy === column && sortOrder === 'asc' ? 'desc' : 'asc';
    dispatch(setSort({ column, order: newOrder }));
  };

  // Copia los datos para no modificar el arreglo original
  const sortedData = [...data];

  // Ordena los datos según el criterio actual
  if (sortBy) {
    sortedData.sort((a, b) => {
      const aValue = a[sortBy];
      const bValue = b[sortBy];

      // Verifica si los valores son undefined y colócalos al final
      if (aValue === undefined) return 1;
      if (bValue === undefined) return -1;

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });
  }


  return (
    <div>
      <table className="product_table">
        <thead>
          <tr>
            <th colSpan="2">{datatype}</th>
            {headers.slice(1).map((header, index) => (
              <th key={index} onClick={() => handleHeaderClick(keys[index + 1])}>
                {header}
                {sortBy === keys[index + 1] && (
                  sortOrder === 'asc' ? '↑' : '↓'
                )}
              </th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <img src={item['image_url']} alt={item['image_url']} />
              </td>
              <td>{item['description']}</td>
              {keys.slice(1).map((key, colIndex) => (
                <td key={colIndex}>{item[key]}</td>
              ))}

              <td className="td_actions">
                <button
                  className="table_icon-edit"
                  onClick={() => onEdit(item)}
                >
                  <IconEdit />
                </button>
                <button
                  className="table_icon-trash"
                  onClick={() => onDelete(item)}
                >
                  <IconTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductTable.propTypes = DynamicTablePropTypes;

export default ProductTable;
