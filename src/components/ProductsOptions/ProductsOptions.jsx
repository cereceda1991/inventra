import './ProductsOptions.css'
import { IconCategory, IconExport, IconFilter, IconPlus } from '../../utils/CustomIcons'
import { ProductOptionsPropTypes } from '../../utils/propTypes'

const ProductOptions = ({ productCount }) => {
  return (
    <div className='product-options'>
      <div className='product-options__counter'>{productCount}</div>
      <div className='product-options__actions'>
        <div className='product-options__dropdown'>
          <select>
            <option value=''>Ordenar por</option>
            <option value='opcion1'>producto</option>
            <option value='opcion2'>código</option>
            <option value='opcion3'>unidad</option>
            <option value='opcion4'>categoría</option>
            <option value='opcion5'>precio</option>
          </select>
        </div>

        <div className='product__options'>
          <IconFilter className='product__options-icon' />
          <p>Filtrar</p>
        </div>
        <div className='product__options'>
          <IconExport className='product__options-icon' />
          <p>Exportar</p>
        </div>
        <div className='product__options'>
          <IconCategory className='product__options-icon' />
          <p>Categorías</p>
        </div>
        <div className='product__options'>
          <button className='product__button'>
            <IconPlus className='product__options-icon' />
            Agregar Item
          </button>
        </div>
      </div>
    </div>
  )
}

ProductOptions.propTypes = ProductOptionsPropTypes

export default ProductOptions
