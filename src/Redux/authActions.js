import { setUser } from './authSlice'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

// Función de utilidad para manejar errores comunes
const handleCommonErrors = (error) => {
  if (error.response) {
    console.error(error.response.data)
    throw error.response.data
  } else {
    console.error(error.message)
    throw { error: 'Error de red' }
  }
}

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData)

    dispatch(setUser(response.data.user))
    return response
  } catch (error) {
    handleCommonErrors(error)
  }
}

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials)

    // Almacena la respuesta en Local Storage
    localStorage.setItem('userResponse', JSON.stringify(response.data))

    dispatch(setUser(response.data.credentials))
    return response
  } catch (error) {
    handleCommonErrors(error)
  }
}
