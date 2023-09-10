import { IconEdit, IconTrash } from '../../utils/CustomIcons';
import { DynamicTablePropTypes } from '../../utils/propTypes';
import './ProductTable.css';

const ProductTable = ({ data, headers, keys, onEdit, onDelete, datatype }) => {
  return (
    <div>
      <table className="product_table">
        <thead>
          <tr>
            <th colSpan="2">{datatype}</th>
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
