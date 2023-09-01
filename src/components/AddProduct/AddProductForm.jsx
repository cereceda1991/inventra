import { useState } from 'react'
// Componentes
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric'
import RemoveBg from '../RemoveBg/RemoveBg'
// Api y Utils
import { categoryOptions } from '../../API/categoryOptions'
import { AddProductFormPropTypes } from '../../utils/propTypes'
// Notificaciones y estilos
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './AddProductForm.css'
const AddProductForm = ({ handleCancel, handleSave }) => {
  const [itemCode, setItemCode] = useState('')
  const [itemName, setItemName] = useState('')
  const [itemPrice, setItemPrice] = useState('')
  const [itemStock, setItemStock] = useState('')
  const [itemCategory, setItemCategory] = useState('')
  const [itemStockMin, setItemStockMin] = useState('')
  const [itemStockMax, setItemStockMax] = useState('')
  const [stockControlled, setStockControlled] = useState(false)

  const isDisabled = !itemCode || !itemName || !itemPrice || !itemStock || !itemCategory

  const handleFormSubmit = (event) => {
    event.preventDefault()
    // Mostrar los datos que estás enviando desde el formulario
    console.log({
      itemCode,
      itemName,
      itemPrice,
      itemStock,
      itemCategory,
      itemStockMin,
      itemStockMax,
      stockControlled
    })

    const productCreatedSuccessfully = true // Cambia esto según tu lógica real.

    if (productCreatedSuccessfully) {
      toast.success('Producto creado exitosamente')
    }
    handleSave({
      itemCode,
      itemName,
      itemPrice,
      itemStock,
      itemCategory,
      itemStockMin,
      itemStockMax,
      stockControlled
    })
  }

  return (
    <form className='add-product-form' onSubmit={handleFormSubmit}>
      <section className='left-inputs'>
        <RemoveBg />
      </section>
      <section className='center-inputs'>
        <input
          type='text'
          value={itemCode}
          onChange={(e) => setItemCode(e.target.value)}
          placeholder='Código del Item'
          autoComplete='itemcode'
          required
        />
        <input
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder='Nombre del Item'
          autoComplete='itemname'
          required
        />
        <input
          type='number'
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          placeholder='Precio del Item'
          autoComplete='itemprice'
          required
        />
        <input
          type='number'
          value={itemStock}
          onChange={(e) => setItemStock(e.target.value)}
          placeholder='Stock del Item'
          autoComplete='itemstock'
          required
        />
        <label>Información Adicional</label>
        <select value={itemCategory} onChange={(e) => setItemCategory(e.target.value)} required>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
      </section>
      <section className='right-inputs'>
        <div className='subtitle'>Stock</div>
        <div className='toggle-stock-controller'>
          <label>Controlar Stock del Item</label>
          <label className='toggle-label'>
            <input
              type='checkbox'
              checked={stockControlled}
              onChange={() => {
                setStockControlled(!stockControlled)
                if (!stockControlled) {
                  setItemStockMin('')
                  setItemStockMax('')
                }
              }}
            />
            <span className='toggle-switch'></span>
          </label>
        </div>
        <div className='stock-inputs'>
          <input
            type='number'
            value={itemStockMin}
            onChange={(e) => setItemStockMin(e.target.value)}
            placeholder='Stock Mínimo'
            disabled={!stockControlled}
          />
          <input
            type='number'
            value={itemStockMax}
            onChange={(e) => setItemStockMax(e.target.value)}
            placeholder='Stock Máximo'
            disabled={!stockControlled}
          />
        </div>
        <div className='button-group-products'>
          <ButtonGeneric buttonContent='Cancelar' onClick={handleCancel} />
          <ButtonGeneric buttonContent='Guardar' isDisabled={isDisabled} />
        </div>
      </section>
    </form>
  )
}

AddProductForm.propTypes = AddProductFormPropTypes

export default AddProductForm
