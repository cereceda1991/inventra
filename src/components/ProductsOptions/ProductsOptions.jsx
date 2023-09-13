import './ProductsOptions.css';
import { ProductOptionsPropTypes } from '../../utils/propTypes';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import { setSort } from '../../Redux/Product/filterProductSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductOptions = ({ productCount, options }) => {

  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.filterProduct.sortBy);
  console.log(sortBy);

  // Función para manejar el cambio en el select de ordenamiento
  const handleSortChange = (event) => {
    const selectedValue = event.target.value;
    // Despacha la acción para actualizar el criterio de ordenamiento
    dispatch(setSort({ column: selectedValue, order: 'asc' }));
  };

  return (
    <main className="product-options">
      <section className="product-options__counter">{productCount}</section>
      <section className="product-options__actions">
        <div className="product-options__dropdown">
          <select onChange={handleSortChange} value={sortBy}>
            <option value="">Ordenar por</option>
            {options.sortBy.map((option, index) => (
              <option key={index} value={option.value}>
                {option.description}
              </option>
            ))}
          </select>
        </div>
        <div className="product-options__dropdown">
          {options.actions.map((action, index) => (
            <div className="product_actions" key={index}>
              {action.icon}
              <p>{action.label}</p>
            </div>
          ))}
        </div>
        <div className="product-options-button">
          {options.buttons.map((button, index) => (
            <div key={index}>
              <ButtonGeneric
                buttonContent={button.label}
                onClick={button.onClick}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

ProductOptions.propTypes = ProductOptionsPropTypes;

export default ProductOptions;
