import './ProductsOptions.css'
import { ProductOptionsPropTypes } from '../../utils/propTypes'
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'

const ProductOptions = ({ productCount, options }) => {
  return (
    <main className='product-options'>
      <section className='product-options__counter'>{productCount}</section>
      <section className='product-options__actions'>
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
        <div className='product-options__dropdown'>
          {options.actions.map((action, index) => (
            <div className='product_actions' key={index}>
              {action.icon}
              <p>{action.label}</p>
            </div>
          ))}
        </div>
        <div className='product-options-button'>
          {options.buttons.map((button, index) => (
            <div key={index}>
              <ButtonGeneric buttonContent={button.label} onClick={button.onClick} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

ProductOptions.propTypes = ProductOptionsPropTypes

export default ProductOptions
