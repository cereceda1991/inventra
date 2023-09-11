import { useState } from 'react';
import ButtonGeneric from '../ButtonGeneric/ButtonGeneric';
import RemoveBg from '../RemoveBg/RemoveBg';
import { categoryOptions } from '../../API/categoryOptions';
import { AddProductFormPropTypes } from '../../utils/propTypes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AddProductForm.css';
import { useDispatch } from 'react-redux';
import {
  registerProduct,
  updateProduct,
} from '../../Redux/Product/productActions';
import { unitOptions } from '../../API/unitOptions';
import { useSelector } from 'react-redux';

const AddProductForm = ({ handleHide, initialProductData, isEditing }) => {

  const initialData = {
    SKU: '',
    description: '',
    category: '',
    stock: '',
    unit: '',
    price: '',
  };

  // Verifica si estás en el modo de edición y, si es así, copia los datos existentes
  if (initialProductData) {
    Object.assign(initialData, initialProductData);
  }

  const [formData, setFormData] = useState(initialData);
  const [stockControlled, setStockControlled] = useState(false);
  const [itemStockMin, setItemStockMin] = useState('');
  const [itemStockMax, setItemStockMax] = useState('');

  console.log(formData);

  const dispatch = useDispatch();

  const uploadedImageUrl = useSelector(
    (state) => state.image.uploadedImage?.data[0]?.urlImg,
  );

  console.log(uploadedImageUrl);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    // Asigna la URL de la imagen cargada al formulario
    event.preventDefault();
    formData.image_url = uploadedImageUrl;
    try {
      if (isEditing) {

        const response = await dispatch(
          updateProduct(initialProductData._id, formData),
        );
        console.log('Actualización exitosa del producto:', response);

        toast.success('Producto actualizado con éxito');
      } else {
        console.log(formData);
        const response = await dispatch(registerProduct(formData));

        console.log('Registro exitoso del producto:', response);
        toast.success('Producto creado con éxito');
      }
      handleHide();
    } catch (error) {
      console.error('Error en la operación:', error);
    }

  };


  const isDisabled = Object.values(formData).some((value) => value === '');


  return (
    <form className="add-product-form" onSubmit={handleFormSubmit}>
      <section className="left-inputs">
        <RemoveBg />
      </section>
      <section className="center-inputs">
        <input
          type="text"
          name="SKU"
          value={formData.SKU}
          onChange={handleInputChange}
          placeholder="Código del Producto"
          required
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Nombre del Producto"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          placeholder="Precio del Producto"
          required
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleInputChange}
          placeholder="Stock del Producto"
          required
        />
        <label>Información Adicional</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
        <select
          name="unit"
          value={formData.unit}
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione unidad de medida</option>
          {unitOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.description}
            </option>
          ))}
        </select>
      </section>

      <section className="right-inputs">
        <div className="toggle-stock-controller">
          <h1>Stock</h1>
          <div className="container__toggle-stock">
            <label>Controlar Stock del Producto</label>
            <label className="toggle-label">
              <input
                type="checkbox"
                checked={stockControlled}
                onChange={() => {
                  setStockControlled(!stockControlled);
                  if (!stockControlled) {
                    setItemStockMin('');
                    setItemStockMax('');
                  }
                }}
              />
              <span className="toggle-switch"></span>
            </label>
          </div>
        </div>
        <div className="stock-inputs">
          <input
            type="number"
            value={itemStockMin}
            onChange={(e) => setItemStockMin(e.target.value)}
            placeholder="Stock Mínimo"
            disabled={!stockControlled}
          />
          <input
            type="number"
            value={itemStockMax}
            onChange={(e) => setItemStockMax(e.target.value)}
            placeholder="Stock Máximo"
            disabled={!stockControlled}
          />
        </div>
        <div className="button-group-products">
          <ButtonGeneric buttonContent="Cancelar" onClick={handleHide} />
          <ButtonGeneric
            type="submit"
            buttonContent={isEditing ? 'Actualizar' : 'Guardar'}
            isDisabled={isDisabled}
          />
        </div>
      </section>
    </form>
  );
};

AddProductForm.propTypes = AddProductFormPropTypes;

export default AddProductForm;
