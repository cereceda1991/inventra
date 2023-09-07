import axios from 'axios';
import { handleCommonErrors } from '../../utils/handleCommonErrors';
import { setUser } from './authSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);

    dispatch(setUser(response.data.user));
    return response;
  } catch (error) {
    handleCommonErrors(error);
  }
};

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);

    // Almacena la respuesta en Local Storage
    localStorage.setItem('userResponse', JSON.stringify(response.data));
    dispatch(setUser(response.data.credentials));
    return response;
  } catch (error) {
    handleCommonErrors(error);
  }
};
