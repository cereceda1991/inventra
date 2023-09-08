// imageActions.js

import axios from 'axios';
import { handleCommonErrors } from '../../utils/handleCommonErrors';
import { setUploadedImage } from './imageSlice';

const API_URL = import.meta.env.VITE_API_URL;

export const uploadImage = (formData) => async (dispatch) => {
  try {
    const authToken = localStorage.getItem('authToken');

    if (!authToken) {
      throw new Error('Token de autenticación no encontrado en el localStorage');
    }

    const response = await axios.post(`${API_URL}/images`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    dispatch(setUploadedImage(response.data));

    // Devuelve la URL de la imagen cargada
    return response.data.data[0].urlImg;
  } catch (error) {
    handleCommonErrors(error);
    throw error;
  }
};
