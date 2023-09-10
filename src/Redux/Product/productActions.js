import axios from 'axios';
import { handleCommonErrors } from '../../utils/handleCommonErrors';
import { setSelectedProduct, setProducts } from './productSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const registerProduct = (productData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData);

    dispatch(setProducts(response.data));
    return response;
  } catch (error) {
    handleCommonErrors(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    dispatch(setProducts(response.data));
    console.log('Respuesta exitosa al obtener productos:', response.data);
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al obtener productos:', error);
  }
};

export const getProductById = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    dispatch(setSelectedProduct(response.data));
    console.log('Respuesta exitosa al obtener producto por ID:', response.data);
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al obtener producto por ID:', error);
  }
};

export const updateProduct = (productId, productData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `${API_URL}/products/${productId}`,
      productData,
    );
    dispatch(setSelectedProduct(response.data));
    //!Por optimizar
    dispatch(getProducts());
    console.log('Respuesta exitosa al actualizar producto:', response.data);
    return response;
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al actualizar producto:', error);
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    // Puedes manejar la actualización de la lista de productos si es necesario.
    //!Por optimizar
    dispatch(getProducts());
    console.log('Respuesta exitosa al eliminar producto:', response.data);
    return response;
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al eliminar producto:', error);
  }
};
