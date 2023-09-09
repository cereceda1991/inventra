import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uploadedImage: null, // Aquí puedes almacenar la imagen cargada
  // Otros campos de estado relacionados con las imágenes
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setUploadedImage: (state, action) => {
      state.uploadedImage = action.payload;
    },
  },
});

export const { setUploadedImage } = imageSlice.actions;
export default imageSlice.reducer;
