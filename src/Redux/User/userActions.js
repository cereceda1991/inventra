import axios from 'axios';
import { handleCommonErrors } from '../../utils/handleCommonErrors';
import { setSelectedUser, setUsers } from './userSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    dispatch(setUsers(response.data));
    console.log('Respuesta exitosa al obtener usuarios:', response.data);
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al obtener usuarios:', error);
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    dispatch(setSelectedUser(response.data));
    console.log('Respuesta exitosa al obtener usuario por ID:', response.data);
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al obtener usuario por ID:', error);
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/users/${userId}`, userData);
    dispatch(setSelectedUser(response.data));
    dispatch(getUsers());
    console.log('Respuesta exitosa al actualizar usuario:', response.data);
    return response;
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al actualizar usuario:', error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${userId}`);
    // Puedes manejar la actualización de la lista de usuarios si es necesario.
    dispatch(getUsers());
    console.log('Respuesta exitosa al eliminar usuario:', response.data);
    return response;
  } catch (error) {
    handleCommonErrors(error);
    console.error('Error al eliminar usuario:', error);
  }
};
