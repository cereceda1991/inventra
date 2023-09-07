// Función de utilidad para manejar errores comunes
export const handleCommonErrors = (error) => {
  if (error.response) {
    console.error(error.response.data);
    throw error.response.data;
  } else {
    console.error(error.message);
    throw { error: 'Error de red' };
  }
};
