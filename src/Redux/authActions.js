// authActions.js
import { setUser } from './authSlice'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    console.log('Respuesta del servidor:', response.data); // Mostrar la respuesta en la consola
    dispatch(setUser(response.data.user));
    console.log(response);
    // Puedes mostrar un mensaje de éxito al usuario si el registro fue exitoso
  } catch (error) {
    // Manejar el error y proporcionar retroalimentación al usuario
    if (error.response) {
      // El servidor respondió con un error (por ejemplo, un código 4xx o 5xx)
      console.error(error.response.data); // Puedes mostrar error.response.data en la interfaz de usuario
      // Mostrar un mensaje de error al usuario (puedes usar una librería como react-toastify)
    } else {
      // Error de red u otro error inesperado
      console.error(error.message);
      // Mostrar un mensaje de error genérico al usuario
      // Puedes redirigir a una página de error si es necesario
    }
  }
};


export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials)
    dispatch(setUser(response.data.user))
    console.log(response);
    // Puedes mostrar un mensaje de éxito al usuario si el inicio de sesión fue exitoso
  } catch (error) {
    // Manejar el error y proporcionar retroalimentación al usuario
    if (error.response) {
      // El servidor respondió con un error (por ejemplo, un código 4xx o 5xx)
      console.error(error.response.data); // Puedes mostrar error.response.data en la interfaz de usuario
      // Mostrar un mensaje de error al usuario (puedes usar una librería como react-toastify)
    } else {
      // Error de red u otro error inesperado
      console.error(error.message);
      // Mostrar un mensaje de error genérico al usuario
      // Puedes redirigir a una página de error si es necesario
    }
  }
}
