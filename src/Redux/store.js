import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from './Auth/authSlice';
import userReducer from './User/userSlice';
import darkModeReducer from './DarkMode/darkModeSlice';
import imageReducer from './Images/imageSlice';
import productReducer from './Product/productSlice';
import exportReducer from './ExportExcel/exportSlice';
import filterProductReducer from './Product/filterProductSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    darkMode: darkModeReducer,
    image: imageReducer,
    product: productReducer,
    export: exportReducer,
    filterProduct: filterProductReducer,
  },
  middleware: [thunk],
});

export default store;
