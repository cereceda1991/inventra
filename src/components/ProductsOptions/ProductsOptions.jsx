import './ProductsOptions.css'
import { ProductOptionsPropTypes } from '../../utils/propTypes'

const ProductOptions = ({ productCount, options }) => {
  return (
    <div className='product-options'>
      <div className='product-options__counter'>{productCount}</div>
      <div className='product-options__actions'>
        <div className='product-options__dropdown'>
          <select>
            <option value=''>Ordenar por</option>
            {options.sortBy.map((option, index) => (
              <option key={index} value={`opcion${index + 1}`}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {options.actions.map((action, index) => (
          <div className='user__options' key={index}>
            {action.icon}
            <p>{action.label}</p>
          </div>
        ))}

        {options.buttons.map((button, index) => (
          <div className='user__options' key={index}>
            <button className='user__button' onClick={button.onClick}>
              {button.icon}
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

ProductOptions.propTypes = ProductOptionsPropTypes

export default ProductOptions
